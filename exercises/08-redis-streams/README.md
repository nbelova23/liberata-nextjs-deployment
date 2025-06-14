# Redis Streams Exercises 📨
*Learn Message Queues the Easy Way*

## 🚀 Quick Start (10 Minutes!)

**Ready to build a message system? Follow these 5 steps:**

1. **Open your terminal and navigate to this folder:**
   ```bash
   cd exercises/08-redis-streams
   ```

2. **Install the required packages:**
   ```bash
   pnpm install
   ```
   *This downloads the Redis client library*

3. **Install Docker (if you don't have it):**
   
   **What is Docker?** Think of Docker like a virtual computer that runs inside your computer. It lets us run Redis (the database) without installing it directly on your machine.
   
   **macOS:**
   - Download Docker Desktop from [docker.com/products/docker-desktop](https://www.docker.com/products/docker-desktop/)
   - Drag the Docker app to your Applications folder
   - Open Docker Desktop and wait for it to start (you'll see a whale icon in your menu bar)
   
   **Windows:**
   - Download Docker Desktop from [docker.com/products/docker-desktop](https://www.docker.com/products/docker-desktop/)
   - Run the installer and restart your computer
   - Open Docker Desktop and wait for it to start
   
   **How to know Docker is ready:** Open terminal and type `docker --version`. You should see something like "Docker version 20.x.x"

4. **Start Redis server:**
   ```bash
   docker run -d --name redis-streams -p 6379:6379 redis:7-alpine
   ```
   *This starts Redis in a container (like starting a post office)*
   
   **What this command does:**
   - `docker run` = Start a new virtual computer
   - `-d` = Run in background (so you can keep using your terminal)
   - `--name redis-streams` = Give it a friendly name
   - `-p 6379:6379` = Let your computer talk to Redis
   - `redis:7-alpine` = Use the Redis database software
   
   **First time?** This will download Redis automatically (takes 1-2 minutes)

5. **Test your setup:**
   ```bash
   pnpm exercise1
   ```
   *If this works without errors, you're ready to go!*

**Now you're ready to learn message queues! Your mission: build a reliable message processing system.**

---

## 🤔 What are Redis Streams?

Think of Redis Streams as **a smart post office** for your application's messages:

### **Redis Streams = Smart Post Office**
- **Streams** = Mail routes (organized message channels)
- **Messages** = Letters (data you want to send)
- **Consumers** = Mail carriers (workers that process messages)
- **Consumer Groups** = Delivery teams (coordinated workers)
- **Message IDs** = Tracking numbers (unique identifiers)

### **Why Learn This?**
Every modern app needs reliable message processing:
- **Chat Apps**: Messages between users
- **E-commerce**: Order processing, payment notifications
- **Social Media**: Feed updates, notifications
- **Banking**: Transaction processing, fraud alerts
- **Gaming**: Real-time events, leaderboard updates

---

## 🎯 Key Concepts (Simple Explanations)

### 1. Streams = Organized Message Channels
```javascript
// Create a stream by adding a message (like opening a mail route)
await client.xAdd('user-actions', '*', {
  action: 'login',
  userId: '123',
  timestamp: Date.now()
});
```

### 2. Consumer Groups = Coordinated Teams
```javascript
// Create a team of workers (like forming a delivery team)
await client.xGroupCreate('user-actions', 'processing-team', '0');

// Workers read messages (like mail carriers picking up mail)
const messages = await client.xReadGroup({
  key: 'user-actions',
  group: 'processing-team',
  consumer: 'worker-1',
  id: '>'
});
```

### 3. Message Processing = Reliable Delivery
```javascript
// Process the message (like delivering mail)
for (const message of messages) {
  try {
    await processUserAction(message);
    // Acknowledge successful delivery
    await client.xAck('user-actions', 'processing-team', message.id);
  } catch (error) {
    console.error('Failed to process message:', error);
    // Message stays in pending list for retry
  }
}
```

### 4. Stream Management = Post Office Operations
```javascript
// Monitor stream length (like checking mail volume)
const info = await client.xInfoStream('user-actions');
console.log(`Stream has ${info.length} messages`);

// Trim old messages (like clearing old mail)
await client.xTrim('user-actions', 'MAXLEN', 1000);
```

---

## 📝 Exercise Overview

### Exercise 1: Basic Stream Operations 📬
**Your mission:** Learn fundamental stream operations

**What you'll build:**
- Create streams and add messages
- Read messages from streams
- Understand message IDs and ordering
- Basic stream information

**What you'll learn:**
- How to send messages reliably
- How message ordering works
- How to read message history
- Basic Redis Streams commands

### Exercise 2: Consumer Groups 👥
**Your mission:** Build coordinated message processing

**What you'll build:**
- Consumer groups for team coordination
- Multiple consumers working together
- Message acknowledgment system
- Pending message handling

**What you'll learn:**
- How to scale message processing
- How to prevent message loss
- How to handle worker failures
- How to coordinate multiple workers

### Exercise 3: Message Processing Patterns 📝
**Your mission:** Implement real-world processing patterns

**What you'll build:**
- Retry mechanisms for failed messages
- Dead letter queues for poison messages
- Message filtering and routing
- Batch processing optimization

**What you'll learn:**
- How to handle processing failures
- How to implement retry logic
- How to optimize throughput
- How to handle edge cases

### Exercise 4: Stream Management & Monitoring 📊
**Your mission:** Build production-ready stream management

**What you'll build:**
- Stream monitoring and metrics
- Automatic scaling based on load
- Stream cleanup and maintenance
- Performance optimization

**What you'll learn:**
- How to monitor stream health
- How to optimize performance
- How to manage memory usage
- How to scale horizontally

---

## 🎯 Your Mission: Build a Message Processing System

### Step 1: Choose Your Learning Path

**Option A: Run All Exercises (Recommended for first time)**
```bash
pnpm start
```
*This runs all 4 exercises in sequence - great for seeing the full picture!*

**Option B: Run Individual Exercises (For focused learning)**
```bash
# Start with Exercise 1: Basic Streams
pnpm exercise1

# Then Exercise 2: Consumer Groups  
pnpm exercise2

# Then Exercise 3: Message Processing
pnpm exercise3

# Finally Exercise 4: Stream Management
pnpm exercise4
```

**Watch the terminal output** - it shows message flow and tells you which functions to implement!

3. **Check Redis directly** (optional):
   ```bash
   docker exec -it redis-streams redis-cli
   XINFO STREAM user-actions
   ```

### Step 2: Understand the Code

**Open `src/01-basic-streams.ts` and look for the `TODO` comments.**

You'll see functions like:
- `addMessage()` - Send messages to a stream
- `readMessages()` - Read messages from a stream
- `createConsumerGroup()` - Set up coordinated processing
- `processAsConsumer()` - Process messages as a team member

**Each function has helpful hints showing the Redis commands!**

### Step 3: Build Real Features

- **Try different message types** (user events, orders, notifications)
- **Experiment with multiple consumers** working together
- **Add error handling** and retry logic
- **Monitor stream performance** and optimize

---

## 💡 Implementation Hints

### Adding Messages (Like Sending Mail)
```javascript
// Add a message with automatic ID
const messageId = await client.xAdd('orders', '*', {
  orderId: '12345',
  userId: 'user123',
  amount: '99.99',
  status: 'pending'
});

// Message ID format: timestamp-sequence (e.g., "1640995200000-0")
console.log('Message sent with ID:', messageId);
```

### Reading Messages (Like Collecting Mail)
```javascript
// Read all messages from the beginning
const messages = await client.xRead({
  key: 'orders',
  id: '0-0'  // Start from beginning
});

// Read only new messages
const newMessages = await client.xRead({
  key: 'orders',
  id: '$'  // Start from latest
});
```

### Consumer Groups (Like Delivery Teams)
```javascript
// Create a consumer group
await client.xGroupCreate('orders', 'order-processors', '0', {
  MKSTREAM: true  // Create stream if it doesn't exist
});

// Read as a consumer in the group
const messages = await client.xReadGroup({
  key: 'orders',
  group: 'order-processors',
  consumer: 'worker-1',
  id: '>',  // Only new messages
  COUNT: 10  // Process up to 10 messages at once
});

// Acknowledge processed messages
for (const message of messages) {
  await processOrder(message);
  await client.xAck('orders', 'order-processors', message.id);
}
```

### Error Handling (Like Handling Lost Mail)
```javascript
// Check for pending messages (unacknowledged)
const pending = await client.xPending('orders', 'order-processors');
console.log(`${pending.count} messages pending processing`);

// Claim abandoned messages (from failed workers)
const abandoned = await client.xAutoClaim(
  'orders',
  'order-processors', 
  'worker-2',
  60000,  // Messages idle for 60 seconds
  '0-0'
);
```

---

## 🔧 Common Problems & Solutions

### "Docker command not found"
**Problem:** Docker isn't installed or running  
**Solution:** 
1. Install Docker Desktop from [docker.com](https://www.docker.com/products/docker-desktop/)
2. Make sure Docker Desktop is running (whale icon in menu bar/system tray)
3. Test with: `docker --version`

### "Redis connection failed"
**Problem:** Redis server isn't running  
**Solution:** 
1. Start Redis: `docker run -d --name redis-streams -p 6379:6379 redis:7-alpine`
2. Check if running: `docker ps | grep redis`
3. Check logs: `docker logs redis-streams`

### "Port 6379 already in use"
**Problem:** Something else is using Redis port  
**Solution:** 
1. Stop existing Redis: `docker stop redis-streams && docker rm redis-streams`
2. Or use different port: `docker run -d --name redis-streams -p 6380:6379 redis:7-alpine`
3. Update connection URL in code to `redis://localhost:6380`

### "Stream doesn't exist"
**Problem:** Trying to read from non-existent stream  
**Solution:** 
1. Create stream by adding a message first
2. Use `MKSTREAM: true` when creating consumer groups
3. Check existing streams: `XINFO STREAM streamname`

### "Consumer group already exists"
**Problem:** Trying to create existing group  
**Solution:** 
1. Check existing groups: `XINFO GROUPS streamname`
2. Use try/catch to handle the error gracefully
3. Or delete and recreate: `XGROUP DESTROY streamname groupname`

### "Messages not being processed"
**Problem:** Consumers not reading messages  
**Solution:** 
1. Check consumer group exists
2. Verify consumer is reading with correct ID ('>' for new messages)
3. Make sure to acknowledge messages after processing
4. Check for pending messages that need retry

---

## 🏆 Success Criteria

**You'll know you're successful when:**

✅ **Messages flow reliably** (no lost messages)  
✅ **Multiple consumers work together** (load balancing)  
✅ **Failed messages are retried** (fault tolerance)  
✅ **Streams are monitored** (observability)  
✅ **Performance is optimized** (high throughput)  

---

## 🎯 Bonus Challenges

### After Basic Streams:
1. **Message Routing** - Route different message types to different streams
2. **Message Filtering** - Process only messages matching certain criteria
3. **Message Transformation** - Modify messages during processing
4. **Stream Replication** - Copy messages between streams

### After Consumer Groups:
1. **Dynamic Scaling** - Add/remove consumers based on load
2. **Priority Processing** - Process high-priority messages first
3. **Batch Processing** - Process multiple messages together
4. **Circuit Breaker** - Stop processing when downstream services fail

### After Advanced Patterns:
1. **Stream Analytics** - Calculate real-time metrics from message streams
2. **Event Sourcing** - Use streams as the source of truth for application state
3. **CQRS Implementation** - Separate read/write models using streams
4. **Distributed Tracing** - Track messages across multiple services

---

## 🛠️ Available Commands

```bash
# Run all exercises in sequence (recommended first time)
pnpm start

# Run individual exercises
pnpm exercise1  # Basic Streams
pnpm exercise2  # Consumer Groups  
pnpm exercise3  # Message Processing
pnpm exercise4  # Stream Management

# Run all tests
pnpm test

# Start Redis server
docker run -d --name redis-streams -p 6379:6379 redis:7-alpine

# Connect to Redis CLI (to explore Redis directly)
docker exec -it redis-streams redis-cli

# Stop Redis server (when you're done)
docker stop redis-streams && docker rm redis-streams

# Check Redis logs (if something goes wrong)
docker logs redis-streams

# Check if Redis is running
docker ps | grep redis
```

---

## 📂 Project Structure

```
08-redis-streams/
├── src/
│   ├── 01-basic-streams.ts        # Exercise 1: Basic stream operations
│   ├── 02-consumer-groups.ts      # Exercise 2: Consumer groups
│   ├── 03-message-processing.ts   # Exercise 3: Processing patterns
│   └── 04-stream-management.ts    # Exercise 4: Management & monitoring
├── .env                           # Redis connection details (optional)
├── package.json                   # Project dependencies
├── tsconfig.json                  # TypeScript configuration
└── README.md                      # This guide
```

---

## 🎯 Understanding Redis Connection

Redis connection is simple - just specify the URL:

```javascript
import { createClient } from 'redis';

// Connect to local Redis
const client = createClient({
  url: 'redis://localhost:6379'
});

await client.connect();

// Use the client for stream operations
await client.xAdd('mystream', '*', { message: 'hello' });

// Always disconnect when done
await client.disconnect();
```

**For production:** Use Redis Cloud, AWS ElastiCache, or other managed Redis services.

---

## 🆘 Need Help?

1. **Check Docker is running** - Look for whale icon in menu bar/system tray
2. **Check Redis is running** - `docker ps | grep redis`
3. **Read error messages carefully** - They usually tell you exactly what's wrong
4. **Use Redis CLI to debug** - `docker exec -it redis-streams redis-cli`
5. **Start simple** - Get basic message sending/receiving working first
6. **Check the [Redis Streams docs](https://redis.io/docs/data-types/streams/)** - Excellent documentation with examples
7. **Ask in class or office hours** - We're here to help!

---

## 📚 What You'll Learn

### Exercise 1: Stream Fundamentals
- **Message persistence** - How Redis stores messages durably
- **Message ordering** - How streams maintain order automatically
- **Stream reading** - Different ways to consume messages
- **Message IDs** - How Redis generates unique, ordered identifiers

### Exercise 2: Distributed Processing
- **Consumer groups** - How to coordinate multiple workers
- **Load balancing** - How Redis distributes messages automatically
- **Fault tolerance** - How to handle worker failures gracefully
- **Message acknowledgment** - How to ensure reliable processing

### Exercise 3: Production Patterns
- **Retry mechanisms** - How to handle transient failures
- **Dead letter queues** - How to handle poison messages
- **Backpressure** - How to handle processing bottlenecks
- **Message routing** - How to implement complex processing flows

### Exercise 4: Operations & Monitoring
- **Stream metrics** - How to monitor stream health and performance
- **Memory management** - How to prevent streams from growing too large
- **Performance tuning** - How to optimize for your specific use case
- **Scaling strategies** - How to handle increasing message volume

---

## 🌟 Real-World Applications

**What you're building is used in:**
- **Netflix** - Real-time recommendations and content delivery
- **Uber** - Driver location updates and ride matching
- **Slack** - Message delivery and real-time notifications
- **Instagram** - Feed updates and story processing
- **Banking** - Transaction processing and fraud detection
- **Gaming** - Real-time events and leaderboards
- **IoT** - Sensor data processing and device coordination

---

## 🐳 Understanding Docker (For Curious Students)

**What is Docker?** Docker is like having multiple virtual computers inside your real computer. Each "container" is isolated and can run different software without affecting your main system.

**Why use Docker for Redis?**
- **Easy setup** - No need to install Redis directly on your computer
- **Clean environment** - Redis runs in isolation
- **Easy cleanup** - Just delete the container when done
- **Same everywhere** - Works the same on Mac, Windows, and Linux

**Basic Docker commands you might find useful:**
```bash
# See all running containers
docker ps

# See all containers (running and stopped)
docker ps -a

# Stop a container
docker stop redis-streams

# Remove a container
docker rm redis-streams

# See container logs
docker logs redis-streams

# Run commands inside a container
docker exec -it redis-streams redis-cli
```

**Don't worry if Docker seems complex** - you only need the one command to start Redis for this exercise!

---

*Made with ❤️ for Duke students learning web development*

*📨 Remember: Reliable message processing is the backbone of modern distributed systems!*

# Redis Streams & Message Queues

> **Completion Time:** 1.5 hours  
> **Prerequisites:** Basic understanding of databases, JavaScript/TypeScript

Learn Redis Streams, a powerful data structure for building real-time applications, message queues, and event-driven systems. This exercise covers message streaming fundamentals and building scalable communication systems.

## 🎯 What You'll Learn

By the end of this exercise, you'll understand:
- What message queues and streams are
- How Redis Streams work for real-time data
- Building producer-consumer patterns
- Handling message acknowledgments and retries
- Creating consumer groups for scalability
- Implementing event-driven architectures
- Real-world applications of message streaming

## 📖 Background

**Message Queues** are like a postal service for your applications. Instead of components talking directly to each other, they send messages through a queue system.

**Redis Streams** are Redis's solution for handling streams of data in real-time. Think of it as a super-fast, persistent message log that multiple applications can read from.

**Key Benefits:**
- **Asynchronous Processing** - Don't wait for slow operations
- **Scalability** - Handle millions of messages per second
- **Reliability** - Messages are persisted and can be replayed
- **Real-time** - Process events as they happen
- **Decoupling** - Components don't need to know about each other

**Real-world analogy:** Redis Streams are like a high-speed conveyor belt in a factory. Workers (consumers) can pick up items (messages) from the belt to process them, and if a worker is busy, the items keep moving for other workers to handle.

## 🚀 Quick Start (15 Minutes)

### Step 1: Set Up Redis

```bash
# Create a new branch for this exercise
git checkout -b feature/redis-streams-YOUR_NAME

# Navigate to the Redis exercise directory
cd exercises/08-redis-streams

# Install dependencies
pnpm install

# Start Redis using Docker (easiest way)
docker run -d --name redis-streams -p 6379:6379 redis:latest

# Or install Redis locally (macOS)
brew install redis
brew services start redis

# Or install Redis locally (Ubuntu/WSL)
sudo apt update
sudo apt install redis-server
sudo systemctl start redis-server
```

### Step 2: Test Your Redis Connection

```bash
# Test Redis connection
redis-cli ping
# Should return: PONG

# Or test with our exercise
pnpm start
```

### Step 3: Your First Stream

Let's create a simple message stream:

```bash
# Open Redis CLI
redis-cli

# Add a message to a stream
XADD mystream * message "Hello Redis Streams!" timestamp 1640995200

# Read messages from the stream
XREAD STREAMS mystream 0

# See stream info
XINFO STREAM mystream
```

Congratulations! You've created your first Redis Stream! 🎉

## 🎬 YouTube Tutorials

Here are excellent tutorials to help you master Redis Streams and message queues:

### Redis Streams Fundamentals
- **[Redis Streams Tutorial](https://www.youtube.com/watch?v=oaJq1mQ3dFI)** by Redis (25 minutes) ⭐ **RECOMMENDED**
  - Official Redis tutorial on Streams
  - Covers core concepts and practical examples
  - Perfect introduction to Redis Streams
  - Shows real-world use cases

### Message Queue Concepts
- **[Message Queues Explained](https://www.youtube.com/watch?v=sfQwMu0SCT8)** by Fireship (8 minutes)
  - Quick overview of message queue concepts
  - Compares different message queue systems
  - Great for understanding the bigger picture

### Redis Fundamentals
- **[Redis Crash Course](https://www.youtube.com/watch?v=jgpVdJB2sKQ)** by Traversy Media (1 hour)
  - Comprehensive Redis introduction
  - Covers data structures and basic operations
  - Essential foundation for understanding Streams

### Advanced Redis Streams
- **[Building Event-Driven Systems with Redis Streams](https://www.youtube.com/watch?v=tMQlMOzKn-E)** by Redis (45 minutes)
  - Advanced patterns and architectures
  - Consumer groups and scaling strategies
  - Production-ready implementations

### Practical Applications
- **[Real-time Chat with Redis Streams](https://www.youtube.com/watch?v=miK7xDkDXF0)** by Redis University (30 minutes)
  - Hands-on project building a chat system
  - Shows practical Redis Streams usage
  - Great for understanding real-world applications

**💡 Tip:** Start with the recommended Redis Streams tutorial to understand the fundamentals, then explore message queue concepts for broader context.

## 📚 Core Redis Streams Concepts

### 1. Basic Stream Operations

```javascript
import Redis from 'ioredis';

const redis = new Redis({
  host: 'localhost',
  port: 6379,
});

// Add messages to a stream
async function addMessage(streamName: string, data: Record<string, any>) {
  const messageId = await redis.xadd(
    streamName,
    '*', // Auto-generate ID
    'data', JSON.stringify(data),
    'timestamp', Date.now()
  );
  
  console.log(`Added message ${messageId} to ${streamName}`);
  return messageId;
}

// Read messages from a stream
async function readMessages(streamName: string, fromId: string = '0') {
  const messages = await redis.xread(
    'STREAMS',
    streamName,
    fromId
  );
  
  return messages;
}

// Example usage
await addMessage('user-events', { 
  userId: '123', 
  action: 'login', 
  ip: '192.168.1.1' 
});

const messages = await readMessages('user-events');
console.log('Messages:', messages);
```

### 2. Consumer Groups (Team Processing)

```javascript
// Create a consumer group
async function createConsumerGroup(streamName: string, groupName: string) {
  try {
    await redis.xgroup('CREATE', streamName, groupName, '0', 'MKSTREAM');
    console.log(`Created consumer group: ${groupName}`);
  } catch (error) {
    if (error.message.includes('BUSYGROUP')) {
      console.log(`Consumer group ${groupName} already exists`);
    } else {
      throw error;
    }
  }
}

// Read messages as part of a consumer group
async function readAsConsumer(
  streamName: string, 
  groupName: string, 
  consumerName: string
) {
  const messages = await redis.xreadgroup(
    'GROUP', groupName, consumerName,
    'COUNT', 10,
    'BLOCK', 1000, // Wait 1 second for new messages
    'STREAMS', streamName, '>'
  );
  
  return messages;
}

// Acknowledge message processing
async function acknowledgeMessage(
  streamName: string, 
  groupName: string, 
  messageId: string
) {
  await redis.xack(streamName, groupName, messageId);
  console.log(`Acknowledged message: ${messageId}`);
}

// Example: Processing messages in a team
await createConsumerGroup('orders', 'order-processors');

const messages = await readAsConsumer('orders', 'order-processors', 'worker-1');
for (const [stream, streamMessages] of messages) {
  for (const [messageId, fields] of streamMessages) {
    // Process the message
    console.log(`Processing message ${messageId}:`, fields);
    
    // Acknowledge when done
    await acknowledgeMessage('orders', 'order-processors', messageId);
  }
}
```

### 3. Event-Driven Architecture

```javascript
// Event producer
class EventProducer {
  constructor(private redis: Redis) {}
  
  async publishEvent(eventType: string, data: any) {
    const event = {
      type: eventType,
      data: JSON.stringify(data),
      timestamp: Date.now(),
      id: crypto.randomUUID()
    };
    
    const messageId = await this.redis.xadd(
      'events',
      '*',
      ...Object.entries(event).flat()
    );
    
    console.log(`Published ${eventType} event: ${messageId}`);
    return messageId;
  }
}

// Event consumer
class EventConsumer {
  constructor(
    private redis: Redis,
    private consumerName: string,
    private handlers: Map<string, (data: any) => Promise<void>>
  ) {}
  
  async start() {
    // Create consumer group if it doesn't exist
    try {
      await this.redis.xgroup('CREATE', 'events', 'event-processors', '0', 'MKSTREAM');
    } catch (error) {
      // Group already exists
    }
    
    console.log(`Starting consumer: ${this.consumerName}`);
    
    while (true) {
      try {
        const messages = await this.redis.xreadgroup(
          'GROUP', 'event-processors', this.consumerName,
          'COUNT', 10,
          'BLOCK', 1000,
          'STREAMS', 'events', '>'
        );
        
        for (const [stream, streamMessages] of messages) {
          for (const [messageId, fields] of streamMessages) {
            await this.processMessage(messageId, fields);
          }
        }
      } catch (error) {
        console.error('Error reading messages:', error);
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
    }
  }
  
  private async processMessage(messageId: string, fields: string[]) {
    try {
      // Convert fields array to object
      const event: any = {};
      for (let i = 0; i < fields.length; i += 2) {
        event[fields[i]] = fields[i + 1];
      }
      
      const handler = this.handlers.get(event.type);
      if (handler) {
        const data = JSON.parse(event.data);
        await handler(data);
        
        // Acknowledge successful processing
        await this.redis.xack('events', 'event-processors', messageId);
        console.log(`Processed ${event.type} event: ${messageId}`);
      } else {
        console.log(`No handler for event type: ${event.type}`);
        // Still acknowledge to avoid reprocessing
        await this.redis.xack('events', 'event-processors', messageId);
      }
    } catch (error) {
      console.error(`Error processing message ${messageId}:`, error);
      // Don't acknowledge - message will be retried
    }
  }
}

// Usage example
const producer = new EventProducer(redis);
const consumer = new EventConsumer(redis, 'worker-1', new Map([
  ['user.registered', async (data) => {
    console.log('Sending welcome email to:', data.email);
    // Send welcome email logic here
  }],
  ['order.created', async (data) => {
    console.log('Processing new order:', data.orderId);
    // Order processing logic here
  }]
]));

// Start consuming events
consumer.start();

// Publish some events
await producer.publishEvent('user.registered', { 
  userId: '123', 
  email: 'user@example.com' 
});

await producer.publishEvent('order.created', { 
  orderId: 'order-456', 
  amount: 99.99 
});
```

### 4. Stream Monitoring and Management

```javascript
// Get stream information
async function getStreamInfo(streamName: string) {
  const info = await redis.xinfo('STREAM', streamName);
  
  return {
    length: info[1], // Number of messages
    firstEntry: info[11],
    lastEntry: info[13],
    groups: info[15] // Number of consumer groups
  };
}

// Get consumer group information
async function getGroupInfo(streamName: string, groupName: string) {
  const groups = await redis.xinfo('GROUPS', streamName);
  return groups.find(group => group[1] === groupName);
}

// Get pending messages (unacknowledged)
async function getPendingMessages(streamName: string, groupName: string) {
  const pending = await redis.xpending(streamName, groupName);
  return {
    count: pending[0],
    firstId: pending[1],
    lastId: pending[2],
    consumers: pending[3]
  };
}

// Trim stream to manage memory
async function trimStream(streamName: string, maxLength: number) {
  await redis.xtrim(streamName, 'MAXLEN', '~', maxLength);
  console.log(`Trimmed ${streamName} to ~${maxLength} messages`);
}

// Example monitoring
const info = await getStreamInfo('events');
console.log(`Stream has ${info.length} messages`);

if (info.length > 10000) {
  await trimStream('events', 5000);
}
```

## 🛠️ Hands-On Project: Real-time Notification System

Build a complete notification system using Redis Streams:

### Project Features

1. **Event Publishing** - Publish user events (login, purchase, etc.)
2. **Email Notifications** - Send emails for important events
3. **Push Notifications** - Send mobile push notifications
4. **SMS Alerts** - Send SMS for critical events
5. **Analytics** - Track event metrics
6. **Dead Letter Queue** - Handle failed messages

### Implementation

```typescript
interface NotificationEvent {
  userId: string;
  type: 'email' | 'push' | 'sms';
  priority: 'low' | 'medium' | 'high' | 'critical';
  template: string;
  data: Record<string, any>;
}

class NotificationSystem {
  constructor(private redis: Redis) {}
  
  async publishNotification(event: NotificationEvent) {
    const streamName = `notifications:${event.priority}`;
    
    const messageId = await this.redis.xadd(
      streamName,
      '*',
      'userId', event.userId,
      'type', event.type,
      'template', event.template,
      'data', JSON.stringify(event.data),
      'timestamp', Date.now()
    );
    
    console.log(`Published ${event.type} notification: ${messageId}`);
    return messageId;
  }
  
  async startEmailWorker() {
    const consumer = new EventConsumer(this.redis, 'email-worker', new Map([
      ['email', async (data) => {
        // Simulate email sending
        console.log(`Sending email to user ${data.userId}`);
        await this.simulateEmailSend(data);
      }]
    ]));
    
    await consumer.start();
  }
  
  async startPushWorker() {
    const consumer = new EventConsumer(this.redis, 'push-worker', new Map([
      ['push', async (data) => {
        // Simulate push notification
        console.log(`Sending push notification to user ${data.userId}`);
        await this.simulatePushSend(data);
      }]
    ]));
    
    await consumer.start();
  }
  
  private async simulateEmailSend(data: any) {
    // Simulate email API call
    await new Promise(resolve => setTimeout(resolve, 100));
    
    if (Math.random() < 0.1) {
      throw new Error('Email service temporarily unavailable');
    }
    
    console.log(`✅ Email sent successfully to user ${data.userId}`);
  }
  
  private async simulatePushSend(data: any) {
    // Simulate push notification API call
    await new Promise(resolve => setTimeout(resolve, 50));
    
    if (Math.random() < 0.05) {
      throw new Error('Push service temporarily unavailable');
    }
    
    console.log(`✅ Push notification sent successfully to user ${data.userId}`);
  }
}

// Usage
const notificationSystem = new NotificationSystem(redis);

// Start workers
notificationSystem.startEmailWorker();
notificationSystem.startPushWorker();

// Publish notifications
await notificationSystem.publishNotification({
  userId: '123',
  type: 'email',
  priority: 'medium',
  template: 'welcome',
  data: { name: 'John Doe', email: 'john@example.com' }
});

await notificationSystem.publishNotification({
  userId: '123',
  type: 'push',
  priority: 'high',
  template: 'order_shipped',
  data: { orderId: 'order-456', trackingNumber: 'TRACK123' }
});
```

## ✅ Success Criteria

- [ ] Understand what message queues and streams are
- [ ] Successfully set up Redis and connected to it
- [ ] Created and read from Redis Streams
- [ ] Implemented consumer groups for scalable processing
- [ ] Built an event-driven system with producers and consumers
- [ ] Handled message acknowledgments and error scenarios
- [ ] Implemented stream monitoring and management
- [ ] Completed the notification system project

## 🚀 Bonus Challenges

1. **Dead Letter Queue:** Implement failed message handling
2. **Message Deduplication:** Prevent duplicate message processing
3. **Stream Partitioning:** Scale across multiple Redis instances
4. **Metrics Dashboard:** Build a real-time monitoring dashboard
5. **Message Encryption:** Add security for sensitive data

## 🎉 What's Next?

You've now mastered the fundamentals of message queues and event-driven architecture! These skills are essential for building scalable, real-time applications. You're ready to tackle complex distributed systems!

## 💡 Pro Tips

- **Use consumer groups** for scalable message processing
- **Always acknowledge messages** after successful processing
- **Monitor stream length** to prevent memory issues
- **Implement retry logic** for failed messages
- **Use appropriate stream trimming** strategies
- **Design idempotent consumers** to handle duplicate messages safely 
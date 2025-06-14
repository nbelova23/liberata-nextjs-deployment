// Exercise 3: Message Processing Patterns 📝
// Think of this like advanced mail handling:
// - Retry mechanisms are like redelivery attempts (handling failures)
// - Dead letter queues are like undeliverable mail (poison messages)
// - Batch processing is like bulk mail handling (efficiency)
// - Message routing is like mail sorting (smart distribution)

import { createClient } from 'redis';

// Define types for better TypeScript support
interface ProcessingResult {
  success: boolean;
  messageId: string;
  error?: string;
  retryCount?: number;
}

interface BatchResult {
  processed: number;
  failed: number;
  results: ProcessingResult[];
}

// Use a simpler type for Redis client to avoid complex generic conflicts
type RedisClient = ReturnType<typeof createClient>;

// TODO: Implement these message processing patterns:

// 1. Process messages with retry logic (like redelivery attempts)
//    - client: Redis client
//    - streamKey: stream name (like mail route)
//    - groupName: consumer group name (like delivery team)
//    - consumerName: consumer name (like mail carrier)
//    - processor: function to process each message
//    - maxRetries: maximum retry attempts
//    - Returns: processing results
export async function processWithRetry(
  client: RedisClient,
  streamKey: string,
  groupName: string,
  consumerName: string,
  processor: (message: any) => Promise<boolean>,
  maxRetries: number = 3
): Promise<ProcessingResult[]> {
  // Your implementation here
  // Hints:
  // 1. Read messages with xReadGroup
  // 2. For each message, try to process with the processor function
  // 3. If processing fails, track retry count in message metadata
  // 4. If max retries exceeded, move to dead letter queue
  // 5. Acknowledge successful messages
  // 6. Return array of processing results
  
  throw new Error('TODO: Implement processWithRetry function');
}

// 2. Create and manage dead letter queue (like undeliverable mail)
//    - client: Redis client
//    - originalStream: original stream name
//    - deadLetterStream: dead letter queue stream name
//    - message: failed message to move
//    - reason: reason for failure
//    - Returns: success status
export async function moveToDeadLetterQueue(
  client: RedisClient,
  originalStream: string,
  deadLetterStream: string,
  message: any,
  reason: string
): Promise<boolean> {
  // Your implementation here
  // Hints:
  // 1. Add message to dead letter stream with additional metadata
  // 2. Include: original stream, failure reason, timestamp, retry count
  // 3. Acknowledge the message in original stream
  // 4. Log the dead letter event
  // 5. Return success/failure status
  
  throw new Error('TODO: Implement moveToDeadLetterQueue function');
}

// 3. Batch process messages (like bulk mail handling)
//    - client: Redis client
//    - streamKey: stream name
//    - groupName: consumer group name
//    - consumerName: consumer name
//    - batchSize: how many messages to process together
//    - processor: function to process batch of messages
//    - Returns: batch processing results
export async function batchProcess(
  client: RedisClient,
  streamKey: string,
  groupName: string,
  consumerName: string,
  batchSize: number,
  processor: (messages: any[]) => Promise<boolean[]>
): Promise<BatchResult> {
  // Your implementation here
  // Hints:
  // 1. Read multiple messages at once (COUNT parameter)
  // 2. Process entire batch with processor function
  // 3. Handle partial batch failures (some succeed, some fail)
  // 4. Acknowledge only successful messages
  // 5. Return summary of batch processing
  
  throw new Error('TODO: Implement batchProcess function');
}

// 4. Route messages based on content (like mail sorting)
//    - client: Redis client
//    - sourceStream: source stream to read from
//    - routingRules: rules for routing messages
//    - Returns: routing results
export async function routeMessages(
  client: RedisClient,
  sourceStream: string,
  routingRules: { condition: (message: any) => boolean; targetStream: string }[]
): Promise<any> {
  // Your implementation here
  // Hints:
  // 1. Read messages from source stream
  // 2. For each message, check routing rules
  // 3. Add message to appropriate target stream
  // 4. Track routing statistics
  // 5. Handle messages that don't match any rule (default route)
  
  throw new Error('TODO: Implement routeMessages function');
}

// 5. Implement circuit breaker pattern (like stopping delivery during outages)
//    - processor: function to process messages
//    - failureThreshold: how many failures before opening circuit
//    - timeout: how long to wait before trying again
//    - Returns: circuit breaker wrapped processor
export function createCircuitBreaker(
  processor: (message: any) => Promise<boolean>,
  failureThreshold: number = 5,
  timeout: number = 30000
): (message: any) => Promise<boolean> {
  // Your implementation here
  // Hints:
  // 1. Track failure count and circuit state (closed/open/half-open)
  // 2. When failures exceed threshold, open circuit (reject all)
  // 3. After timeout, try half-open (allow one test)
  // 4. If test succeeds, close circuit; if fails, open again
  // 5. Return wrapped processor function
  
  throw new Error('TODO: Implement createCircuitBreaker function');
}

// 6. Implement message deduplication (like preventing duplicate mail)
//    - client: Redis client
//    - streamKey: stream name
//    - message: message to check/add
//    - dedupeKey: key to use for deduplication
//    - ttl: how long to remember duplicates
//    - Returns: true if message was added, false if duplicate
export async function deduplicateMessage(
  client: RedisClient,
  streamKey: string,
  message: any,
  dedupeKey: string,
  ttl: number = 3600 // 1 hour
): Promise<boolean> {
  // Your implementation here
  // Hints:
  // 1. Use Redis SET with NX (only if not exists) and EX (expiration)
  // 2. If SET succeeds, add message to stream
  // 3. If SET fails, message is duplicate
  // 4. Use hash of message content or specific field as dedupe key
  // 5. Return whether message was actually added
  
  throw new Error('TODO: Implement deduplicateMessage function');
}

// 7. Monitor processing metrics (like mail delivery statistics)
//    - client: Redis client
//    - streamKey: stream name
//    - groupName: consumer group name
//    - Returns: processing metrics
export async function getProcessingMetrics(
  client: RedisClient,
  streamKey: string,
  groupName: string
): Promise<any> {
  // Your implementation here
  // Hints:
  // 1. Get stream length and group info
  // 2. Calculate processing rate (messages/time)
  // 3. Get pending count and consumer status
  // 4. Calculate lag (how far behind consumers are)
  // 5. Return comprehensive metrics object
  
  throw new Error('TODO: Implement getProcessingMetrics function');
}

// Example usage - Advanced message processing demonstration
export async function example() {
  console.log('📝 Message Processing Patterns Exercise - Production Ready!\n');

  const client = createClient({
    url: process.env.REDIS_URL || 'redis://localhost:6379'
  });

  try {
    await client.connect();
    console.log('✅ Connected to Redis');

    const streamKey = 'payment-processing';
    const deadLetterStream = 'payment-failed';
    const groupName = 'payment-processors';
    const consumerName = 'processor-1';

    // Add some test messages
    console.log('\n--- Setting up test data ---');
    const testMessages = [
      { paymentId: 'pay-1', amount: '100.00', userId: 'user1' },
      { paymentId: 'pay-2', amount: 'invalid', userId: 'user2' }, // Will fail
      { paymentId: 'pay-3', amount: '50.00', userId: 'user3' },
      { paymentId: 'pay-4', amount: '200.00', userId: 'user4' },
      { paymentId: 'pay-5', amount: '', userId: 'user5' }, // Will fail
    ];

    for (const msg of testMessages) {
      await client.xAdd(streamKey, '*', msg);
    }
    console.log('✅ Added 5 test payment messages');

    // Create consumer group
    try {
      await client.xGroupCreate(streamKey, groupName, '0', { MKSTREAM: true });
    } catch (error) {
      // Group might already exist
    }

    console.log('\n--- Step 1: Testing Your processWithRetry Function ---');
    try {
      const processor = async (message: any) => {
        // Simulate payment processing
        const amount = parseFloat(message.message.amount);
        if (isNaN(amount) || amount <= 0) {
          throw new Error('Invalid amount');
        }
        return true; // Success
      };

      const results = await processWithRetry(client, streamKey, groupName, consumerName, processor, 2);
      console.log(`✅ Processed ${results.length} messages with retry logic`);
    } catch (error) {
      console.log('❌ processWithRetry not implemented yet');
    }

    console.log('\n--- Step 2: Testing Your batchProcess Function ---');
    try {
      const batchProcessor = async (messages: any[]) => {
        return messages.map(msg => {
          const amount = parseFloat(msg.message.amount);
          return !isNaN(amount) && amount > 0;
        });
      };

      const batchResult = await batchProcess(client, streamKey, groupName, consumerName, 3, batchProcessor);
      console.log(`✅ Batch processed: ${batchResult.processed} success, ${batchResult.failed} failed`);
    } catch (error) {
      console.log('❌ batchProcess not implemented yet');
    }

    console.log('\n--- Step 3: Testing Your deduplicateMessage Function ---');
    try {
      const duplicateMsg = { paymentId: 'pay-1', amount: '100.00', userId: 'user1' };
      const added = await deduplicateMessage(client, streamKey, duplicateMsg, 'pay-1', 3600);
      console.log(`✅ Duplicate message handling: ${added ? 'added' : 'rejected'}`);
    } catch (error) {
      console.log('❌ deduplicateMessage not implemented yet');
    }

    console.log('\n--- Step 4: Testing Your routeMessages Function ---');
    try {
      const routingRules = [
        {
          condition: (msg: any) => parseFloat(msg.message.amount) > 100,
          targetStream: 'high-value-payments'
        },
        {
          condition: (msg: any) => parseFloat(msg.message.amount) <= 100,
          targetStream: 'regular-payments'
        }
      ];

      const routingResult = await routeMessages(client, streamKey, routingRules);
      console.log(`✅ Message routing completed:`, routingResult);
    } catch (error) {
      console.log('❌ routeMessages not implemented yet');
    }

    console.log('\n--- Step 5: Testing Your getProcessingMetrics Function ---');
    try {
      const metrics = await getProcessingMetrics(client, streamKey, groupName);
      console.log(`✅ Processing metrics:`, metrics);
    } catch (error) {
      console.log('❌ getProcessingMetrics not implemented yet');
    }

    console.log('\n--- Step 6: Testing Your createCircuitBreaker Function ---');
    try {
      const flakyProcessor = async (message: any) => {
        // Simulate flaky service (fails 50% of the time)
        return Math.random() > 0.5;
      };

      const protectedProcessor = createCircuitBreaker(flakyProcessor, 3, 5000);
      console.log(`✅ Circuit breaker created and ready for testing`);
    } catch (error) {
      console.log('❌ createCircuitBreaker not implemented yet');
    }

    console.log('\n🏆 Message processing patterns exercise complete!');
    console.log('💡 Try implementing the functions to see production patterns in action!');
    console.log('🎯 Next: Check out stream management and monitoring!');

  } catch (error) {
    console.error('💡 Tip: Make sure Redis is running and implement the functions above!');
    console.error('Error details:', error);
    console.log('\n🛠️ How to fix this:');
    console.log('1. Start Redis: docker run -d --name redis-streams -p 6379:6379 redis:7-alpine');
    console.log('2. Look at the function that caused the error');
    console.log('3. Read the hints in the comments');
    console.log('4. Implement the function step by step');
    console.log('5. Test again!');
  } finally {
    await client.disconnect();
    console.log('\n✅ Disconnected from Redis');
  }
}

// 💡 IMPLEMENTATION TIPS:
// 1. Always handle failures gracefully - real systems have failures
// 2. Use exponential backoff for retries (wait longer each time)
// 3. Monitor dead letter queues - they indicate systemic issues
// 4. Batch processing improves throughput but complicates error handling
// 5. Circuit breakers prevent cascade failures
// 6. Deduplication prevents duplicate processing costs

// 🎯 BONUS CHALLENGES (Once basic functions work):
// 1. Implement priority queues using multiple streams
// 2. Add message compression for large payloads
// 3. Create message transformation pipelines
// 4. Implement message scheduling (delayed processing)
// 5. Add distributed rate limiting
// 6. Create message replay functionality
// 7. Implement stream-to-stream replication
// 8. Add message encryption/decryption

// 🔍 UNDERSTANDING PROCESSING PATTERNS:
// - Retry logic handles transient failures
// - Dead letter queues isolate poison messages
// - Batch processing improves efficiency
// - Circuit breakers prevent cascade failures
// - Deduplication ensures exactly-once processing
// - Monitoring helps identify bottlenecks

// 🚀 TESTING PROCESSING PATTERNS:
// 1. Simulate various failure scenarios
// 2. Test with different batch sizes
// 3. Monitor processing rates and latency
// 4. Test circuit breaker under load
// 5. Verify deduplication works correctly

// Run the example if this file is executed directly
if (require.main === module) {
  example().catch(console.error);
} 
// Exercise 4: Stream Management & Monitoring 📊
// Think of this like post office operations management:
// - Stream monitoring is like tracking mail volume (observability)
// - Performance optimization is like route planning (efficiency)
// - Memory management is like warehouse organization (resource management)
// - Scaling is like adding more post offices (horizontal scaling)

import { createClient } from 'redis';

// Define types for better TypeScript support
interface StreamMetrics {
  streamName: string;
  length: number;
  firstEntry: string;
  lastEntry: string;
  groups: number;
  consumers: number;
  pendingMessages: number;
  memoryUsage: number;
}

interface PerformanceMetrics {
  messagesPerSecond: number;
  averageProcessingTime: number;
  errorRate: number;
  throughput: number;
}

// Use a simpler type for Redis client to avoid complex generic conflicts
type RedisClient = ReturnType<typeof createClient>;

// TODO: Implement these stream management operations:

// 1. Get comprehensive stream metrics (like post office statistics)
//    - client: Redis client
//    - streamKey: stream name (like mail route)
//    - Returns: detailed metrics about the stream
export async function getStreamMetrics(
  client: RedisClient,
  streamKey: string
): Promise<StreamMetrics> {
  // Your implementation here
  // Hints:
  // 1. Use: const info = await client.xInfoStream(streamKey);
  // 2. Get groups: const groups = await client.xInfoGroups(streamKey);
  // 3. Count total consumers across all groups
  // 4. Get pending messages for all groups
  // 5. Estimate memory usage (length * average message size)
  // 6. Return comprehensive metrics object
  
  throw new Error('TODO: Implement getStreamMetrics function');
}

// 2. Monitor stream performance over time (like tracking delivery speed)
//    - client: Redis client
//    - streamKey: stream name
//    - intervalMs: how often to check (in milliseconds)
//    - duration: how long to monitor (in milliseconds)
//    - Returns: performance metrics
export async function monitorStreamPerformance(
  client: RedisClient,
  streamKey: string,
  intervalMs: number = 1000,
  duration: number = 10000
): Promise<PerformanceMetrics> {
  // Your implementation here
  // Hints:
  // 1. Take initial measurements (stream length, timestamp)
  // 2. Wait for specified interval
  // 3. Take measurements again
  // 4. Calculate rate: (newLength - oldLength) / timeElapsed
  // 5. Repeat for duration and average the results
  // 6. Track error rates if processing messages
  
  throw new Error('TODO: Implement monitorStreamPerformance function');
}

// 3. Trim streams to manage memory (like clearing old mail)
//    - client: Redis client
//    - streamKey: stream name
//    - strategy: how to trim (maxlen, minid, etc.)
//    - limit: maximum size or minimum ID
//    - Returns: number of messages removed
export async function trimStream(
  client: RedisClient,
  streamKey: string,
  strategy: 'MAXLEN' | 'MINID',
  limit: number | string
): Promise<number> {
  // Your implementation here
  // Hints:
  // 1. Get current length: const info = await client.xInfoStream(streamKey);
  // 2. Use: const removed = await client.xTrim(streamKey, strategy, limit);
  // 3. MAXLEN keeps only the most recent N messages
  // 4. MINID removes messages older than specified ID
  // 5. Return number of messages removed
  // 6. Log the trimming operation
  
  throw new Error('TODO: Implement trimStream function');
}

// 4. Auto-scale consumers based on load (like adding more mail carriers)
//    - client: Redis client
//    - streamKey: stream name
//    - groupName: consumer group name
//    - targetConsumers: desired number of consumers
//    - Returns: scaling actions taken
export async function autoScaleConsumers(
  client: RedisClient,
  streamKey: string,
  groupName: string,
  targetConsumers: number
): Promise<string[]> {
  // Your implementation here
  // Hints:
  // 1. Get current consumers: const consumers = await client.xInfoConsumers(streamKey, groupName);
  // 2. Calculate difference: targetConsumers - currentConsumers.length
  // 3. If need more: simulate adding consumers (create consumer names)
  // 4. If need fewer: identify idle consumers to remove
  // 5. Return array of actions taken
  // 6. In real system, this would start/stop actual worker processes
  
  throw new Error('TODO: Implement autoScaleConsumers function');
}

// 5. Detect and handle stream bottlenecks (like finding mail jams)
//    - client: Redis client
//    - streamKey: stream name
//    - groupName: consumer group name
//    - Returns: bottleneck analysis and recommendations
export async function detectBottlenecks(
  client: RedisClient,
  streamKey: string,
  groupName: string
): Promise<any> {
  // Your implementation here
  // Hints:
  // 1. Check pending message count vs stream length
  // 2. Identify consumers with high pending counts
  // 3. Check for idle consumers (not processing)
  // 4. Calculate processing rate vs incoming rate
  // 5. Return analysis with recommendations
  // 6. Suggest scaling, optimization, or debugging actions
  
  throw new Error('TODO: Implement detectBottlenecks function');
}

// 6. Create stream health dashboard (like post office status board)
//    - client: Redis client
//    - streamKeys: array of stream names to monitor
//    - Returns: dashboard data for all streams
export async function createHealthDashboard(
  client: RedisClient,
  streamKeys: string[]
): Promise<any> {
  // Your implementation here
  // Hints:
  // 1. Get metrics for each stream in parallel
  // 2. Use Promise.all for concurrent monitoring
  // 3. Calculate overall system health
  // 4. Identify streams needing attention
  // 5. Return dashboard-ready data structure
  // 6. Include alerts for critical issues
  
  throw new Error('TODO: Implement createHealthDashboard function');
}

// 7. Implement stream backup and restore (like mail archive system)
//    - client: Redis client
//    - sourceStream: stream to backup
//    - backupStream: where to store backup
//    - startId: where to start backup (optional)
//    - Returns: backup summary
export async function backupStream(
  client: RedisClient,
  sourceStream: string,
  backupStream: string,
  startId: string = '0-0'
): Promise<any> {
  // Your implementation here
  // Hints:
  // 1. Read messages from source stream in batches
  // 2. Copy messages to backup stream with metadata
  // 3. Include backup timestamp and source info
  // 4. Handle large streams with pagination
  // 5. Return summary: messages copied, time taken, etc.
  // 6. Consider compression for large backups
  
  throw new Error('TODO: Implement backupStream function');
}

// Example usage - Stream management demonstration
export async function example() {
  console.log('📊 Stream Management & Monitoring Exercise - Operations Ready!\n');

  const client = createClient({
    url: process.env.REDIS_URL || 'redis://localhost:6379'
  });

  try {
    await client.connect();
    console.log('✅ Connected to Redis');

    const streamKey = 'production-events';
    const groupName = 'event-processors';
    const backupStreamName = 'events-backup';

    // Add some test data
    console.log('\n--- Setting up test data ---');
    for (let i = 1; i <= 100; i++) {
      await client.xAdd(streamKey, '*', {
        eventType: i % 3 === 0 ? 'error' : 'info',
        message: `Event ${i}`,
        timestamp: Date.now().toString(),
        severity: i % 10 === 0 ? 'high' : 'low'
      });
    }
    console.log('✅ Added 100 test events');

    // Create consumer group
    try {
      await client.xGroupCreate(streamKey, groupName, '0', { MKSTREAM: true });
    } catch (error) {
      // Group might already exist
    }

    console.log('\n--- Step 1: Testing Your getStreamMetrics Function ---');
    try {
      const metrics = await getStreamMetrics(client, streamKey);
      console.log(`✅ Stream metrics:`, metrics);
    } catch (error) {
      console.log('❌ getStreamMetrics not implemented yet');
    }

    console.log('\n--- Step 2: Testing Your monitorStreamPerformance Function ---');
    try {
      console.log('⏱️ Monitoring performance for 5 seconds...');
      const performance = await monitorStreamPerformance(client, streamKey, 1000, 5000);
      console.log(`✅ Performance metrics:`, performance);
    } catch (error) {
      console.log('❌ monitorStreamPerformance not implemented yet');
    }

    console.log('\n--- Step 3: Testing Your detectBottlenecks Function ---');
    try {
      const bottlenecks = await detectBottlenecks(client, streamKey, groupName);
      console.log(`✅ Bottleneck analysis:`, bottlenecks);
    } catch (error) {
      console.log('❌ detectBottlenecks not implemented yet');
    }

    console.log('\n--- Step 4: Testing Your autoScaleConsumers Function ---');
    try {
      const scalingActions = await autoScaleConsumers(client, streamKey, groupName, 5);
      console.log(`✅ Scaling actions:`, scalingActions);
    } catch (error) {
      console.log('❌ autoScaleConsumers not implemented yet');
    }

    console.log('\n--- Step 5: Testing Your createHealthDashboard Function ---');
    try {
      const dashboard = await createHealthDashboard(client, [streamKey, 'user-actions', 'orders']);
      console.log(`✅ Health dashboard:`, dashboard);
    } catch (error) {
      console.log('❌ createHealthDashboard not implemented yet');
    }

    console.log('\n--- Step 6: Testing Your trimStream Function ---');
    try {
      const removed = await trimStream(client, streamKey, 'MAXLEN', 50);
      console.log(`✅ Trimmed ${removed} messages from stream`);
    } catch (error) {
      console.log('❌ trimStream not implemented yet');
    }

    console.log('\n--- Step 7: Testing Your backupStream Function ---');
    try {
      const backupResult = await backupStream(client, streamKey, backupStreamName);
      console.log(`✅ Backup completed:`, backupResult);
    } catch (error) {
      console.log('❌ backupStream not implemented yet');
    }

    console.log('\n🏆 Stream management exercise complete!');
    console.log('💡 Try implementing the functions to see production operations in action!');
    console.log('🎯 You now have a complete Redis Streams toolkit!');

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
// 1. Stream management is crucial for production systems
// 2. Monitor memory usage - streams can grow very large
// 3. Implement alerting for critical metrics
// 4. Use trimming to prevent memory issues
// 5. Auto-scaling helps handle variable load
// 6. Regular backups prevent data loss
// 7. Performance monitoring identifies optimization opportunities

// 🎯 BONUS CHALLENGES (Once basic functions work):
// 1. Implement real-time alerting for critical metrics
// 2. Create a web dashboard for stream monitoring
// 3. Add predictive scaling based on historical patterns
// 4. Implement stream replication across Redis instances
// 5. Add cost optimization recommendations
// 6. Create automated stream lifecycle management
// 7. Implement stream analytics and reporting
// 8. Add integration with monitoring systems (Prometheus, etc.)

// 🔍 UNDERSTANDING STREAM MANAGEMENT:
// - Monitoring prevents issues before they become critical
// - Trimming balances data retention with memory usage
// - Auto-scaling ensures consistent performance
// - Bottleneck detection helps optimize throughput
// - Backups provide disaster recovery capability
// - Health dashboards give operational visibility

// 🚀 TESTING STREAM MANAGEMENT:
// 1. Create streams with different load patterns
// 2. Monitor performance under various conditions
// 3. Test scaling scenarios (up and down)
// 4. Simulate failures and recovery
// 5. Verify backup and restore procedures

// Run the example if this file is executed directly
if (require.main === module) {
  example().catch((error) => console.error(error));
} 
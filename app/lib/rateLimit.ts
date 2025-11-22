interface RateLimitStore {
  [key: string]: {
    count: number;
    resetTime: number;
  };
}

// In-memory store (resets when serverless function restarts)
const store: RateLimitStore = {};

// Configuration - Change MAX_REQUESTS to 1 for testing
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour in milliseconds
const MAX_REQUESTS = 5; // 5 messages per hour per IP
export function checkRateLimit(ip: string): {
  allowed: boolean; 
  remaining: number;
  resetTime?: number;
} {
  const now = Date.now();
  const key = ip;
  
  // Check if IP exists in store
  if (!store[key]) {
    // First request from this IP - create new entry
    store[key] = {
      count: 1,
      resetTime: now + RATE_LIMIT_WINDOW,
    };
    return { 
      allowed: true, 
      remaining: MAX_REQUESTS - 1,
      resetTime: store[key].resetTime
    };
  }
  
  // Check if time window has expired
  if (now > store[key].resetTime) {
    // Reset counter - new time window
    store[key] = {
      count: 1,
      resetTime: now + RATE_LIMIT_WINDOW,
    };
    return { 
      allowed: true, 
      remaining: MAX_REQUESTS - 1,
      resetTime: store[key].resetTime
    };
  }
  
  // Check if limit exceeded
  if (store[key].count >= MAX_REQUESTS) {
    return { 
      allowed: false, 
      remaining: 0,
      resetTime: store[key].resetTime
    };
  }
  
  // Increment counter
  store[key].count++;
  return { 
    allowed: true, 
    remaining: MAX_REQUESTS - store[key].count,
    resetTime: store[key].resetTime
  };
}

// Optional: Cleanup old entries (prevent memory leak)
export function cleanupOldEntries() {
  const now = Date.now();
  Object.keys(store).forEach(key => {
    if (now > store[key].resetTime) {
      delete store[key];
    }
  });
}


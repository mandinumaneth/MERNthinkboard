import { Ratelimit } from "@upstash/ratelimit";

const rateLimiter = async (req, res, next) => {
  try{
    const {success} = await Ratelimit.limit("my-rate-limit");
    if (!success) {
      return res.status(429).json({ message: "Too many requests, please try again later." });
    }
    next();
  } catch (error) {
    console.error("Rate limiter error:", error);
    next(error); // Pass the error to the next middleware
  }
}

export default rateLimiter;

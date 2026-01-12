import { type Request, type Response, type NextFunction } from "express";

function basicAuth() {
  const USER = process.env.BASIC_AUTH_USER;
  const PASS = process.env.BASIC_AUTH_PASSWORD;

  if (!USER || !PASS) {
    console.error("BASIC_AUTH_USER e BASIC_AUTH_PASS não definidos no .env");
    process.exit(1);
  }

  return (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Basic ")) {
      res.setHeader("WWW-Authenticate", 'Basic realm="Secure Area"');
      return res.status(401).json({ error: "Unauthorized" });
    }

    const encoded = authHeader.split(" ")[1];
    const decoded = Buffer.from(encoded, "base64").toString("utf8");

    const [user, pass] = decoded.split(":");

    if (user !== USER || pass !== PASS) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    next();
  };
};

export default basicAuth;
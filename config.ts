const config = {
  appName: "hsroadmap",
  appDescription: "aweseomsauce",
  domainName:
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://hsroadmap-wz3j-r6drtnbl8-aidenjcheng12-gmailcoms-projects.vercel.app",
};

export default config;

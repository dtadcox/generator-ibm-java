{
  "excludes" : [
    ".classpath",
    ".project"
  ],
  "excludesDir" : [
    "target",
    ".settings",
    "build"
  ],
  "composition" : [
    "common",
    "@arf/generator-spring:build",
    "@arf/generator-spring:config",
    "@arf/generator-spring:health",
    "@arf/generator-spring:content"
  ]
}

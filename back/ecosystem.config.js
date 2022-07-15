module.exports = {
  apps : [{
    script: './bin/lojaBack',
    watch: '.',
    ignore_watch : ["node_modules", "./public"],
  }]
};

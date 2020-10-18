
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  while(true) {
    console.log("Microservices rock!");
    await sleep(5000);
  }
}

setInterval(()=>console.log("Here is variable", process.env.tralala), 2000)

main();
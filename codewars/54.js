const cannonsReady = (gunners) => {
  let count = 0;
  let ready = 0;
  for(let guy in gunners) {
    if(gunners.hasOwnProperty(guy)) {
      count++;
    }
    if(gunners[guy] === 'aye') {
      ready++;
    }
  }
  return ready === count ? 'Fire!' : 'Shiver me timbers!'
}
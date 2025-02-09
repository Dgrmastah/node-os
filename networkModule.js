const os = require('os');

function getNetworkInfo() {
  const networkInterfaces = os.networkInterfaces();

  for (const interfaceName in networkInterfaces) {
    console.log(`Interfaz ${interfaceName}:`);
    
    networkInterfaces[interfaceName].forEach((interfaceInfo) => {
      console.log(`  Familia: ${interfaceInfo.family}`);
      console.log(`  Dirección: ${interfaceInfo.address}`);
      console.log(`  Interno: ${interfaceInfo.internal}`);
    });
  }
}

module.exports = {
  getNetworkInfo
};

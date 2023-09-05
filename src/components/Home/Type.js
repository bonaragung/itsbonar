import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "VM Ware Vsphere",
          "VM Ware ESXi",
          "F5 Proxy",
          "Mikrotik",
          "Windows Server",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;

import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import JSZip from 'jszip/dist/jszip.js';

export default function() {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Button onClick={()=>{
          const zip = new JSZip();

          zip.file("Hello.txt", "Hello World\n");
          zip.generateAsync({type:"base64"}).then(function(content) {
            let a = document.createElement('a');
            a.href = 'data:application/zip;base64,' + content;
            a.download = decodeURI('设备二维码2.zip');
            a.click();
          });

      }}>CLICK ME</Button>
      <Modal visible={visible} onOk={() => setVisible(false)} onCancel={() => setVisible(false)} title="qiankun">
        Probably the most complete micro-frontends solution you ever met
      </Modal>
    </>
  );
}

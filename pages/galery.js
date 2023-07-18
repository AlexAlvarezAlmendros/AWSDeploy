import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import React, { useState, useEffect } from 'react';
import Script from 'next/script'
import { useRouter } from 'next/router'

export default function Galery({ info }) {
  const router = useRouter();

  function FillContent(floorInfo) {
    //Floor2
    var numeroDeObras = floorInfo.ES.Info.NOFPaints;
    var table = document.getElementById("tablaPrincipal");
    table.style = "width: 100%"
    var index = 1;
    var indexFloor2 = 0;
    var indexFloor1 = 0;
    var indexFloor3 = 0;
    let lastRow;
    console.log("NUMERODEOBRAS: " + numeroDeObras);

    for(let i = 0; i< numeroDeObras;i++){
      
      if(i==0){
        table.deleteRow(0);
      }
      if (i%2==0){
        lastRow = table.insertRow(-1);  
      }else{
        lastRow = table.rows[(i-1)/2];
      }
      let cell = lastRow.insertCell(index-1);
      cell.className = styles.cellgal;
      cell.style = "width: 50%;"
      let button = document.createElement('a');
      button.className = styles.buttongal;

      let queryString = window.location.search;
      let urlParams = new URLSearchParams(queryString);
      let tmplang= urlParams.get('lang');

      if(i <= 32){
        button.href = document.location.origin + "/visit?floor=2" + "&lang=" + tmplang + "&count=" + indexFloor2;
        indexFloor2++;
      }
      if(i>32 && i<=46){
        button.href = document.location.origin + "/visit?floor=1" + "&lang=" + tmplang + "&count=" + indexFloor1;
        indexFloor1++;
      }
      if(i>46){
        button.href = document.location.origin + "/visit?floor=3" + "&lang=" + tmplang + "&count=" + indexFloor3;
        indexFloor3++;
      }

      let img = document.createElement('img');
      img.className = styles.imggal;
      img.src = "images/".concat(floorInfo.ES.Paintings[i].image);
      
      button.appendChild(img);
      cell.appendChild(button);

      if (index == 0){
        index = 1;
      }
      else{
        index--;
      }
    }

  }
  
  switch (router.query.floor) {
    case '1':
      return (
          <div onLoad={() => {FillContent(info)}} className={styles.container}>
            <Head>
              <title>BANKSY</title>
              <meta name="description" content="Audio Guide from Museu Banksy" />
              <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"></meta>
              <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.main}>
              <div className={styles.tableContainer}>
                <div id='galleryGrid' className={styles.galleryGrid}>
                  <table id='tablaPrincipal' className={styles.tabladeobras}>
                    <thead></thead>
                    <tbody>
                      <tr>
                        <td><img id='firstImg' src="/images/AACHOO.jpg" alt="Imagen 3"/></td>
                        <td></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
      )

  }
  
}

export async function getStaticProps() {
  const info = await fetch('https://cdn.shopify.com/s/files/1/0462/4485/5961/files/galery.json').then(res => res.json());
  return {
    props: {
      info,
    }
  }
}
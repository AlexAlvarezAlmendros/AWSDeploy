import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import React, { useState, useEffect } from 'react';
import Script from 'next/script'
import { useRouter } from 'next/router'
let index = 0;
let url = " ";

export default function Galery({ spninfo }) {
  const [count, setCount] = React.useState(0);
  const router = useRouter();

  function FillContent(floorInfo) {
    //Floor1
    var numeroDeObras = floorInfo.ES.Info.Floor1Size;
    var table = document.getElementById("tablaPrincipal");
    table.style = "width: 100%"
    var index = 1;
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
      cell.style = "width: 50%;"
      let button = document.createElement('a');

      let queryString = window.location.search;
      let urlParams = new URLSearchParams(queryString);
      let tmplang= urlParams.get('lang');

      button.href = document.location.origin + "/visit?floor=1" + "&lang=" + tmplang + "&count=" + i;
      
      let img = document.createElement('img');
      img.style = "width: 100%"
      img.src = "images/".concat(floorInfo.ES.Floor1[i].image);
      
      button.appendChild(img);
      cell.appendChild(button);

      if (index == 0){
        index = 1;
      }
      else{
        index--;
      }
    }
    //Floor2
    numeroDeObras = floorInfo.ES.Info.Floor2Size;

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
      cell.style = "width: 50%;"
      let button = document.createElement('a');

      let queryString = window.location.search;
      let urlParams = new URLSearchParams(queryString);
      let tmplang= urlParams.get('lang');

      button.href = document.location.origin + "/visit?floor=2" + "&lang=" + tmplang + "&count=" + i;
      
      let img = document.createElement('img');
      img.style = "width: 100%"
      img.src = "images/".concat(floorInfo.ES.Floor2[i].image);
      
      button.appendChild(img);
      cell.appendChild(button);

      if (index == 0){
        index = 1;
      }
      else{
        index--;
      }
    }

    //Floor3
    numeroDeObras = floorInfo.ES.Info.Floor3Size;

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
      cell.style = "width: 50%;"
      let button = document.createElement('a');

      let queryString = window.location.search;
      let urlParams = new URLSearchParams(queryString);
      let tmplang= urlParams.get('lang');

      button.href = document.location.origin + "/visit?floor=3" + "&lang=" + tmplang + "&count=" + i;
      
      let img = document.createElement('img');
      img.style = "width: 100%"
      img.src = "images/".concat(floorInfo.ES.Floor3[i].image);
      
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
          <div onLoad={() => {FillContent(spninfo)}} className={styles.container}>
            <Head>
              <title>Espacio Trafalgar</title>
              <meta name="description" content="Audio Guide from Espacio Trafalgar" />
              <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"></meta>
              <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.main}>
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
      )

  }
  
}

export async function getStaticProps() {
  const spninfo = await fetch('https://cdn.shopify.com/s/files/1/0462/4485/5961/files/spnContent.json').then(res => res.json());
  return {
    props: {
      spninfo,
    }
  }
}
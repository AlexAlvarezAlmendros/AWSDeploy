import Head from 'next/head'
import Image  from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter();
  
  switch (router.query.lang){ 
    case '1': //Spain
      return (
        <div className={styles.container}>
          <Head>
            <title>BANKSY</title>
            <meta name="description" content="La AudioGuia de EspacioTrafalgar" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"></meta>
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <div className={styles.main}>
            <div className={styles.header_div}>
              <Image alt="" className={styles.logo} width={230} height={129} src="/LogoWhite.png"/>
            </div>
            <div className={styles.main_div} >
              <a className={styles.menua} href="/floor?lang=1" >EMPEZAR</a>
              <a className={styles.menua} href="/galery?lang=1&floor=1" >GALERIA</a> 
            </div>
            <h1 className={styles.Info}>Selecciona tu lenguaje preferido:</h1>
            <div className={styles.languajeSelector}>
              <a className={styles.langa} href="?lang=1" ><Image alt=""  width={40} height={40} src="/spain.png"/></a>
            <a className={styles.langa} href="?lang=2" ><Image alt=""  width={40} height={40} src="/catalonia.png"/></a>
            <a className={styles.langa} href="?lang=3" ><Image alt=""  width={40} height={40} src="/france.png"/></a>
            <a className={styles.langa} href="?lang=4" ><Image alt=""  width={40} height={40} src="/italy.png"/></a>
            <a className={styles.langa} href="?lang=5" ><Image alt=""  width={40} height={40} src="/britain.png"/></a>
            </div>
          </div>
        </div>
      )
      break;
    case '2': //Catalonia
      return (
        <div className={styles.container}>
          <Head>
            <title>BANKSY</title>
            <meta name="description" content="AudioGuia de EspaiTrafalgar" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"></meta>
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <div className={styles.main}>
            <div className={styles.header_div}>
              <Image alt="" className={styles.logo} width={230} height={129} src="/LogoWhite.png"/>
            </div>
            <div className={styles.main_div} >
              <a className={styles.menua} href="/floor?lang=2" >COMENÇAR</a>
              <a className={styles.menua} href="/galery?lang=2&floor=1" >GALERIA</a>
                
            </div>
            <h1 className={styles.Info} >Selecciona el teu idioma preferit:</h1>
            <div className={styles.languajeSelector}>
              <a className={styles.langa} href="?lang=1" ><Image alt=""  width={40} height={40} src="/spain.png"/></a>
            <a className={styles.langa} href="?lang=2" ><Image alt=""  width={40} height={40} src="/catalonia.png"/></a>
            <a className={styles.langa} href="?lang=3" ><Image alt=""  width={40} height={40} src="/france.png"/></a>
            <a className={styles.langa} href="?lang=4" ><Image alt=""  width={40} height={40} src="/italy.png"/></a>
            <a className={styles.langa} href="?lang=5" ><Image alt=""  width={40} height={40} src="/britain.png"/></a>
            </div>
          </div>
        </div>
      )
      break;
    case '3': //France
      return (
        <div className={styles.container}>
          <Head>
            <title>BANKSY</title>
            <meta name="description" content="Audioguide d'Espacio Trafalgar" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"></meta>
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <div className={styles.main}>
            <div className={styles.header_div}>
              <Image alt="" className={styles.logo} width={230} height={129} src="/LogoWhite.png"/>
            </div>
            <div className={styles.main_div} >
              <a className={styles.menua} href="/floor?lang=3" >COMMENCER</a>
              <a className={styles.menua} href="/galery?lang=3&floor=1" >GALERIE</a>
                
            </div>
            <h1 className={styles.Info} >Sélectionnez votre langue préférée:</h1>
            <div className={styles.languajeSelector}>
              <a className={styles.langa} href="?lang=1" ><Image alt=""  width={40} height={40} src="/spain.png"/></a>
            <a className={styles.langa} href="?lang=2" ><Image alt=""  width={40} height={40} src="/catalonia.png"/></a>
            <a className={styles.langa} href="?lang=3" ><Image alt=""  width={40} height={40} src="/france.png"/></a>
            <a className={styles.langa} href="?lang=4" ><Image alt=""  width={40} height={40} src="/italy.png"/></a>
            <a className={styles.langa} href="?lang=5" ><Image alt=""  width={40} height={40} src="/britain.png"/></a>
            </div>
          </div>
        </div>
      )
      break;
    case '4': //Italy
      return (
        <div className={styles.container}>
          <Head>
            <title>BANKSY</title>
            <meta name="description" content="Audioguida da Espacio Trafalgar
            " />
            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"></meta>
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <div className={styles.main}>
            <div className={styles.header_div}>
              <Image alt="" className={styles.logo} width={230} height={129} src="/LogoWhite.png"/>
            </div>
            <div className={styles.main_div} >
              <a className={styles.menua} href="/floor?lang=4" >INIZIO</a>
              <a className={styles.menua} href="/galery?lang=4&floor=1" >GALLERIA</a>
                
            </div>
            <h1 className={styles.Info} >Seleziona la tua lingua preferita:</h1>
            <div className={styles.languajeSelector}>
              <a className={styles.langa} href="?lang=1" ><Image alt=""  width={40} height={40} src="/spain.png"/></a>
            <a className={styles.langa} href="?lang=2" ><Image alt=""  width={40} height={40} src="/catalonia.png"/></a>
            <a className={styles.langa} href="?lang=3" ><Image alt=""  width={40} height={40} src="/france.png"/></a>
            <a className={styles.langa} href="?lang=4" ><Image alt=""  width={40} height={40} src="/italy.png"/></a>
            <a className={styles.langa} href="?lang=5" ><Image alt=""  width={40} height={40} src="/britain.png"/></a>
            </div>
          </div>
        </div>
      )
      break;
    case '5': //Britain
    return (
      <div className={styles.container}>
        <Head>
          <title>BANKSY</title>
          <meta name="description" content="Audio Guide from Museu Banksy" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"></meta>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className={styles.main}>
          <div className={styles.header_div}>
            <Image alt="" className={styles.logo} width={230} height={129} src="/LogoWhite.png"/>
          </div>
          <div className={styles.main_div} >
            <a className={styles.menua} href="/floor?lang=5" >START</a>
              <a className={styles.menua} href="/galery?lang=5&floor=1" >GALERY</a>
              
          </div>
          <h1 className={styles.Info} >Select your preferred languaje:</h1>
          <div className={styles.languajeSelector}>
            <a className={styles.langa} href="?lang=1" ><Image alt=""  width={40} height={40} src="/spain.png"/></a>
            <a className={styles.langa} href="?lang=2" ><Image alt=""  width={40} height={40} src="/catalonia.png"/></a>
            <a className={styles.langa} href="?lang=3" ><Image alt=""  width={40} height={40} src="/france.png"/></a>
            <a className={styles.langa} href="?lang=4" ><Image alt=""  width={40} height={40} src="/italy.png"/></a>
            <a className={styles.langa} href="?lang=5" ><Image alt=""  width={40} height={40} src="/britain.png"/></a>
          </div>
        </div>
      </div>
    )
      break;
    default: //Default (Eng)
      return (
        <div className={styles.container}>
          <Head>
            <title>BANKSY</title>
            <meta name="description" content="Audio Guide from Museu Banksy" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"></meta>
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <div className={styles.main}>
            <div className={styles.header_div}>
              <Image alt="" className={styles.logo} width={230} height={129} src="/LogoWhite.png"/>
            </div>
            <div className={styles.main_div} >
              <a className={styles.menua} href="/floor?lang=5" >START</a>
              <a className={styles.menua} href="/galery?lang=5&floor=1" >GALERY</a>
                
            </div>
            <h1 className={styles.Info} >Select your preferred languaje:</h1>
            <div className={styles.languajeSelector}>

            <a className={styles.langa} href="?lang=1" ><Image alt=""  width={40} height={40} src="/spain.png"/></a>
            <a className={styles.langa} href="?lang=2" ><Image alt=""  width={40} height={40} src="/catalonia.png"/></a>
            <a className={styles.langa} href="?lang=3" ><Image alt=""  width={40} height={40} src="/france.png"/></a>
            <a className={styles.langa} href="?lang=4" ><Image alt=""  width={40} height={40} src="/italy.png"/></a>
            <a className={styles.langa} href="?lang=5" ><Image alt=""  width={40} height={40} src="/britain.png"/></a>
            </div>
          </div>
        </div>
      )
      break;
      }
}

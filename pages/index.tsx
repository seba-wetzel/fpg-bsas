import { useState } from "react";
import type { NextPage } from 'next'
import ReactTooltip from "react-tooltip";
import MapChart from "../components/MapChart";
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const [content, setContent] = useState("");
  return (
    <div className={styles.main}>
     <MapChart  setTooltipContent={setContent} />
      <ReactTooltip>{content}</ReactTooltip>
    </div>
  )
}

export default Home

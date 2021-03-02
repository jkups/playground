import React,{ useState, useEffect } from 'react';
import DatGui, { DatNumber } from 'react-dat-gui';
import Box from './Box';
import './App.css';
import './DatGui.css';

const App = props => {
  const [box, setBox] = useState([])
  const [config, setConfig] = useState({ size: 80, timer: 50 })

  useEffect(() => {
    const newBox = []
    const dimensions = { minHeight: config.size, minWidth: config.size }

    const boxCol = Math.floor(window.innerWidth/config.size)
    const boxRow = Math.floor(window.innerHeight/config.size)
    const boxNumber = boxCol * boxRow

    for(let i = 0; i < boxNumber; i++){
      const idx = Math.floor(Math.random() * props.bgColors.length)
      newBox[i] = {...dimensions, backgroundColor:props.bgColors[idx]}
    }

    setBox(newBox)
  }, [config.size])

  useEffect(() => {
    const timerId = setTimeout(() => {
      const boxIdx = Math.floor(Math.random() * box.length)
      const bgIdx = Math.floor(Math.random() * props.bgColors.length)

      const newBox = box.map((b, i) => {
        return i === boxIdx ?
          {...b, backgroundColor:props.bgColors[bgIdx]} : b
      })
      setBox(newBox)
    }, config.timer, box)

    return () => {
      clearTimeout(timerId);
    }
  })

  const handleUpdate = newConfig => {
    setConfig(prevConfig => {
      return {...prevConfig, ...newConfig}
    })
  }

  return (
    <div className="App">
      {
        box &&
        box.map((b, i) => <Box key={i} {...b} />)
      }
      <DatGui data={config} onUpdate={handleUpdate}>
        <DatNumber path="timer" label="Color Timer" min={10} max={2000} step={10} />
        <DatNumber path="size" label="Box Size" min={50} max={500} step={5} />
      </DatGui>
    </div>
  );
}

App.defaultProps = {
  bgColors: [
    "AliceBlue","AntiqueWhite","Aqua","Aquamarine","Azure","Beige","Bisque","Black","BlanchedAlmond","Blue","BlueViolet","Brown","BurlyWood","CadetBlue","Chartreuse","Chocolate","Coral","CornflowerBlue","Cornsilk","Crimson","Cyan","DarkBlue","DarkCyan","DarkGoldenRod","DarkGray","DarkGrey","DarkGreen","DarkKhaki","DarkMagenta","DarkOliveGreen","Darkorange","DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen","DarkSlateBlue","DarkSlateGray","DarkSlateGrey","DarkTurquoise","DarkViolet","DeepPink","DeepSkyBlue","DimGray","DimGrey","DodgerBlue","FireBrick","FloralWhite","ForestGreen","Fuchsia","Gainsboro","GhostWhite","Gold","GoldenRod","Gray","Grey","Green","GreenYellow","HoneyDew","HotPink","IndianRed","Indigo","Ivory","Khaki","Lavender","LavenderBlush","LawnGreen","LemonChiffon","LightBlue","LightCoral","LightCyan","LightGoldenRodYellow","LightGray","LightGrey","LightGreen","LightPink","LightSalmon","LightSeaGreen","LightSkyBlue","LightSlateGray","LightSlateGrey","LightSteelBlue","LightYellow","Lime","LimeGreen","Linen","Magenta","Maroon","MediumAquaMarine","MediumBlue","MediumOrchid","MediumPurple","MediumSeaGreen","MediumSlateBlue","MediumSpringGreen","MediumTurquoise","MediumVioletRed","MidnightBlue","MintCream","MistyRose","Moccasin","NavajoWhite","Navy","OldLace","Olive","OliveDrab","Orange","OrangeRed","Orchid","PaleGoldenRod","PaleGreen","PaleTurquoise","PaleVioletRed","PapayaWhip","PeachPuff","Peru","Pink","Plum","PowderBlue","Purple","Red","RosyBrown","RoyalBlue","SaddleBrown","Salmon","SandyBrown","SeaGreen","SeaShell","Sienna","Silver","SkyBlue","SlateBlue","SlateGray","SlateGrey","Snow","SpringGreen","SteelBlue","Tan","Teal","Thistle","Tomato","Turquoise","Violet","Wheat","White","WhiteSmoke","Yellow","YellowGreen"
  ]
};

export default App;

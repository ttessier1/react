
export default function Color({value}) {
    console.log("Inside Color Functions");
    console.log(value);
    return <div className="colorbox" style={{backgroundColor: value}} />;
  }
  
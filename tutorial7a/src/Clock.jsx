export default function Clock({ time }) {
  console.log(typeof(time));
  console.log(Object.getOwnPropertyNames(time));
  
    let hours = time.getHours();
    console.log("Hours:"+hours);
    var timeElement =document.getElementById('time');
    if(timeElement && typeof(timeElement) === "object" && timeElement.nodeName == "DIV")
    { 
      if (hours >= 0 && hours <= 6) {
        timeElement.className = 'night';
        console.log("Settint ClassName to Night");
      } else {
        timeElement.className = 'day';
        console.log("Settint ClassName to Day");
      }
    }
    else
    {
      console.log("Failed to get the time element");
      console.log("Time Element is of type:"+ typeof(timeElement));
      console.log("Time Element Node Name:"+timeElement.nodeName);
    }
    return (
      <h1 id="time">
        {time.toLocaleTimeString()}
      </h1>
    );
  }
  
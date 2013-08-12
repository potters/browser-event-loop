// get high resolution timestamp
var highResolutionTimeStampFunctionCall = window.performance.now.bind(window.performance)
var nextTick = setTimeout


var lastTickAt = highResolutionTimeStampFunctionCall()
var tickCount = 0
var ticker = function() {
  if(tickCount >= 9001) return
  var timeOffCurrentTick = highResolutionTimeStampFunctionCall()
  tickCount++
  console.log("Number of Ticks",tickCount,"Delta", timeOffCurrentTick - lastTickAt)
  lastTickAt = timeOffCurrentTick
  nextTick(ticker)
}
ticker()

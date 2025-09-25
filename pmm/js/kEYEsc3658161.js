
      function atomiShowItems({items}) {
      try {
        items.forEach((item) => {
          const hiddenItem = [...document.querySelectorAll(`#${item}`), ...document.querySelectorAll(`.${item}`)];
          console.log("hiddenItem", hiddenItem)
          if (hiddenItem?.length > 0) {
            hiddenItem.forEach(item => item.classList.remove("atomicat-delay"));
          }
        })
      } catch (error) {
        console.log(error);
      }
      }
    
      (function() {
        function atomiEleCountdown() {
          try {
            document.querySelectorAll('.atomicat-countdown-text').forEach(el => {
              const dateTime = el.getAttribute("data-time");
              const compKey = el.getAttribute("id").split("-")[el.getAttribute("id").split("-")?.length-1];
              const intervalName = 'atomicat_countdown_text_interval_' + compKey;

              window[intervalName] = setInterval(function updateCountdownText() {
                let targetTime; 
                const findDelayParent = el.closest('.atomicat-delay') || el.closest('.atomicat-hidden');
                if (findDelayParent) return;
                const sessionStorageKey = 'atomicat_countdown_text_interval_' + compKey;
                let countdownStart = sessionStorage.getItem(sessionStorageKey);
                if (!countdownStart) {
                  countdownStart = new Date().getTime();
                  sessionStorage.setItem(sessionStorageKey, countdownStart);
                }
                const [dateTimeMins, dateTimeSecs] = dateTime.split(":").map(Number);
                targetTime = new Date(parseInt(countdownStart));
                targetTime.setMinutes(targetTime.getMinutes() + dateTimeMins);
                targetTime.setSeconds(targetTime.getSeconds() + dateTimeSecs);
    
                const now = new Date();
                const distance = targetTime - now;
    
                if (distance <= 0) {
                  clearInterval(window[intervalName]);
                  const countdownContainer = document.getElementById('atomicat-countdown-text-' + compKey);
                  countdownContainer.textContent = "00:00"
                  return;
                }
    
                const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
                const countdownContainer = document.getElementById('atomicat-countdown-text-' + compKey);
                if(countdownContainer) {
                  let timeHours = hours < 10 ? `0${hours}` : hours;
                  let timeMinutes = minutes < 10 ? `0${minutes}` : minutes;
                  let timeSeconds = seconds < 10 ? `0${seconds}` : seconds;
                  countdownContainer.textContent = timeMinutes+":"+timeSeconds
                }
              }, 1000);
            });
          } catch (error) {
            console.log(error);
          }
        }
        try {
          const hasCountdownText = document.querySelectorAll('.atomicat-countdown-text')
          console.log(hasCountdownText)
          if(hasCountdownText?.length){
            atomiEleCountdown()
          }
        } catch (error) {
          console.log(error);
        }
      })();
    (function() {
          try {
              const clickeventList = [{"compKey":"151602b","misc":{"type":"image"}},{"compKey":"7218b7b","misc":{"type":"button"}},{"compKey":"ff877d6","misc":{"type":"text"}},{"compKey":"22994d0","misc":{"type":"image"}},{"compKey":"87c5156","misc":{"type":"button"}},{"compKey":"ed8679e","misc":{"type":"text"}},{"compKey":"e919484","misc":{"type":"text"}},{"compKey":"d1dde0a","misc":{"type":"text"}},{"compKey":"6bd1a76","misc":{"type":"text"}},{"compKey":"9c5871e","misc":{"type":"text"}}];
    
    
              clickeventList.forEach((comp, index) => {
                  const compKey = comp?.compKey;
                  const eleType = comp?.misc?.type;
                  
                  
                  
                  
                  
                  
              });
    
          } catch (error) {
              return error;
          }
      })();
      (function() {
        try {
          setTimeout(() => {
            let elementsWithDelayClass = document.querySelectorAll(".atomicat-delay");
            if(elementsWithDelayClass){
              elementsWithDelayClass.forEach(element => {
                element.classList.remove("atomicat-delay");
              });
            }
            
    var scrollElement = document.getElementById("potes");
    if (scrollElement) {
      scrollElement.scrollIntoView({ behavior: 'smooth' });
    }
          }, 1842000);
        } catch (error) {
          console.log(error);
        }
      })();
    
window.onload =function () {
        var json = [{
            width: 700,
            opacity: 0.4,
            top: 30,
            left: 50,
            zIndex: 1
        },{
            width: 800,
            opacity: 0.7,
            top: 100,
            left: 20,
            zIndex: 2
        },{
            width: 900,
            opacity: 1,
            top: 200,
            left: 150,
            zIndex: 3
        },

        refreshImageLocation(0);
        function refreshImageLocation(index){

            var liArr = $('li');
            console.log(liArr);
            for(var i = 0; i < liArr.length; i++){
                var li = liArr[i];
                var locationIndex = i - index;

                if(locationIndex < 0){
                    locationIndex += 3;
                }

                var locationDate = json[locationIndex];
                console.log(locationDate);

                animate(li, locationDate, null);
            }
        }

        var index = 0;
        $('#next').onclick = function(){
            // console.log('#next');
            index++;
            if(index == 3){
                index = 0;
            }
            refreshImageLocation(index);
        }

        $('#prev').onclick = function(){
            index--;
            if(index < 0){
                index = 3;
            }
            refreshImageLocation(index);
        }

    }

const token = "bfe61f4d4a954c3eb20c5731c9e5c667"
let baseurl = "https://proxy.cors.sh/https://api.football-data.org/v4"


function getStandings() {

    const url = baseurl + "/competitions/2000/standings"

    axios.get(url, {
        headers: {
            "X-Auth-Token": `${token}`

        }
    })
        .then((response) => {


            let standingst = response.data.standings;
            let standContentt = ``
            let rt = ""
          
            document.getElementById("Standings").innerHTML = " ";

            for (standing of standingst) {

                      let standContentt2=''
                for (tbj of standing.table) {

                    
                    standContentt2+= ` <tr>
                    <td scope="col">${tbj.team.tla}</td>
                    <td scope="col">${tbj.won}</td>
                    <td scope="col">${tbj.draw}</td>
                    <td scope="col">${tbj.lost}</td>
                    <td scope="col">${tbj.points}</td>
                </tr>`
                }
                standContentt += `
    <div class="col-sm-6 m-2 float-start" >
    <div class="card ">
        <div class="card-body p-4" style="background-color: brown;">
            <div class="row">
                <div class="titre " style="background-color: #d54343;    color: white;">
                    <h3>${standing.group}</h3>
                </div>
                <div class="stnder">
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">الفريق</th>
                                <th scope="col">فاز</th>
                                <th scope="col">تعادل</th>
                                <th scope="col">خسر</th>
                                <th scope="col">نقاط</th>
                            </tr>
                        </thead>
                        <tbody id="rest">
                        
                  ${standContentt2}
                        
                       
                        
                        </tbody >
                    </table >
                </div >
            </div >

        </div >
    </div >
</div >
                        `
                       
                       
                       
                  
                    }

            


            document.getElementById("Standings").innerHTML +=standContentt;










           
        })
    }

function getmatch()
{
const dt=new Date()
    const url = baseurl+"/competitions/2000/matches?stage=SEMI_FINALS "
    
    axios.get(url, {
        headers: {
            "X-Auth-Token": `${ token } `
            
        }
    })
    .then((response) => {
        
        
console.log(response.data.matches);
let datas=response.data.matches;
let tableContent = ``
document.getElementById("matches").innerHTML = " ";

for(mat of datas){

    const matchTime = new Date(mat.utcDate)
    const dateString = matchTime.getUTCFullYear()+"/"+matchTime.getUTCMonth()+"/"+matchTime.getUTCDay()+" "+matchTime.getUTCHours()+":"+matchTime.getUTCMinutes()
let tableContentt=""
    tableContent += `<div class="col-sm-6 m-2 float-start">
                    <div class="card ">
                        <div class="card-body ">
                            <div class="row">


                                <div class="col-3 homecompa">
                                    <img src="${mat.homeTeam.crest}" alt="${mat.homeTeam.tla}">
                                        <h3>${mat.homeTeam.tla}</h3>
                                </div>


                                <div class="col-6 homeresulta">
                                    <div class="row">
                                        <div class="col-3">


                                            ${mat.score.fullTime.home ?? "-"}


                                        </div>
                                        <div class="col-6">
                                            <h4>${mat.group}</h4>

                                            x
                                            <h5>${dateString}</h5>
                                        </div>
                                        <div class="col-3"> ${mat.score.fullTime.away ?? "-"}</div>
                                    </div>

                                </div>
                                <div class="col-3 homecompa">

                                    <img src="${mat.awayTeam.crest}" alt="${mat.awayTeam.tla}">
                                        <h3>${mat.awayTeam.tla}</h3>
                                </div>
                            </div>

                        </div>
                    </div>
</div > `

            }

            document.getElementById("matches").innerHTML +=tableContent;





        
           
        })
    }



    getStandings();
    getmatch();
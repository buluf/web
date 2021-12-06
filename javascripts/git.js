function ProfileData() {
  let xhr = new XMLHttpRequest()

  xhr.onload = function () {        

      let data = JSON.parse(this.responseText)

      let perfilData = `
      <div class="col-lg-4">
    </div>
      <div class="col-lg-8">
      <h2>Leonardo Rothier</h2>
      <p><strong>Descrição</strong> <br>
        24 anos<br>
        Graduando em Ciência da Computação pela PUC-MG<br>
        Estagiario<br>
        <br>
        <strong>Profile</strong>: ${data.name}<br>
        <strong>Followers</strong>: ${data.followers}     <strong>Following</strong>: ${data.following}<br>
        <strong>Repositories</strong>: ${data.public_repos}
      </p>
      <p>
        <br>
        </div>`;
      
      document.getElementById('git').innerHTML = perfilData;
  }

  xhr.open('GET', 'https://api.github.com/users/buluf');
  xhr.send();
}

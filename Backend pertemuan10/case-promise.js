/// tahapan producing = membuat janji
const download = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const status = true;
        status == false
          ? resolve("Download Success!")
          : reject("Download Failed");
      }, 3000);
    });
  };

/// tahapan consuming = hasil dari janji
download()
.then((result) => {
  console.log(result);
})
.catch((result) => {
  console.log(result);
});
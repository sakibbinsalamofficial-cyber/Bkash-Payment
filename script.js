function copyNumber() {

```
const number = document.getElementById("number").textContent.trim();

navigator.clipboard.writeText(number)
    .then(() => {
        alert("Number copied successfully!");
    })
    .catch(() => {
        alert("Copy failed!");
    });
```

}

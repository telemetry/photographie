fetch('images.json')
  .then(response => response.json())
  .then(images => {
    const container = document.getElementById('gallery');
    images.forEach(name => {
      const img = document.createElement('img');
      img.src = 'images/' + name;
      container.appendChild(img);
    });
  });

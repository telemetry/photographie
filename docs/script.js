fetch('images.json')
  .then(response => response.json())
  .then(entries => {
    const gallery = document.getElementById('gallery');

    // Reverse the array so latest images appear at the top
    entries.reverse();

    entries.forEach(entry => {
      const container = document.createElement('div');
      container.className = 'image-container';

      const img = document.createElement('img');
      img.src = `images/${entry.filename}`;
      img.loading = 'lazy';
      img.alt = entry.filename;

      const caption = document.createElement('div');
      caption.className = 'caption';
      caption.textContent = entry.filename; // Change this to your preferred caption

      container.appendChild(img);
      container.appendChild(caption);
      gallery.appendChild(container);
    });
  });

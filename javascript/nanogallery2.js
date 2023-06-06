jQuery(document).ready(function () {
  jQuery("#my_nanogallery2").nanogallery2({
  	items:[
      { src: './photos/kitterson1.jpg', srct: 'berlin1t.jpg', title: 'Kitterson 1' },
      { src: './photos/kitterson2.jpg', srct: 'berlin2t.jpg', title: 'Kitterson 2' },
      { src: './photos/kitterson3.jpg', srct: 'berlin3t.jpg', title: 'Kitterson 3' }
		],
    thumbnailWidth:  'auto',
  	thumbnailHeight: 100,
    itemsBaseURL:    'https://bbauska.github.io/silus-photo/',
    
		locationHash:    false
  });
});

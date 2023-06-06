jQuery(document).ready(function () {
  jQuery("#my_nanogallery2").nanogallery2({
  	items:[
      { src: 'berlin1.jpg', srct: 'berlin1t.jpg', title: 'Berlin 1' },
      { src: 'berlin2.jpg', srct: 'berlin2t.jpg', title: 'Berlin 2' },
      { src: 'berlin3.jpg', srct: 'berlin3t.jpg', title: 'Berlin 3' }
		],
    thumbnailWidth:  'auto',
  	thumbnailHeight: 100,
    itemsBaseURL:    'https://nanogallery2.nanostudio.org/samples/',
    
		locationHash:    false
  });
});

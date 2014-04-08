if (window.location.hostname !== 'beta.realtor.ca') {
    alert('Sorry, this only works on https://beta.realtor.ca');
    return false;
}

var data = {
    listing_id: $('.m_property_dtl_info_hdr_lft_listingid').text().split(':')[1].trim(),
    listing_url: window.location.href,
    address: $('.m_property_dtl_address_lft p').text(),
    price: $('.m_property_dtl_info_hdr_lft_price').text().trim(),
    bathrooms: $('#imgBathDetail').next().text(),
    bedrooms: $('#imgBedDetail').next().text(),
    image_url: $('.img_0 img').attr('src'),
    person: 'graham'
};


var url = "http://icat-graham.its.sfu.ca:3000/form?" + $.param(data);

window.open(url, 'Save Listing', 'scrollbars=1,status=0,resizable=0,location=0,toolbar=0,width=768,height=900');

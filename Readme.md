Graham's Bookmarklet: [Save MLS Listing](javascript:(function()%7Bif (window.location.hostname !%3D%3D 'beta.realtor.ca') %7Balert('Sorry%2C this only works on https%3A%2F%2Fbeta.realtor.ca')%3Breturn false%3B%7Dvar data %3D %7Blisting_id%3A %24('.m_property_dtl_info_hdr_lft_listingid').text().split('%3A')%5B1%5D.trim()%2Clisting_url%3A window.location.href%2Caddress%3A %24('.m_property_dtl_address_lft p').text()%2Cprice%3A %24('.m_property_dtl_info_hdr_lft_price').text().trim()%2Cbathrooms%3A %24('%23imgBathDetail').next().text()%2Cbedrooms%3A %24('%23imgBedDetail').next().text()%2Cimage_url%3A %24('.img_0 img').attr('src')%2Cperson%3A 'graham'%7D%3Bvar url %3D "http%3A%2F%2Flocalhost%3A3000%2Fform%3F" %2B %24.param(data)%3Bwindow.open(url%2C 'Save Listing'%2C 'scrollbars%3D1%2Cstatus%3D0%2Cresizable%3D0%2Cicat-graham.its.sfu.ca%3D0%2Ctoolbar%3D0%2Cwidth%3D768%2Cheight%3D900')%7D)())

Eryn's Bookmarklet: [Save MLS Listing](javascript:(function()%7Bif (window.location.hostname !%3D%3D 'beta.realtor.ca') %7Balert('Sorry%2C this only works on https%3A%2F%2Fbeta.realtor.ca')%3Breturn false%3B%7Dvar data %3D %7Blisting_id%3A %24('.m_property_dtl_info_hdr_lft_listingid').text().split('%3A')%5B1%5D.trim()%2Clisting_url%3A window.location.href%2Caddress%3A %24('.m_property_dtl_address_lft p').text()%2Cprice%3A %24('.m_property_dtl_info_hdr_lft_price').text().trim()%2Cbathrooms%3A %24('%23imgBathDetail').next().text()%2Cbedrooms%3A %24('%23imgBedDetail').next().text()%2Cimage_url%3A %24('.img_0 img').attr('src')%2Cperson%3A 'eryn'%7D%3Bvar url %3D "http%3A%2F%2Ficat-graham.its.sfu.ca%3A3000%2Fform%3F" %2B %24.param(data)%3Bwindow.open(url%2C 'Save Listing'%2C 'scrollbars%3D1%2Cstatus%3D0%2Cresizable%3D0%2Clocation%3D0%2Ctoolbar%3D0%2Cwidth%3D768%2Cheight%3D900')%7D)())
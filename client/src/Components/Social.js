import React from 'react'
// import { buildUrl } from 'react-instafeed'
// import useAbortableFetch from '@hooks/useAbortableFetch'
// import Image from '@components/Image'

function Social() {
    // const options = {
    //     accessToken: 'access...',
    //     clientId: 'client...',
    //     get: 'user', // popular, user
    //     locationId: null,
    //     resolution: 'standard_resolution', // thumbnail, low_resolution, standard_resolution
    //     sortBy: 'none', // none, least-commented, least-liked, least-recent, most-commented, most-liked, most-recent, random
    //     tagName: null,
    //     userId: 'djluvaluva',
    // }

    // const { json, loading, error, abort } = useAbortableFetch(buildUrl(options))
    // if (loading) return 'Loading...'
    // if (error) return `Error: ${error}`
    // if (!json) return null
       
    // const { data, meta, pagination } = json
    
    return(
        <div className='social'>
            <h2>SOCIAL</h2>
            <a href="https://www.instagram.com/djluvaluva/"><img src="" alt=""/></a>
            <a href="https://www.facebook.com/DJ-Luva-Luva-187865534566746/"><img src="" alt=""/></a>
            <a href="https://twitter.com/djluvaluva?lang=en"><img src="" alt=""/></a>
            <a href="https://www.mixcloud.com/djluvaluva/"><img src="" alt=""/></a>
            <a href="https://www.youtube.com/user/dJluvaluva26"><img src="" alt=""/></a>
            {/* <div>
                {// eslint-disable-next-line no-unused-vars
                    data &&
                    data.map(({ caption, id, images, tags }, index) => {
                    const image = images[options.resolution]
                    return (
                        <div
                            key={index}
                            url={image.url}
                            title={caption.text}
                            caption={caption.text}
                            width={image.width}
                            height={image.height}
                        ></div>
                    )
                })}
            </div> */}

        </div>
    )
}

export default Social
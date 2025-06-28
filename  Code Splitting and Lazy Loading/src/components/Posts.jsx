import React from 'react'
import { Suspense } from 'react';

const Lists = React.lazy(()=> import("./Lists"));

function Posts() {

    return (
        <Suspense fallback={<h1>Loading .... </h1>} >
        <Lists/>
        </Suspense>
    )
}

export default Posts
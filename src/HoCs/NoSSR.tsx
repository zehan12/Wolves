import dynamic from 'next/dynamic'
import React from 'react'

type props = {
    children: React.ReactNode
}

const NoSsr = (props: props) => (
    <React.Fragment>{props.children}</React.Fragment>
)

export default dynamic(() => Promise.resolve(NoSsr), {
    ssr: false
})

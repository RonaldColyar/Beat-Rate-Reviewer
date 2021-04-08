import React, { Component } from 'react'
import ConfirmReview from '../Components/ConfirmReview'
import ReviewPopup from '../Components/ReviewPopup'
import SongSelectorComp from '../Components/SongSelectorComp'

export default class DesktopHome extends Component {
    render() {
        return (
            <div>
                <SongSelectorComp/>
                <ConfirmReview/>
                <ReviewPopup/>
            </div>
        )
    }
}

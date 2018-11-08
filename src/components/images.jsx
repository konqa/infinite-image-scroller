import React, { Component } from 'react';

class Images extends Component {
    // style colour based on metal composition
    getMetalSignal(metalSpec) {
        let classes = "badge m2 badge-";
        classes += metalSpec.metal > 200 ? "warning" : "white";
        return classes;
    }

    render() {
        const { id, imageUrl, metal } = this.props.watch;
        return (
            <div className="singleWatch">
                <div id={`watch-${id}`} className="img">
                    <img src={imageUrl} alt={id} />
                </div>
                <div className="details">
                    <p className={this.getMetalSignal({ metal })}>
                        Radioactive Metals: {metal}mg
                    </p>
                </div>
            </div>
        )
    }
}

export default Images;
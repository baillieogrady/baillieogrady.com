import React from "react";
import { Link } from "gatsby";

import Card from './Card';

const Testimonials = ({ heading }) => {

    return (
        <div className="w-full lg:w-9/12 px-6 lg:px-brand-4">
            <h2 className="mb-16">{heading.text}</h2>
            <div className="flex flex-wrap justify-between">
                <Card type="testimonial" testimonial={{
                    name: 'James Godwin', position: 'MD - NEWDAY MEDIA', text: '"I’ve worked with Baillie on a couple of projects. Top quality coding, easy to deal with, and always delivers on time"'
                }} />
                <Card type="testimonial" testimonial={{
                    name: 'Ajay Patel', position: 'CEO - SW EVENTS', text: '"I was actually thinking of not bothering to get this job done But Baillie explained how he could do it to match my requirements as closely as possible and completed the job really well and super quickly."'
                }} />
                <Card type="testimonial" testimonial={{
                    name: 'Chris Mazzini', position: 'CONTRACTOR', text: '"Baillie was by far the best freelancer I’ve ever hired. He was fast, very professional and my site is absolutely perfect!"'
                }} />
                <Card type="testimonial" testimonial={{
                    name: 'Dominique Haingotiana', position: 'PIANIST COMPOSER', text: '"Baillie has helped me on several occasions with WordPress and WooCommerce in a very professional, reliable and timely manner. Thank you!"'
                }} />
            </div>
        </div>
    )
}

export default Testimonials
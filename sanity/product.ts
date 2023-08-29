import { defineField } from "sanity";
import { category } from "./category";

export const products = {
    name: 'products',
    type: 'document',
    title: 'Products',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Product Title'
        },
        {
            name: 'description',
            type: 'string',
            title: 'Product Description'
        },
        {
            name: 'price',
            type: 'number',
            title: 'Product Price'
        },
        {
            name: 'image',
            type: 'image',
            title: 'Product Image'
        },
        defineField({
            name: 'category',
            title: 'Product Category',
            type: 'reference',
            to:[
                {
                type: 'category'
            },
    
        ]
        }),
        
        {
            name: 'slug',
            type: 'string',
            title: 'Slug'
        },
        
        
    ]
}
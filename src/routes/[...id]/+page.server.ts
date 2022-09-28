import { RatedObjectSchema } from '$lib/models/rated-object';
import { redirect, error } from '@sveltejs/kit';
import type {Actions} from './$types';
import {setDoc, deleteDoc, doc} from '@firebase/firestore';
import { db } from '$lib/firebase';

export const actions: Actions = {
    update: async ({request, params}) => {
        const { id } = params;
        const formData = await request.formData();
        const ratedObject = RatedObjectSchema.parse({
            name: formData.get('name'),
            ratings: {
                pia: parseInt(formData.get('pia-rating')!.toString()),
                justin: parseInt(formData.get('justin-rating')!.toString())
            },
            tags: []
        });

        console.log(ratedObject);

        await setDoc(doc(db, 'ratings', id), ratedObject);

        throw redirect(301, '/')
    },
    delete: async ({params}) => {
        const {id} = params;
        try {
            await deleteDoc(doc(db, 'ratings', id));
        } catch (err) {
            throw error(500, JSON.stringify(err));
        }

        throw redirect(301, '/');
    }
};
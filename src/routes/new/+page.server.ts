import { RatedObjectSchema } from '$lib/models/rated-object';
import type { Actions } from './$types';
import { collection, addDoc } from "@firebase/firestore";
import { db } from '$lib/firebase';
import { redirect } from '@sveltejs/kit';

export const actions: Actions = {
	default: async ({ request }) => {
		// console.log(JSON.stringify(event));
		const data = await request.formData();
		const name = data.get('name');
		const justinRating = data.get('justin-rating')!.toString();
		const piaRating = data.get('pia-rating')!.toString();

		const ratedObject = RatedObjectSchema.parse({
			name,
			ratings: {
				pia: parseInt(piaRating),
				justin: parseInt(justinRating)
			},
			tags: []
		});

		try {
			const docRef = await addDoc(collection(db, 'ratings'), ratedObject);
			console.log('Document written with ID: ', docRef.id);
		} catch (e) {
			console.error('Error adding document: ', e);
		}

		throw redirect(301, '/');
	}
};

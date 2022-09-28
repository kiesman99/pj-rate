import { db } from '$lib/firebase';
import { RatedObjectSchema } from '$lib/models/rated-object';
import { doc, getDoc } from '@firebase/firestore';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
	const { id } = params;

	const docRef = doc(db, 'ratings', id);
	const docSnap = await getDoc(docRef);

	if (!docSnap.exists()) {
		throw error(404, 'Not Found');
	}

	const ratedObject = RatedObjectSchema.parse({
		...docSnap.data(),
		id
	});

	return {
		ratedObject
	};
};

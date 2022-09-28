import { db } from '$lib/firebase';
import { RatedObjectSchema, type RatedObject } from '$lib/models/rated-object';
import { collection, getDocs } from "@firebase/firestore";
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
    const ratings = await getDocs(collection(db, 'ratings'));
    const ratedObjects = ratings.docs.map(rating => {
        const res = RatedObjectSchema.parse({...rating.data(), id: rating.id});
        return res;
    }) as RatedObject[];
    return {
        ratedObjects
    };
}
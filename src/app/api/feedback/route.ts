// pages/api/feedback.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
console.log(Object.keys(prisma));

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { rating } = req.body;

        // Validation du vote
        if (typeof rating !== 'number' || rating < 1 || rating > 5) {
            return res.status(400).json({ message: 'Invalid rating' });
        }

        try {
            // Enregistrer le vote dans la base de données
            const feedback = await prisma.feedback.create({
                data: {
                    rating,
                },
            });

            res.status(200).json({ message: 'Feedback recorded', feedback });
        } catch (error) {
            console.error('Error recording feedback:', error);
            res.status(500).json({ message: 'Error recording feedback' });
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}

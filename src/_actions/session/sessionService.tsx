"use server"
import { db } from "@/providers/prisma/client"
import { ICreateSession, ISession } from "./session"

export const createSession = async (dto: ICreateSession): Promise<ISession | undefined> => {
  console.log("nhonfe")
  try {
    console.log('here KKE')
    const session = await db.session.create({
      include: {
        content: true
      },
      data: {
        ...dto
      }
    })

    return session as ISession;
  } catch (err) {
    console.log(err)
  }
}

const calculateJaccardSimilarity = (setA: any, setB: any) => {
  const intersection = new Set([...setA].filter(x => setB.has(x)));
  const union = new Set([...setA, ...setB]);
  return intersection.size / union.size;
};

export const getRecommendations = async (userId: string) => {
  try {
    // Fetch the most-watched content by counting the sessions
    const mostWatchedContent = await db.session.groupBy({
      by: ['content_id'],
      _count: {
        content_id: true
      },
      orderBy: {
        _count: {
          content_id: 'desc'
        }
      },
    });

    const recommendedContentIds = mostWatchedContent.map(item => item.content_id);

    const recommendedContent = await db.content.findMany({
      where: {
        id: {
          in: recommendedContentIds
        }
      },
      include: {
        topic: {
          include: {
            Course: true
          }
        }
      }
    });
    return recommendedContent;
  } catch (err) {
    console.log(err);
  }
};
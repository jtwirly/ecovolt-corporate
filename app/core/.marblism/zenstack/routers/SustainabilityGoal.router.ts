/* eslint-disable */
import { type RouterFactory, type ProcBuilder, type BaseConfig, db } from ".";
import * as _Schema from '@zenstackhq/runtime/zod/input';
const $Schema: typeof _Schema = (_Schema as any).default ?? _Schema;
import { checkRead, checkMutate } from '../helper';
import type { Prisma } from '@zenstackhq/runtime/models';
import type { UseTRPCMutationOptions, UseTRPCMutationResult, UseTRPCQueryOptions, UseTRPCQueryResult, UseTRPCInfiniteQueryOptions, UseTRPCInfiniteQueryResult } from '@trpc/react-query/shared';
import type { TRPCClientErrorLike } from '@trpc/client';
import type { AnyRouter } from '@trpc/server';

export default function createRouter<Config extends BaseConfig>(router: RouterFactory<Config>, procedure: ProcBuilder<Config>) {
    return router({

        createMany: procedure.input($Schema.SustainabilityGoalInputSchema.createMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).sustainabilityGoal.createMany(input as any))),

        create: procedure.input($Schema.SustainabilityGoalInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).sustainabilityGoal.create(input as any))),

        deleteMany: procedure.input($Schema.SustainabilityGoalInputSchema.deleteMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).sustainabilityGoal.deleteMany(input as any))),

        delete: procedure.input($Schema.SustainabilityGoalInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).sustainabilityGoal.delete(input as any))),

        findFirst: procedure.input($Schema.SustainabilityGoalInputSchema.findFirst.optional()).query(({ ctx, input }) => checkRead(db(ctx).sustainabilityGoal.findFirst(input as any))),

        findMany: procedure.input($Schema.SustainabilityGoalInputSchema.findMany.optional()).query(({ ctx, input }) => checkRead(db(ctx).sustainabilityGoal.findMany(input as any))),

        findUnique: procedure.input($Schema.SustainabilityGoalInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).sustainabilityGoal.findUnique(input as any))),

        updateMany: procedure.input($Schema.SustainabilityGoalInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).sustainabilityGoal.updateMany(input as any))),

        update: procedure.input($Schema.SustainabilityGoalInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).sustainabilityGoal.update(input as any))),

        count: procedure.input($Schema.SustainabilityGoalInputSchema.count.optional()).query(({ ctx, input }) => checkRead(db(ctx).sustainabilityGoal.count(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.SustainabilityGoalCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.SustainabilityGoalCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.SustainabilityGoalCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.SustainabilityGoalCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.SustainabilityGoalCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.SustainabilityGoalCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.SustainabilityGoalGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.SustainabilityGoalGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.SustainabilityGoalCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.SustainabilityGoalCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.SustainabilityGoalGetPayload<T>, Context>) => Promise<Prisma.SustainabilityGoalGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.SustainabilityGoalDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.SustainabilityGoalDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.SustainabilityGoalDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.SustainabilityGoalDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.SustainabilityGoalDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.SustainabilityGoalDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.SustainabilityGoalGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.SustainabilityGoalGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.SustainabilityGoalDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.SustainabilityGoalDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.SustainabilityGoalGetPayload<T>, Context>) => Promise<Prisma.SustainabilityGoalGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.SustainabilityGoalFindFirstArgs, TData = Prisma.SustainabilityGoalGetPayload<T>>(
            input?: Prisma.SelectSubset<T, Prisma.SustainabilityGoalFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.SustainabilityGoalGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.SustainabilityGoalFindFirstArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.SustainabilityGoalFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.SustainabilityGoalGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.SustainabilityGoalGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.SustainabilityGoalFindManyArgs, TData = Array<Prisma.SustainabilityGoalGetPayload<T>>>(
            input?: Prisma.SelectSubset<T, Prisma.SustainabilityGoalFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.SustainabilityGoalGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.SustainabilityGoalFindManyArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.SustainabilityGoalFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.SustainabilityGoalGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.SustainabilityGoalGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.SustainabilityGoalFindUniqueArgs, TData = Prisma.SustainabilityGoalGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.SustainabilityGoalFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.SustainabilityGoalGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.SustainabilityGoalFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.SustainabilityGoalFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.SustainabilityGoalGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.SustainabilityGoalGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.SustainabilityGoalUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.SustainabilityGoalUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.SustainabilityGoalUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.SustainabilityGoalUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.SustainabilityGoalUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.SustainabilityGoalUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.SustainabilityGoalGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.SustainabilityGoalGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.SustainabilityGoalUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.SustainabilityGoalUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.SustainabilityGoalGetPayload<T>, Context>) => Promise<Prisma.SustainabilityGoalGetPayload<T>>
            };

    };
    count: {

        useQuery: <T extends Prisma.SustainabilityGoalCountArgs, TData = 'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.SustainabilityGoalCountAggregateOutputType>
            : number>(
                input?: Prisma.Subset<T, Prisma.SustainabilityGoalCountArgs>,
                opts?: UseTRPCQueryOptions<string, T, 'select' extends keyof T
                    ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.SustainabilityGoalCountAggregateOutputType>
                    : number, TData, Error>
            ) => UseTRPCQueryResult<
                TData,
                TRPCClientErrorLike<AppRouter>
            >;
        useInfiniteQuery: <T extends Prisma.SustainabilityGoalCountArgs>(
            input?: Omit<Prisma.Subset<T, Prisma.SustainabilityGoalCountArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, 'select' extends keyof T
                ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.SustainabilityGoalCountAggregateOutputType>
                : number, Error>
        ) => UseTRPCInfiniteQueryResult<
            'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.SustainabilityGoalCountAggregateOutputType>
            : number,
            TRPCClientErrorLike<AppRouter>
        >;

    };
}

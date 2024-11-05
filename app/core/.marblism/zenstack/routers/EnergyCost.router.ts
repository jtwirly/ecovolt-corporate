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

        createMany: procedure.input($Schema.EnergyCostInputSchema.createMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).energyCost.createMany(input as any))),

        create: procedure.input($Schema.EnergyCostInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).energyCost.create(input as any))),

        deleteMany: procedure.input($Schema.EnergyCostInputSchema.deleteMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).energyCost.deleteMany(input as any))),

        delete: procedure.input($Schema.EnergyCostInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).energyCost.delete(input as any))),

        findFirst: procedure.input($Schema.EnergyCostInputSchema.findFirst.optional()).query(({ ctx, input }) => checkRead(db(ctx).energyCost.findFirst(input as any))),

        findMany: procedure.input($Schema.EnergyCostInputSchema.findMany.optional()).query(({ ctx, input }) => checkRead(db(ctx).energyCost.findMany(input as any))),

        findUnique: procedure.input($Schema.EnergyCostInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).energyCost.findUnique(input as any))),

        updateMany: procedure.input($Schema.EnergyCostInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).energyCost.updateMany(input as any))),

        update: procedure.input($Schema.EnergyCostInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).energyCost.update(input as any))),

        count: procedure.input($Schema.EnergyCostInputSchema.count.optional()).query(({ ctx, input }) => checkRead(db(ctx).energyCost.count(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.EnergyCostCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.EnergyCostCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.EnergyCostCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.EnergyCostCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.EnergyCostCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.EnergyCostCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.EnergyCostGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.EnergyCostGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.EnergyCostCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.EnergyCostCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.EnergyCostGetPayload<T>, Context>) => Promise<Prisma.EnergyCostGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.EnergyCostDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.EnergyCostDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.EnergyCostDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.EnergyCostDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.EnergyCostDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.EnergyCostDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.EnergyCostGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.EnergyCostGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.EnergyCostDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.EnergyCostDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.EnergyCostGetPayload<T>, Context>) => Promise<Prisma.EnergyCostGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.EnergyCostFindFirstArgs, TData = Prisma.EnergyCostGetPayload<T>>(
            input?: Prisma.SelectSubset<T, Prisma.EnergyCostFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.EnergyCostGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.EnergyCostFindFirstArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.EnergyCostFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.EnergyCostGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.EnergyCostGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.EnergyCostFindManyArgs, TData = Array<Prisma.EnergyCostGetPayload<T>>>(
            input?: Prisma.SelectSubset<T, Prisma.EnergyCostFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.EnergyCostGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.EnergyCostFindManyArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.EnergyCostFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.EnergyCostGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.EnergyCostGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.EnergyCostFindUniqueArgs, TData = Prisma.EnergyCostGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.EnergyCostFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.EnergyCostGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.EnergyCostFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.EnergyCostFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.EnergyCostGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.EnergyCostGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.EnergyCostUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.EnergyCostUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.EnergyCostUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.EnergyCostUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.EnergyCostUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.EnergyCostUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.EnergyCostGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.EnergyCostGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.EnergyCostUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.EnergyCostUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.EnergyCostGetPayload<T>, Context>) => Promise<Prisma.EnergyCostGetPayload<T>>
            };

    };
    count: {

        useQuery: <T extends Prisma.EnergyCostCountArgs, TData = 'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.EnergyCostCountAggregateOutputType>
            : number>(
                input?: Prisma.Subset<T, Prisma.EnergyCostCountArgs>,
                opts?: UseTRPCQueryOptions<string, T, 'select' extends keyof T
                    ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.EnergyCostCountAggregateOutputType>
                    : number, TData, Error>
            ) => UseTRPCQueryResult<
                TData,
                TRPCClientErrorLike<AppRouter>
            >;
        useInfiniteQuery: <T extends Prisma.EnergyCostCountArgs>(
            input?: Omit<Prisma.Subset<T, Prisma.EnergyCostCountArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, 'select' extends keyof T
                ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.EnergyCostCountAggregateOutputType>
                : number, Error>
        ) => UseTRPCInfiniteQueryResult<
            'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.EnergyCostCountAggregateOutputType>
            : number,
            TRPCClientErrorLike<AppRouter>
        >;

    };
}

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

        createMany: procedure.input($Schema.AlertInputSchema.createMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).alert.createMany(input as any))),

        create: procedure.input($Schema.AlertInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).alert.create(input as any))),

        deleteMany: procedure.input($Schema.AlertInputSchema.deleteMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).alert.deleteMany(input as any))),

        delete: procedure.input($Schema.AlertInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).alert.delete(input as any))),

        findFirst: procedure.input($Schema.AlertInputSchema.findFirst.optional()).query(({ ctx, input }) => checkRead(db(ctx).alert.findFirst(input as any))),

        findMany: procedure.input($Schema.AlertInputSchema.findMany.optional()).query(({ ctx, input }) => checkRead(db(ctx).alert.findMany(input as any))),

        findUnique: procedure.input($Schema.AlertInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).alert.findUnique(input as any))),

        updateMany: procedure.input($Schema.AlertInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).alert.updateMany(input as any))),

        update: procedure.input($Schema.AlertInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).alert.update(input as any))),

        count: procedure.input($Schema.AlertInputSchema.count.optional()).query(({ ctx, input }) => checkRead(db(ctx).alert.count(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.AlertCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.AlertCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.AlertCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.AlertCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.AlertCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.AlertCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.AlertGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.AlertGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.AlertCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.AlertCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.AlertGetPayload<T>, Context>) => Promise<Prisma.AlertGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.AlertDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.AlertDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.AlertDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.AlertDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.AlertDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.AlertDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.AlertGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.AlertGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.AlertDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.AlertDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.AlertGetPayload<T>, Context>) => Promise<Prisma.AlertGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.AlertFindFirstArgs, TData = Prisma.AlertGetPayload<T>>(
            input?: Prisma.SelectSubset<T, Prisma.AlertFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.AlertGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.AlertFindFirstArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.AlertFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.AlertGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.AlertGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.AlertFindManyArgs, TData = Array<Prisma.AlertGetPayload<T>>>(
            input?: Prisma.SelectSubset<T, Prisma.AlertFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.AlertGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.AlertFindManyArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.AlertFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.AlertGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.AlertGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.AlertFindUniqueArgs, TData = Prisma.AlertGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.AlertFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.AlertGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.AlertFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.AlertFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.AlertGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.AlertGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.AlertUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.AlertUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.AlertUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.AlertUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.AlertUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.AlertUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.AlertGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.AlertGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.AlertUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.AlertUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.AlertGetPayload<T>, Context>) => Promise<Prisma.AlertGetPayload<T>>
            };

    };
    count: {

        useQuery: <T extends Prisma.AlertCountArgs, TData = 'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.AlertCountAggregateOutputType>
            : number>(
                input?: Prisma.Subset<T, Prisma.AlertCountArgs>,
                opts?: UseTRPCQueryOptions<string, T, 'select' extends keyof T
                    ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.AlertCountAggregateOutputType>
                    : number, TData, Error>
            ) => UseTRPCQueryResult<
                TData,
                TRPCClientErrorLike<AppRouter>
            >;
        useInfiniteQuery: <T extends Prisma.AlertCountArgs>(
            input?: Omit<Prisma.Subset<T, Prisma.AlertCountArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, 'select' extends keyof T
                ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.AlertCountAggregateOutputType>
                : number, Error>
        ) => UseTRPCInfiniteQueryResult<
            'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.AlertCountAggregateOutputType>
            : number,
            TRPCClientErrorLike<AppRouter>
        >;

    };
}

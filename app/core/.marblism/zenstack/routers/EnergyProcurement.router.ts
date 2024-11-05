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

        createMany: procedure.input($Schema.EnergyProcurementInputSchema.createMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).energyProcurement.createMany(input as any))),

        create: procedure.input($Schema.EnergyProcurementInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).energyProcurement.create(input as any))),

        deleteMany: procedure.input($Schema.EnergyProcurementInputSchema.deleteMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).energyProcurement.deleteMany(input as any))),

        delete: procedure.input($Schema.EnergyProcurementInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).energyProcurement.delete(input as any))),

        findFirst: procedure.input($Schema.EnergyProcurementInputSchema.findFirst.optional()).query(({ ctx, input }) => checkRead(db(ctx).energyProcurement.findFirst(input as any))),

        findMany: procedure.input($Schema.EnergyProcurementInputSchema.findMany.optional()).query(({ ctx, input }) => checkRead(db(ctx).energyProcurement.findMany(input as any))),

        findUnique: procedure.input($Schema.EnergyProcurementInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).energyProcurement.findUnique(input as any))),

        updateMany: procedure.input($Schema.EnergyProcurementInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).energyProcurement.updateMany(input as any))),

        update: procedure.input($Schema.EnergyProcurementInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).energyProcurement.update(input as any))),

        count: procedure.input($Schema.EnergyProcurementInputSchema.count.optional()).query(({ ctx, input }) => checkRead(db(ctx).energyProcurement.count(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.EnergyProcurementCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.EnergyProcurementCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.EnergyProcurementCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.EnergyProcurementCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.EnergyProcurementCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.EnergyProcurementCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.EnergyProcurementGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.EnergyProcurementGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.EnergyProcurementCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.EnergyProcurementCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.EnergyProcurementGetPayload<T>, Context>) => Promise<Prisma.EnergyProcurementGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.EnergyProcurementDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.EnergyProcurementDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.EnergyProcurementDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.EnergyProcurementDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.EnergyProcurementDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.EnergyProcurementDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.EnergyProcurementGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.EnergyProcurementGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.EnergyProcurementDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.EnergyProcurementDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.EnergyProcurementGetPayload<T>, Context>) => Promise<Prisma.EnergyProcurementGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.EnergyProcurementFindFirstArgs, TData = Prisma.EnergyProcurementGetPayload<T>>(
            input?: Prisma.SelectSubset<T, Prisma.EnergyProcurementFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.EnergyProcurementGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.EnergyProcurementFindFirstArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.EnergyProcurementFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.EnergyProcurementGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.EnergyProcurementGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.EnergyProcurementFindManyArgs, TData = Array<Prisma.EnergyProcurementGetPayload<T>>>(
            input?: Prisma.SelectSubset<T, Prisma.EnergyProcurementFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.EnergyProcurementGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.EnergyProcurementFindManyArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.EnergyProcurementFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.EnergyProcurementGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.EnergyProcurementGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.EnergyProcurementFindUniqueArgs, TData = Prisma.EnergyProcurementGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.EnergyProcurementFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.EnergyProcurementGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.EnergyProcurementFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.EnergyProcurementFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.EnergyProcurementGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.EnergyProcurementGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.EnergyProcurementUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.EnergyProcurementUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.EnergyProcurementUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.EnergyProcurementUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.EnergyProcurementUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.EnergyProcurementUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.EnergyProcurementGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.EnergyProcurementGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.EnergyProcurementUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.EnergyProcurementUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.EnergyProcurementGetPayload<T>, Context>) => Promise<Prisma.EnergyProcurementGetPayload<T>>
            };

    };
    count: {

        useQuery: <T extends Prisma.EnergyProcurementCountArgs, TData = 'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.EnergyProcurementCountAggregateOutputType>
            : number>(
                input?: Prisma.Subset<T, Prisma.EnergyProcurementCountArgs>,
                opts?: UseTRPCQueryOptions<string, T, 'select' extends keyof T
                    ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.EnergyProcurementCountAggregateOutputType>
                    : number, TData, Error>
            ) => UseTRPCQueryResult<
                TData,
                TRPCClientErrorLike<AppRouter>
            >;
        useInfiniteQuery: <T extends Prisma.EnergyProcurementCountArgs>(
            input?: Omit<Prisma.Subset<T, Prisma.EnergyProcurementCountArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, 'select' extends keyof T
                ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.EnergyProcurementCountAggregateOutputType>
                : number, Error>
        ) => UseTRPCInfiniteQueryResult<
            'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.EnergyProcurementCountAggregateOutputType>
            : number,
            TRPCClientErrorLike<AppRouter>
        >;

    };
}

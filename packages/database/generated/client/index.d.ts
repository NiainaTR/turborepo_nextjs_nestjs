
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model nofitications
 * 
 */
export type nofitications = $Result.DefaultSelection<Prisma.$nofiticationsPayload>
/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>
/**
 * Model sessions
 * 
 */
export type sessions = $Result.DefaultSelection<Prisma.$sessionsPayload>
/**
 * Model post_categories
 * 
 */
export type post_categories = $Result.DefaultSelection<Prisma.$post_categoriesPayload>
/**
 * Model posts
 * 
 */
export type posts = $Result.DefaultSelection<Prisma.$postsPayload>
/**
 * Model users_saved_posts
 * 
 */
export type users_saved_posts = $Result.DefaultSelection<Prisma.$users_saved_postsPayload>
/**
 * Model comments
 * 
 */
export type comments = $Result.DefaultSelection<Prisma.$commentsPayload>
/**
 * Model medias
 * 
 */
export type medias = $Result.DefaultSelection<Prisma.$mediasPayload>
/**
 * Model attachments
 * 
 */
export type attachments = $Result.DefaultSelection<Prisma.$attachmentsPayload>
/**
 * Model conversations
 * 
 */
export type conversations = $Result.DefaultSelection<Prisma.$conversationsPayload>
/**
 * Model messages
 * 
 */
export type messages = $Result.DefaultSelection<Prisma.$messagesPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const gender_enum: {
  male: 'male',
  female: 'female'
};

export type gender_enum = (typeof gender_enum)[keyof typeof gender_enum]


export const conversation_type_enum: {
  group: 'group',
  one_to_one: 'one_to_one',
  broadcast: 'broadcast'
};

export type conversation_type_enum = (typeof conversation_type_enum)[keyof typeof conversation_type_enum]


export const file_type_enum: {
  image: 'image',
  video: 'video',
  audio: 'audio'
};

export type file_type_enum = (typeof file_type_enum)[keyof typeof file_type_enum]


export const message_status_enum: {
  sent: 'sent',
  delivered: 'delivered',
  read: 'read',
  failed: 'failed'
};

export type message_status_enum = (typeof message_status_enum)[keyof typeof message_status_enum]


export const user_action_enum: {
  log_in: 'log_in',
  log_out: 'log_out'
};

export type user_action_enum = (typeof user_action_enum)[keyof typeof user_action_enum]


export const account_type: {
  pro: 'pro',
  standard: 'standard'
};

export type account_type = (typeof account_type)[keyof typeof account_type]


export const user_state_enum: {
  online: 'online',
  offline: 'offline'
};

export type user_state_enum = (typeof user_state_enum)[keyof typeof user_state_enum]

}

export type gender_enum = $Enums.gender_enum

export const gender_enum: typeof $Enums.gender_enum

export type conversation_type_enum = $Enums.conversation_type_enum

export const conversation_type_enum: typeof $Enums.conversation_type_enum

export type file_type_enum = $Enums.file_type_enum

export const file_type_enum: typeof $Enums.file_type_enum

export type message_status_enum = $Enums.message_status_enum

export const message_status_enum: typeof $Enums.message_status_enum

export type user_action_enum = $Enums.user_action_enum

export const user_action_enum: typeof $Enums.user_action_enum

export type account_type = $Enums.account_type

export const account_type: typeof $Enums.account_type

export type user_state_enum = $Enums.user_state_enum

export const user_state_enum: typeof $Enums.user_state_enum

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Nofitications
 * const nofitications = await prisma.nofitications.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Nofitications
   * const nofitications = await prisma.nofitications.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.nofitications`: Exposes CRUD operations for the **nofitications** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Nofitications
    * const nofitications = await prisma.nofitications.findMany()
    * ```
    */
  get nofitications(): Prisma.nofiticationsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sessions`: Exposes CRUD operations for the **sessions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.sessions.findMany()
    * ```
    */
  get sessions(): Prisma.sessionsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.post_categories`: Exposes CRUD operations for the **post_categories** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Post_categories
    * const post_categories = await prisma.post_categories.findMany()
    * ```
    */
  get post_categories(): Prisma.post_categoriesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.posts`: Exposes CRUD operations for the **posts** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Posts
    * const posts = await prisma.posts.findMany()
    * ```
    */
  get posts(): Prisma.postsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users_saved_posts`: Exposes CRUD operations for the **users_saved_posts** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users_saved_posts
    * const users_saved_posts = await prisma.users_saved_posts.findMany()
    * ```
    */
  get users_saved_posts(): Prisma.users_saved_postsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.comments`: Exposes CRUD operations for the **comments** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comments
    * const comments = await prisma.comments.findMany()
    * ```
    */
  get comments(): Prisma.commentsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.medias`: Exposes CRUD operations for the **medias** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Medias
    * const medias = await prisma.medias.findMany()
    * ```
    */
  get medias(): Prisma.mediasDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.attachments`: Exposes CRUD operations for the **attachments** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Attachments
    * const attachments = await prisma.attachments.findMany()
    * ```
    */
  get attachments(): Prisma.attachmentsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.conversations`: Exposes CRUD operations for the **conversations** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Conversations
    * const conversations = await prisma.conversations.findMany()
    * ```
    */
  get conversations(): Prisma.conversationsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.messages`: Exposes CRUD operations for the **messages** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Messages
    * const messages = await prisma.messages.findMany()
    * ```
    */
  get messages(): Prisma.messagesDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    nofitications: 'nofitications',
    users: 'users',
    sessions: 'sessions',
    post_categories: 'post_categories',
    posts: 'posts',
    users_saved_posts: 'users_saved_posts',
    comments: 'comments',
    medias: 'medias',
    attachments: 'attachments',
    conversations: 'conversations',
    messages: 'messages'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "nofitications" | "users" | "sessions" | "post_categories" | "posts" | "users_saved_posts" | "comments" | "medias" | "attachments" | "conversations" | "messages"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      nofitications: {
        payload: Prisma.$nofiticationsPayload<ExtArgs>
        fields: Prisma.nofiticationsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.nofiticationsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$nofiticationsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.nofiticationsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$nofiticationsPayload>
          }
          findFirst: {
            args: Prisma.nofiticationsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$nofiticationsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.nofiticationsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$nofiticationsPayload>
          }
          findMany: {
            args: Prisma.nofiticationsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$nofiticationsPayload>[]
          }
          create: {
            args: Prisma.nofiticationsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$nofiticationsPayload>
          }
          createMany: {
            args: Prisma.nofiticationsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.nofiticationsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$nofiticationsPayload>[]
          }
          delete: {
            args: Prisma.nofiticationsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$nofiticationsPayload>
          }
          update: {
            args: Prisma.nofiticationsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$nofiticationsPayload>
          }
          deleteMany: {
            args: Prisma.nofiticationsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.nofiticationsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.nofiticationsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$nofiticationsPayload>[]
          }
          upsert: {
            args: Prisma.nofiticationsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$nofiticationsPayload>
          }
          aggregate: {
            args: Prisma.NofiticationsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNofitications>
          }
          groupBy: {
            args: Prisma.nofiticationsGroupByArgs<ExtArgs>
            result: $Utils.Optional<NofiticationsGroupByOutputType>[]
          }
          count: {
            args: Prisma.nofiticationsCountArgs<ExtArgs>
            result: $Utils.Optional<NofiticationsCountAggregateOutputType> | number
          }
        }
      }
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.usersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      sessions: {
        payload: Prisma.$sessionsPayload<ExtArgs>
        fields: Prisma.sessionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.sessionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.sessionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionsPayload>
          }
          findFirst: {
            args: Prisma.sessionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.sessionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionsPayload>
          }
          findMany: {
            args: Prisma.sessionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionsPayload>[]
          }
          create: {
            args: Prisma.sessionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionsPayload>
          }
          createMany: {
            args: Prisma.sessionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.sessionsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionsPayload>[]
          }
          delete: {
            args: Prisma.sessionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionsPayload>
          }
          update: {
            args: Prisma.sessionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionsPayload>
          }
          deleteMany: {
            args: Prisma.sessionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.sessionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.sessionsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionsPayload>[]
          }
          upsert: {
            args: Prisma.sessionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionsPayload>
          }
          aggregate: {
            args: Prisma.SessionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSessions>
          }
          groupBy: {
            args: Prisma.sessionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.sessionsCountArgs<ExtArgs>
            result: $Utils.Optional<SessionsCountAggregateOutputType> | number
          }
        }
      }
      post_categories: {
        payload: Prisma.$post_categoriesPayload<ExtArgs>
        fields: Prisma.post_categoriesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.post_categoriesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$post_categoriesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.post_categoriesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$post_categoriesPayload>
          }
          findFirst: {
            args: Prisma.post_categoriesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$post_categoriesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.post_categoriesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$post_categoriesPayload>
          }
          findMany: {
            args: Prisma.post_categoriesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$post_categoriesPayload>[]
          }
          create: {
            args: Prisma.post_categoriesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$post_categoriesPayload>
          }
          createMany: {
            args: Prisma.post_categoriesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.post_categoriesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$post_categoriesPayload>[]
          }
          delete: {
            args: Prisma.post_categoriesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$post_categoriesPayload>
          }
          update: {
            args: Prisma.post_categoriesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$post_categoriesPayload>
          }
          deleteMany: {
            args: Prisma.post_categoriesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.post_categoriesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.post_categoriesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$post_categoriesPayload>[]
          }
          upsert: {
            args: Prisma.post_categoriesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$post_categoriesPayload>
          }
          aggregate: {
            args: Prisma.Post_categoriesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePost_categories>
          }
          groupBy: {
            args: Prisma.post_categoriesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Post_categoriesGroupByOutputType>[]
          }
          count: {
            args: Prisma.post_categoriesCountArgs<ExtArgs>
            result: $Utils.Optional<Post_categoriesCountAggregateOutputType> | number
          }
        }
      }
      posts: {
        payload: Prisma.$postsPayload<ExtArgs>
        fields: Prisma.postsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.postsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$postsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.postsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$postsPayload>
          }
          findFirst: {
            args: Prisma.postsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$postsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.postsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$postsPayload>
          }
          findMany: {
            args: Prisma.postsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$postsPayload>[]
          }
          create: {
            args: Prisma.postsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$postsPayload>
          }
          createMany: {
            args: Prisma.postsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.postsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$postsPayload>[]
          }
          delete: {
            args: Prisma.postsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$postsPayload>
          }
          update: {
            args: Prisma.postsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$postsPayload>
          }
          deleteMany: {
            args: Prisma.postsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.postsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.postsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$postsPayload>[]
          }
          upsert: {
            args: Prisma.postsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$postsPayload>
          }
          aggregate: {
            args: Prisma.PostsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePosts>
          }
          groupBy: {
            args: Prisma.postsGroupByArgs<ExtArgs>
            result: $Utils.Optional<PostsGroupByOutputType>[]
          }
          count: {
            args: Prisma.postsCountArgs<ExtArgs>
            result: $Utils.Optional<PostsCountAggregateOutputType> | number
          }
        }
      }
      users_saved_posts: {
        payload: Prisma.$users_saved_postsPayload<ExtArgs>
        fields: Prisma.users_saved_postsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.users_saved_postsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$users_saved_postsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.users_saved_postsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$users_saved_postsPayload>
          }
          findFirst: {
            args: Prisma.users_saved_postsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$users_saved_postsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.users_saved_postsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$users_saved_postsPayload>
          }
          findMany: {
            args: Prisma.users_saved_postsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$users_saved_postsPayload>[]
          }
          create: {
            args: Prisma.users_saved_postsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$users_saved_postsPayload>
          }
          createMany: {
            args: Prisma.users_saved_postsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.users_saved_postsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$users_saved_postsPayload>[]
          }
          delete: {
            args: Prisma.users_saved_postsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$users_saved_postsPayload>
          }
          update: {
            args: Prisma.users_saved_postsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$users_saved_postsPayload>
          }
          deleteMany: {
            args: Prisma.users_saved_postsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.users_saved_postsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.users_saved_postsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$users_saved_postsPayload>[]
          }
          upsert: {
            args: Prisma.users_saved_postsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$users_saved_postsPayload>
          }
          aggregate: {
            args: Prisma.Users_saved_postsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers_saved_posts>
          }
          groupBy: {
            args: Prisma.users_saved_postsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Users_saved_postsGroupByOutputType>[]
          }
          count: {
            args: Prisma.users_saved_postsCountArgs<ExtArgs>
            result: $Utils.Optional<Users_saved_postsCountAggregateOutputType> | number
          }
        }
      }
      comments: {
        payload: Prisma.$commentsPayload<ExtArgs>
        fields: Prisma.commentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.commentsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.commentsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentsPayload>
          }
          findFirst: {
            args: Prisma.commentsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.commentsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentsPayload>
          }
          findMany: {
            args: Prisma.commentsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentsPayload>[]
          }
          create: {
            args: Prisma.commentsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentsPayload>
          }
          createMany: {
            args: Prisma.commentsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.commentsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentsPayload>[]
          }
          delete: {
            args: Prisma.commentsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentsPayload>
          }
          update: {
            args: Prisma.commentsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentsPayload>
          }
          deleteMany: {
            args: Prisma.commentsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.commentsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.commentsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentsPayload>[]
          }
          upsert: {
            args: Prisma.commentsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentsPayload>
          }
          aggregate: {
            args: Prisma.CommentsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComments>
          }
          groupBy: {
            args: Prisma.commentsGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommentsGroupByOutputType>[]
          }
          count: {
            args: Prisma.commentsCountArgs<ExtArgs>
            result: $Utils.Optional<CommentsCountAggregateOutputType> | number
          }
        }
      }
      medias: {
        payload: Prisma.$mediasPayload<ExtArgs>
        fields: Prisma.mediasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.mediasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mediasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.mediasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mediasPayload>
          }
          findFirst: {
            args: Prisma.mediasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mediasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.mediasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mediasPayload>
          }
          findMany: {
            args: Prisma.mediasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mediasPayload>[]
          }
          create: {
            args: Prisma.mediasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mediasPayload>
          }
          createMany: {
            args: Prisma.mediasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.mediasCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mediasPayload>[]
          }
          delete: {
            args: Prisma.mediasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mediasPayload>
          }
          update: {
            args: Prisma.mediasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mediasPayload>
          }
          deleteMany: {
            args: Prisma.mediasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.mediasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.mediasUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mediasPayload>[]
          }
          upsert: {
            args: Prisma.mediasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mediasPayload>
          }
          aggregate: {
            args: Prisma.MediasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMedias>
          }
          groupBy: {
            args: Prisma.mediasGroupByArgs<ExtArgs>
            result: $Utils.Optional<MediasGroupByOutputType>[]
          }
          count: {
            args: Prisma.mediasCountArgs<ExtArgs>
            result: $Utils.Optional<MediasCountAggregateOutputType> | number
          }
        }
      }
      attachments: {
        payload: Prisma.$attachmentsPayload<ExtArgs>
        fields: Prisma.attachmentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.attachmentsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$attachmentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.attachmentsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$attachmentsPayload>
          }
          findFirst: {
            args: Prisma.attachmentsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$attachmentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.attachmentsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$attachmentsPayload>
          }
          findMany: {
            args: Prisma.attachmentsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$attachmentsPayload>[]
          }
          create: {
            args: Prisma.attachmentsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$attachmentsPayload>
          }
          createMany: {
            args: Prisma.attachmentsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.attachmentsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$attachmentsPayload>[]
          }
          delete: {
            args: Prisma.attachmentsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$attachmentsPayload>
          }
          update: {
            args: Prisma.attachmentsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$attachmentsPayload>
          }
          deleteMany: {
            args: Prisma.attachmentsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.attachmentsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.attachmentsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$attachmentsPayload>[]
          }
          upsert: {
            args: Prisma.attachmentsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$attachmentsPayload>
          }
          aggregate: {
            args: Prisma.AttachmentsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAttachments>
          }
          groupBy: {
            args: Prisma.attachmentsGroupByArgs<ExtArgs>
            result: $Utils.Optional<AttachmentsGroupByOutputType>[]
          }
          count: {
            args: Prisma.attachmentsCountArgs<ExtArgs>
            result: $Utils.Optional<AttachmentsCountAggregateOutputType> | number
          }
        }
      }
      conversations: {
        payload: Prisma.$conversationsPayload<ExtArgs>
        fields: Prisma.conversationsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.conversationsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$conversationsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.conversationsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$conversationsPayload>
          }
          findFirst: {
            args: Prisma.conversationsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$conversationsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.conversationsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$conversationsPayload>
          }
          findMany: {
            args: Prisma.conversationsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$conversationsPayload>[]
          }
          create: {
            args: Prisma.conversationsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$conversationsPayload>
          }
          createMany: {
            args: Prisma.conversationsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.conversationsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$conversationsPayload>[]
          }
          delete: {
            args: Prisma.conversationsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$conversationsPayload>
          }
          update: {
            args: Prisma.conversationsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$conversationsPayload>
          }
          deleteMany: {
            args: Prisma.conversationsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.conversationsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.conversationsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$conversationsPayload>[]
          }
          upsert: {
            args: Prisma.conversationsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$conversationsPayload>
          }
          aggregate: {
            args: Prisma.ConversationsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConversations>
          }
          groupBy: {
            args: Prisma.conversationsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ConversationsGroupByOutputType>[]
          }
          count: {
            args: Prisma.conversationsCountArgs<ExtArgs>
            result: $Utils.Optional<ConversationsCountAggregateOutputType> | number
          }
        }
      }
      messages: {
        payload: Prisma.$messagesPayload<ExtArgs>
        fields: Prisma.messagesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.messagesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.messagesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesPayload>
          }
          findFirst: {
            args: Prisma.messagesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.messagesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesPayload>
          }
          findMany: {
            args: Prisma.messagesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesPayload>[]
          }
          create: {
            args: Prisma.messagesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesPayload>
          }
          createMany: {
            args: Prisma.messagesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.messagesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesPayload>[]
          }
          delete: {
            args: Prisma.messagesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesPayload>
          }
          update: {
            args: Prisma.messagesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesPayload>
          }
          deleteMany: {
            args: Prisma.messagesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.messagesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.messagesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesPayload>[]
          }
          upsert: {
            args: Prisma.messagesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesPayload>
          }
          aggregate: {
            args: Prisma.MessagesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMessages>
          }
          groupBy: {
            args: Prisma.messagesGroupByArgs<ExtArgs>
            result: $Utils.Optional<MessagesGroupByOutputType>[]
          }
          count: {
            args: Prisma.messagesCountArgs<ExtArgs>
            result: $Utils.Optional<MessagesCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    nofitications?: nofiticationsOmit
    users?: usersOmit
    sessions?: sessionsOmit
    post_categories?: post_categoriesOmit
    posts?: postsOmit
    users_saved_posts?: users_saved_postsOmit
    comments?: commentsOmit
    medias?: mediasOmit
    attachments?: attachmentsOmit
    conversations?: conversationsOmit
    messages?: messagesOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type NofiticationsCountOutputType
   */

  export type NofiticationsCountOutputType = {
    users: number
  }

  export type NofiticationsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | NofiticationsCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * NofiticationsCountOutputType without action
   */
  export type NofiticationsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NofiticationsCountOutputType
     */
    select?: NofiticationsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * NofiticationsCountOutputType without action
   */
  export type NofiticationsCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
  }


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    preferences: number
    followers: number
    followings: number
    user_posts: number
    posts_liked: number
    comments_liked: number
    messages: number
    conversations: number
    user_sessions: number
    nofitications: number
    users_saved_posts: number
    comments: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    preferences?: boolean | UsersCountOutputTypeCountPreferencesArgs
    followers?: boolean | UsersCountOutputTypeCountFollowersArgs
    followings?: boolean | UsersCountOutputTypeCountFollowingsArgs
    user_posts?: boolean | UsersCountOutputTypeCountUser_postsArgs
    posts_liked?: boolean | UsersCountOutputTypeCountPosts_likedArgs
    comments_liked?: boolean | UsersCountOutputTypeCountComments_likedArgs
    messages?: boolean | UsersCountOutputTypeCountMessagesArgs
    conversations?: boolean | UsersCountOutputTypeCountConversationsArgs
    user_sessions?: boolean | UsersCountOutputTypeCountUser_sessionsArgs
    nofitications?: boolean | UsersCountOutputTypeCountNofiticationsArgs
    users_saved_posts?: boolean | UsersCountOutputTypeCountUsers_saved_postsArgs
    comments?: boolean | UsersCountOutputTypeCountCommentsArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountPreferencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: post_categoriesWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountFollowersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountFollowingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountUser_postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: postsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountPosts_likedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: postsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountComments_likedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: commentsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: messagesWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountConversationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: conversationsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountUser_sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sessionsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountNofiticationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: nofiticationsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountUsers_saved_postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: users_saved_postsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: commentsWhereInput
  }


  /**
   * Count Type Post_categoriesCountOutputType
   */

  export type Post_categoriesCountOutputType = {
    sub_categories: number
    posts: number
    interested_users: number
  }

  export type Post_categoriesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sub_categories?: boolean | Post_categoriesCountOutputTypeCountSub_categoriesArgs
    posts?: boolean | Post_categoriesCountOutputTypeCountPostsArgs
    interested_users?: boolean | Post_categoriesCountOutputTypeCountInterested_usersArgs
  }

  // Custom InputTypes
  /**
   * Post_categoriesCountOutputType without action
   */
  export type Post_categoriesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post_categoriesCountOutputType
     */
    select?: Post_categoriesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Post_categoriesCountOutputType without action
   */
  export type Post_categoriesCountOutputTypeCountSub_categoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: post_categoriesWhereInput
  }

  /**
   * Post_categoriesCountOutputType without action
   */
  export type Post_categoriesCountOutputTypeCountPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: postsWhereInput
  }

  /**
   * Post_categoriesCountOutputType without action
   */
  export type Post_categoriesCountOutputTypeCountInterested_usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
  }


  /**
   * Count Type PostsCountOutputType
   */

  export type PostsCountOutputType = {
    post_likers: number
    comments: number
    medias: number
    users_saved_posts: number
  }

  export type PostsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post_likers?: boolean | PostsCountOutputTypeCountPost_likersArgs
    comments?: boolean | PostsCountOutputTypeCountCommentsArgs
    medias?: boolean | PostsCountOutputTypeCountMediasArgs
    users_saved_posts?: boolean | PostsCountOutputTypeCountUsers_saved_postsArgs
  }

  // Custom InputTypes
  /**
   * PostsCountOutputType without action
   */
  export type PostsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostsCountOutputType
     */
    select?: PostsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PostsCountOutputType without action
   */
  export type PostsCountOutputTypeCountPost_likersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
  }

  /**
   * PostsCountOutputType without action
   */
  export type PostsCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: commentsWhereInput
  }

  /**
   * PostsCountOutputType without action
   */
  export type PostsCountOutputTypeCountMediasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: mediasWhereInput
  }

  /**
   * PostsCountOutputType without action
   */
  export type PostsCountOutputTypeCountUsers_saved_postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: users_saved_postsWhereInput
  }


  /**
   * Count Type CommentsCountOutputType
   */

  export type CommentsCountOutputType = {
    comment_likers: number
    sub_comments: number
  }

  export type CommentsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comment_likers?: boolean | CommentsCountOutputTypeCountComment_likersArgs
    sub_comments?: boolean | CommentsCountOutputTypeCountSub_commentsArgs
  }

  // Custom InputTypes
  /**
   * CommentsCountOutputType without action
   */
  export type CommentsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentsCountOutputType
     */
    select?: CommentsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CommentsCountOutputType without action
   */
  export type CommentsCountOutputTypeCountComment_likersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
  }

  /**
   * CommentsCountOutputType without action
   */
  export type CommentsCountOutputTypeCountSub_commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: commentsWhereInput
  }


  /**
   * Count Type ConversationsCountOutputType
   */

  export type ConversationsCountOutputType = {
    messages: number
    users: number
  }

  export type ConversationsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    messages?: boolean | ConversationsCountOutputTypeCountMessagesArgs
    users?: boolean | ConversationsCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * ConversationsCountOutputType without action
   */
  export type ConversationsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversationsCountOutputType
     */
    select?: ConversationsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ConversationsCountOutputType without action
   */
  export type ConversationsCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: messagesWhereInput
  }

  /**
   * ConversationsCountOutputType without action
   */
  export type ConversationsCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
  }


  /**
   * Count Type MessagesCountOutputType
   */

  export type MessagesCountOutputType = {
    attachments: number
    users: number
  }

  export type MessagesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attachments?: boolean | MessagesCountOutputTypeCountAttachmentsArgs
    users?: boolean | MessagesCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * MessagesCountOutputType without action
   */
  export type MessagesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessagesCountOutputType
     */
    select?: MessagesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MessagesCountOutputType without action
   */
  export type MessagesCountOutputTypeCountAttachmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: attachmentsWhereInput
  }

  /**
   * MessagesCountOutputType without action
   */
  export type MessagesCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
  }


  /**
   * Models
   */

  /**
   * Model nofitications
   */

  export type AggregateNofitications = {
    _count: NofiticationsCountAggregateOutputType | null
    _min: NofiticationsMinAggregateOutputType | null
    _max: NofiticationsMaxAggregateOutputType | null
  }

  export type NofiticationsMinAggregateOutputType = {
    notification_id: string | null
    sender_name: string | null
    receiver_name: string | null
    content: string | null
    date: Date | null
  }

  export type NofiticationsMaxAggregateOutputType = {
    notification_id: string | null
    sender_name: string | null
    receiver_name: string | null
    content: string | null
    date: Date | null
  }

  export type NofiticationsCountAggregateOutputType = {
    notification_id: number
    sender_name: number
    receiver_name: number
    content: number
    date: number
    _all: number
  }


  export type NofiticationsMinAggregateInputType = {
    notification_id?: true
    sender_name?: true
    receiver_name?: true
    content?: true
    date?: true
  }

  export type NofiticationsMaxAggregateInputType = {
    notification_id?: true
    sender_name?: true
    receiver_name?: true
    content?: true
    date?: true
  }

  export type NofiticationsCountAggregateInputType = {
    notification_id?: true
    sender_name?: true
    receiver_name?: true
    content?: true
    date?: true
    _all?: true
  }

  export type NofiticationsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which nofitications to aggregate.
     */
    where?: nofiticationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of nofitications to fetch.
     */
    orderBy?: nofiticationsOrderByWithRelationInput | nofiticationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: nofiticationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` nofitications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` nofitications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned nofitications
    **/
    _count?: true | NofiticationsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NofiticationsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NofiticationsMaxAggregateInputType
  }

  export type GetNofiticationsAggregateType<T extends NofiticationsAggregateArgs> = {
        [P in keyof T & keyof AggregateNofitications]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNofitications[P]>
      : GetScalarType<T[P], AggregateNofitications[P]>
  }




  export type nofiticationsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: nofiticationsWhereInput
    orderBy?: nofiticationsOrderByWithAggregationInput | nofiticationsOrderByWithAggregationInput[]
    by: NofiticationsScalarFieldEnum[] | NofiticationsScalarFieldEnum
    having?: nofiticationsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NofiticationsCountAggregateInputType | true
    _min?: NofiticationsMinAggregateInputType
    _max?: NofiticationsMaxAggregateInputType
  }

  export type NofiticationsGroupByOutputType = {
    notification_id: string
    sender_name: string
    receiver_name: string
    content: string
    date: Date
    _count: NofiticationsCountAggregateOutputType | null
    _min: NofiticationsMinAggregateOutputType | null
    _max: NofiticationsMaxAggregateOutputType | null
  }

  type GetNofiticationsGroupByPayload<T extends nofiticationsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NofiticationsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NofiticationsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NofiticationsGroupByOutputType[P]>
            : GetScalarType<T[P], NofiticationsGroupByOutputType[P]>
        }
      >
    >


  export type nofiticationsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    notification_id?: boolean
    sender_name?: boolean
    receiver_name?: boolean
    content?: boolean
    date?: boolean
    users?: boolean | nofitications$usersArgs<ExtArgs>
    _count?: boolean | NofiticationsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["nofitications"]>

  export type nofiticationsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    notification_id?: boolean
    sender_name?: boolean
    receiver_name?: boolean
    content?: boolean
    date?: boolean
  }, ExtArgs["result"]["nofitications"]>

  export type nofiticationsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    notification_id?: boolean
    sender_name?: boolean
    receiver_name?: boolean
    content?: boolean
    date?: boolean
  }, ExtArgs["result"]["nofitications"]>

  export type nofiticationsSelectScalar = {
    notification_id?: boolean
    sender_name?: boolean
    receiver_name?: boolean
    content?: boolean
    date?: boolean
  }

  export type nofiticationsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"notification_id" | "sender_name" | "receiver_name" | "content" | "date", ExtArgs["result"]["nofitications"]>
  export type nofiticationsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | nofitications$usersArgs<ExtArgs>
    _count?: boolean | NofiticationsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type nofiticationsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type nofiticationsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $nofiticationsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "nofitications"
    objects: {
      users: Prisma.$usersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      notification_id: string
      sender_name: string
      receiver_name: string
      content: string
      date: Date
    }, ExtArgs["result"]["nofitications"]>
    composites: {}
  }

  type nofiticationsGetPayload<S extends boolean | null | undefined | nofiticationsDefaultArgs> = $Result.GetResult<Prisma.$nofiticationsPayload, S>

  type nofiticationsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<nofiticationsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NofiticationsCountAggregateInputType | true
    }

  export interface nofiticationsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['nofitications'], meta: { name: 'nofitications' } }
    /**
     * Find zero or one Nofitications that matches the filter.
     * @param {nofiticationsFindUniqueArgs} args - Arguments to find a Nofitications
     * @example
     * // Get one Nofitications
     * const nofitications = await prisma.nofitications.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends nofiticationsFindUniqueArgs>(args: SelectSubset<T, nofiticationsFindUniqueArgs<ExtArgs>>): Prisma__nofiticationsClient<$Result.GetResult<Prisma.$nofiticationsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Nofitications that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {nofiticationsFindUniqueOrThrowArgs} args - Arguments to find a Nofitications
     * @example
     * // Get one Nofitications
     * const nofitications = await prisma.nofitications.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends nofiticationsFindUniqueOrThrowArgs>(args: SelectSubset<T, nofiticationsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__nofiticationsClient<$Result.GetResult<Prisma.$nofiticationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Nofitications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {nofiticationsFindFirstArgs} args - Arguments to find a Nofitications
     * @example
     * // Get one Nofitications
     * const nofitications = await prisma.nofitications.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends nofiticationsFindFirstArgs>(args?: SelectSubset<T, nofiticationsFindFirstArgs<ExtArgs>>): Prisma__nofiticationsClient<$Result.GetResult<Prisma.$nofiticationsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Nofitications that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {nofiticationsFindFirstOrThrowArgs} args - Arguments to find a Nofitications
     * @example
     * // Get one Nofitications
     * const nofitications = await prisma.nofitications.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends nofiticationsFindFirstOrThrowArgs>(args?: SelectSubset<T, nofiticationsFindFirstOrThrowArgs<ExtArgs>>): Prisma__nofiticationsClient<$Result.GetResult<Prisma.$nofiticationsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Nofitications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {nofiticationsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Nofitications
     * const nofitications = await prisma.nofitications.findMany()
     * 
     * // Get first 10 Nofitications
     * const nofitications = await prisma.nofitications.findMany({ take: 10 })
     * 
     * // Only select the `notification_id`
     * const nofiticationsWithNotification_idOnly = await prisma.nofitications.findMany({ select: { notification_id: true } })
     * 
     */
    findMany<T extends nofiticationsFindManyArgs>(args?: SelectSubset<T, nofiticationsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$nofiticationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Nofitications.
     * @param {nofiticationsCreateArgs} args - Arguments to create a Nofitications.
     * @example
     * // Create one Nofitications
     * const Nofitications = await prisma.nofitications.create({
     *   data: {
     *     // ... data to create a Nofitications
     *   }
     * })
     * 
     */
    create<T extends nofiticationsCreateArgs>(args: SelectSubset<T, nofiticationsCreateArgs<ExtArgs>>): Prisma__nofiticationsClient<$Result.GetResult<Prisma.$nofiticationsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Nofitications.
     * @param {nofiticationsCreateManyArgs} args - Arguments to create many Nofitications.
     * @example
     * // Create many Nofitications
     * const nofitications = await prisma.nofitications.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends nofiticationsCreateManyArgs>(args?: SelectSubset<T, nofiticationsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Nofitications and returns the data saved in the database.
     * @param {nofiticationsCreateManyAndReturnArgs} args - Arguments to create many Nofitications.
     * @example
     * // Create many Nofitications
     * const nofitications = await prisma.nofitications.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Nofitications and only return the `notification_id`
     * const nofiticationsWithNotification_idOnly = await prisma.nofitications.createManyAndReturn({
     *   select: { notification_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends nofiticationsCreateManyAndReturnArgs>(args?: SelectSubset<T, nofiticationsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$nofiticationsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Nofitications.
     * @param {nofiticationsDeleteArgs} args - Arguments to delete one Nofitications.
     * @example
     * // Delete one Nofitications
     * const Nofitications = await prisma.nofitications.delete({
     *   where: {
     *     // ... filter to delete one Nofitications
     *   }
     * })
     * 
     */
    delete<T extends nofiticationsDeleteArgs>(args: SelectSubset<T, nofiticationsDeleteArgs<ExtArgs>>): Prisma__nofiticationsClient<$Result.GetResult<Prisma.$nofiticationsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Nofitications.
     * @param {nofiticationsUpdateArgs} args - Arguments to update one Nofitications.
     * @example
     * // Update one Nofitications
     * const nofitications = await prisma.nofitications.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends nofiticationsUpdateArgs>(args: SelectSubset<T, nofiticationsUpdateArgs<ExtArgs>>): Prisma__nofiticationsClient<$Result.GetResult<Prisma.$nofiticationsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Nofitications.
     * @param {nofiticationsDeleteManyArgs} args - Arguments to filter Nofitications to delete.
     * @example
     * // Delete a few Nofitications
     * const { count } = await prisma.nofitications.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends nofiticationsDeleteManyArgs>(args?: SelectSubset<T, nofiticationsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Nofitications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {nofiticationsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Nofitications
     * const nofitications = await prisma.nofitications.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends nofiticationsUpdateManyArgs>(args: SelectSubset<T, nofiticationsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Nofitications and returns the data updated in the database.
     * @param {nofiticationsUpdateManyAndReturnArgs} args - Arguments to update many Nofitications.
     * @example
     * // Update many Nofitications
     * const nofitications = await prisma.nofitications.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Nofitications and only return the `notification_id`
     * const nofiticationsWithNotification_idOnly = await prisma.nofitications.updateManyAndReturn({
     *   select: { notification_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends nofiticationsUpdateManyAndReturnArgs>(args: SelectSubset<T, nofiticationsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$nofiticationsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Nofitications.
     * @param {nofiticationsUpsertArgs} args - Arguments to update or create a Nofitications.
     * @example
     * // Update or create a Nofitications
     * const nofitications = await prisma.nofitications.upsert({
     *   create: {
     *     // ... data to create a Nofitications
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Nofitications we want to update
     *   }
     * })
     */
    upsert<T extends nofiticationsUpsertArgs>(args: SelectSubset<T, nofiticationsUpsertArgs<ExtArgs>>): Prisma__nofiticationsClient<$Result.GetResult<Prisma.$nofiticationsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Nofitications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {nofiticationsCountArgs} args - Arguments to filter Nofitications to count.
     * @example
     * // Count the number of Nofitications
     * const count = await prisma.nofitications.count({
     *   where: {
     *     // ... the filter for the Nofitications we want to count
     *   }
     * })
    **/
    count<T extends nofiticationsCountArgs>(
      args?: Subset<T, nofiticationsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NofiticationsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Nofitications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NofiticationsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NofiticationsAggregateArgs>(args: Subset<T, NofiticationsAggregateArgs>): Prisma.PrismaPromise<GetNofiticationsAggregateType<T>>

    /**
     * Group by Nofitications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {nofiticationsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends nofiticationsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: nofiticationsGroupByArgs['orderBy'] }
        : { orderBy?: nofiticationsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, nofiticationsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNofiticationsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the nofitications model
   */
  readonly fields: nofiticationsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for nofitications.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__nofiticationsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends nofitications$usersArgs<ExtArgs> = {}>(args?: Subset<T, nofitications$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the nofitications model
   */
  interface nofiticationsFieldRefs {
    readonly notification_id: FieldRef<"nofitications", 'String'>
    readonly sender_name: FieldRef<"nofitications", 'String'>
    readonly receiver_name: FieldRef<"nofitications", 'String'>
    readonly content: FieldRef<"nofitications", 'String'>
    readonly date: FieldRef<"nofitications", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * nofitications findUnique
   */
  export type nofiticationsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nofitications
     */
    select?: nofiticationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the nofitications
     */
    omit?: nofiticationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: nofiticationsInclude<ExtArgs> | null
    /**
     * Filter, which nofitications to fetch.
     */
    where: nofiticationsWhereUniqueInput
  }

  /**
   * nofitications findUniqueOrThrow
   */
  export type nofiticationsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nofitications
     */
    select?: nofiticationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the nofitications
     */
    omit?: nofiticationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: nofiticationsInclude<ExtArgs> | null
    /**
     * Filter, which nofitications to fetch.
     */
    where: nofiticationsWhereUniqueInput
  }

  /**
   * nofitications findFirst
   */
  export type nofiticationsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nofitications
     */
    select?: nofiticationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the nofitications
     */
    omit?: nofiticationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: nofiticationsInclude<ExtArgs> | null
    /**
     * Filter, which nofitications to fetch.
     */
    where?: nofiticationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of nofitications to fetch.
     */
    orderBy?: nofiticationsOrderByWithRelationInput | nofiticationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for nofitications.
     */
    cursor?: nofiticationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` nofitications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` nofitications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of nofitications.
     */
    distinct?: NofiticationsScalarFieldEnum | NofiticationsScalarFieldEnum[]
  }

  /**
   * nofitications findFirstOrThrow
   */
  export type nofiticationsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nofitications
     */
    select?: nofiticationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the nofitications
     */
    omit?: nofiticationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: nofiticationsInclude<ExtArgs> | null
    /**
     * Filter, which nofitications to fetch.
     */
    where?: nofiticationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of nofitications to fetch.
     */
    orderBy?: nofiticationsOrderByWithRelationInput | nofiticationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for nofitications.
     */
    cursor?: nofiticationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` nofitications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` nofitications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of nofitications.
     */
    distinct?: NofiticationsScalarFieldEnum | NofiticationsScalarFieldEnum[]
  }

  /**
   * nofitications findMany
   */
  export type nofiticationsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nofitications
     */
    select?: nofiticationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the nofitications
     */
    omit?: nofiticationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: nofiticationsInclude<ExtArgs> | null
    /**
     * Filter, which nofitications to fetch.
     */
    where?: nofiticationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of nofitications to fetch.
     */
    orderBy?: nofiticationsOrderByWithRelationInput | nofiticationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing nofitications.
     */
    cursor?: nofiticationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` nofitications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` nofitications.
     */
    skip?: number
    distinct?: NofiticationsScalarFieldEnum | NofiticationsScalarFieldEnum[]
  }

  /**
   * nofitications create
   */
  export type nofiticationsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nofitications
     */
    select?: nofiticationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the nofitications
     */
    omit?: nofiticationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: nofiticationsInclude<ExtArgs> | null
    /**
     * The data needed to create a nofitications.
     */
    data: XOR<nofiticationsCreateInput, nofiticationsUncheckedCreateInput>
  }

  /**
   * nofitications createMany
   */
  export type nofiticationsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many nofitications.
     */
    data: nofiticationsCreateManyInput | nofiticationsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * nofitications createManyAndReturn
   */
  export type nofiticationsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nofitications
     */
    select?: nofiticationsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the nofitications
     */
    omit?: nofiticationsOmit<ExtArgs> | null
    /**
     * The data used to create many nofitications.
     */
    data: nofiticationsCreateManyInput | nofiticationsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * nofitications update
   */
  export type nofiticationsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nofitications
     */
    select?: nofiticationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the nofitications
     */
    omit?: nofiticationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: nofiticationsInclude<ExtArgs> | null
    /**
     * The data needed to update a nofitications.
     */
    data: XOR<nofiticationsUpdateInput, nofiticationsUncheckedUpdateInput>
    /**
     * Choose, which nofitications to update.
     */
    where: nofiticationsWhereUniqueInput
  }

  /**
   * nofitications updateMany
   */
  export type nofiticationsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update nofitications.
     */
    data: XOR<nofiticationsUpdateManyMutationInput, nofiticationsUncheckedUpdateManyInput>
    /**
     * Filter which nofitications to update
     */
    where?: nofiticationsWhereInput
    /**
     * Limit how many nofitications to update.
     */
    limit?: number
  }

  /**
   * nofitications updateManyAndReturn
   */
  export type nofiticationsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nofitications
     */
    select?: nofiticationsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the nofitications
     */
    omit?: nofiticationsOmit<ExtArgs> | null
    /**
     * The data used to update nofitications.
     */
    data: XOR<nofiticationsUpdateManyMutationInput, nofiticationsUncheckedUpdateManyInput>
    /**
     * Filter which nofitications to update
     */
    where?: nofiticationsWhereInput
    /**
     * Limit how many nofitications to update.
     */
    limit?: number
  }

  /**
   * nofitications upsert
   */
  export type nofiticationsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nofitications
     */
    select?: nofiticationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the nofitications
     */
    omit?: nofiticationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: nofiticationsInclude<ExtArgs> | null
    /**
     * The filter to search for the nofitications to update in case it exists.
     */
    where: nofiticationsWhereUniqueInput
    /**
     * In case the nofitications found by the `where` argument doesn't exist, create a new nofitications with this data.
     */
    create: XOR<nofiticationsCreateInput, nofiticationsUncheckedCreateInput>
    /**
     * In case the nofitications was found with the provided `where` argument, update it with this data.
     */
    update: XOR<nofiticationsUpdateInput, nofiticationsUncheckedUpdateInput>
  }

  /**
   * nofitications delete
   */
  export type nofiticationsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nofitications
     */
    select?: nofiticationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the nofitications
     */
    omit?: nofiticationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: nofiticationsInclude<ExtArgs> | null
    /**
     * Filter which nofitications to delete.
     */
    where: nofiticationsWhereUniqueInput
  }

  /**
   * nofitications deleteMany
   */
  export type nofiticationsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which nofitications to delete
     */
    where?: nofiticationsWhereInput
    /**
     * Limit how many nofitications to delete.
     */
    limit?: number
  }

  /**
   * nofitications.users
   */
  export type nofitications$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    cursor?: usersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * nofitications without action
   */
  export type nofiticationsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nofitications
     */
    select?: nofiticationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the nofitications
     */
    omit?: nofiticationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: nofiticationsInclude<ExtArgs> | null
  }


  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    stars: number | null
  }

  export type UsersSumAggregateOutputType = {
    stars: number | null
  }

  export type UsersMinAggregateOutputType = {
    user_id: string | null
    bio: string | null
    email: string | null
    name: string | null
    password: string | null
    gender: $Enums.gender_enum | null
    created_at: Date | null
    stars: number | null
    profile_photo_url: string | null
    cover_photo_url: string | null
    user_account_type: $Enums.account_type | null
  }

  export type UsersMaxAggregateOutputType = {
    user_id: string | null
    bio: string | null
    email: string | null
    name: string | null
    password: string | null
    gender: $Enums.gender_enum | null
    created_at: Date | null
    stars: number | null
    profile_photo_url: string | null
    cover_photo_url: string | null
    user_account_type: $Enums.account_type | null
  }

  export type UsersCountAggregateOutputType = {
    user_id: number
    bio: number
    email: number
    name: number
    password: number
    gender: number
    created_at: number
    stars: number
    profile_photo_url: number
    cover_photo_url: number
    user_account_type: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    stars?: true
  }

  export type UsersSumAggregateInputType = {
    stars?: true
  }

  export type UsersMinAggregateInputType = {
    user_id?: true
    bio?: true
    email?: true
    name?: true
    password?: true
    gender?: true
    created_at?: true
    stars?: true
    profile_photo_url?: true
    cover_photo_url?: true
    user_account_type?: true
  }

  export type UsersMaxAggregateInputType = {
    user_id?: true
    bio?: true
    email?: true
    name?: true
    password?: true
    gender?: true
    created_at?: true
    stars?: true
    profile_photo_url?: true
    cover_photo_url?: true
    user_account_type?: true
  }

  export type UsersCountAggregateInputType = {
    user_id?: true
    bio?: true
    email?: true
    name?: true
    password?: true
    gender?: true
    created_at?: true
    stars?: true
    profile_photo_url?: true
    cover_photo_url?: true
    user_account_type?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    user_id: string
    bio: string | null
    email: string
    name: string
    password: string
    gender: $Enums.gender_enum | null
    created_at: Date | null
    stars: number
    profile_photo_url: string | null
    cover_photo_url: string | null
    user_account_type: $Enums.account_type
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    bio?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    gender?: boolean
    created_at?: boolean
    stars?: boolean
    profile_photo_url?: boolean
    cover_photo_url?: boolean
    user_account_type?: boolean
    preferences?: boolean | users$preferencesArgs<ExtArgs>
    followers?: boolean | users$followersArgs<ExtArgs>
    followings?: boolean | users$followingsArgs<ExtArgs>
    user_posts?: boolean | users$user_postsArgs<ExtArgs>
    posts_liked?: boolean | users$posts_likedArgs<ExtArgs>
    comments_liked?: boolean | users$comments_likedArgs<ExtArgs>
    messages?: boolean | users$messagesArgs<ExtArgs>
    conversations?: boolean | users$conversationsArgs<ExtArgs>
    user_sessions?: boolean | users$user_sessionsArgs<ExtArgs>
    nofitications?: boolean | users$nofiticationsArgs<ExtArgs>
    users_saved_posts?: boolean | users$users_saved_postsArgs<ExtArgs>
    comments?: boolean | users$commentsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type usersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    bio?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    gender?: boolean
    created_at?: boolean
    stars?: boolean
    profile_photo_url?: boolean
    cover_photo_url?: boolean
    user_account_type?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    bio?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    gender?: boolean
    created_at?: boolean
    stars?: boolean
    profile_photo_url?: boolean
    cover_photo_url?: boolean
    user_account_type?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectScalar = {
    user_id?: boolean
    bio?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    gender?: boolean
    created_at?: boolean
    stars?: boolean
    profile_photo_url?: boolean
    cover_photo_url?: boolean
    user_account_type?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"user_id" | "bio" | "email" | "name" | "password" | "gender" | "created_at" | "stars" | "profile_photo_url" | "cover_photo_url" | "user_account_type", ExtArgs["result"]["users"]>
  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    preferences?: boolean | users$preferencesArgs<ExtArgs>
    followers?: boolean | users$followersArgs<ExtArgs>
    followings?: boolean | users$followingsArgs<ExtArgs>
    user_posts?: boolean | users$user_postsArgs<ExtArgs>
    posts_liked?: boolean | users$posts_likedArgs<ExtArgs>
    comments_liked?: boolean | users$comments_likedArgs<ExtArgs>
    messages?: boolean | users$messagesArgs<ExtArgs>
    conversations?: boolean | users$conversationsArgs<ExtArgs>
    user_sessions?: boolean | users$user_sessionsArgs<ExtArgs>
    nofitications?: boolean | users$nofiticationsArgs<ExtArgs>
    users_saved_posts?: boolean | users$users_saved_postsArgs<ExtArgs>
    comments?: boolean | users$commentsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type usersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type usersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      preferences: Prisma.$post_categoriesPayload<ExtArgs>[]
      followers: Prisma.$usersPayload<ExtArgs>[]
      followings: Prisma.$usersPayload<ExtArgs>[]
      user_posts: Prisma.$postsPayload<ExtArgs>[]
      posts_liked: Prisma.$postsPayload<ExtArgs>[]
      comments_liked: Prisma.$commentsPayload<ExtArgs>[]
      messages: Prisma.$messagesPayload<ExtArgs>[]
      conversations: Prisma.$conversationsPayload<ExtArgs>[]
      user_sessions: Prisma.$sessionsPayload<ExtArgs>[]
      nofitications: Prisma.$nofiticationsPayload<ExtArgs>[]
      users_saved_posts: Prisma.$users_saved_postsPayload<ExtArgs>[]
      comments: Prisma.$commentsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      user_id: string
      bio: string | null
      email: string
      name: string
      password: string
      gender: $Enums.gender_enum | null
      created_at: Date | null
      stars: number
      profile_photo_url: string | null
      cover_photo_url: string | null
      user_account_type: $Enums.account_type
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `user_id`
     * const usersWithUser_idOnly = await prisma.users.findMany({ select: { user_id: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {usersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `user_id`
     * const usersWithUser_idOnly = await prisma.users.createManyAndReturn({
     *   select: { user_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usersCreateManyAndReturnArgs>(args?: SelectSubset<T, usersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {usersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `user_id`
     * const usersWithUser_idOnly = await prisma.users.updateManyAndReturn({
     *   select: { user_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends usersUpdateManyAndReturnArgs>(args: SelectSubset<T, usersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    preferences<T extends users$preferencesArgs<ExtArgs> = {}>(args?: Subset<T, users$preferencesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$post_categoriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    followers<T extends users$followersArgs<ExtArgs> = {}>(args?: Subset<T, users$followersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    followings<T extends users$followingsArgs<ExtArgs> = {}>(args?: Subset<T, users$followingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user_posts<T extends users$user_postsArgs<ExtArgs> = {}>(args?: Subset<T, users$user_postsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    posts_liked<T extends users$posts_likedArgs<ExtArgs> = {}>(args?: Subset<T, users$posts_likedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    comments_liked<T extends users$comments_likedArgs<ExtArgs> = {}>(args?: Subset<T, users$comments_likedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    messages<T extends users$messagesArgs<ExtArgs> = {}>(args?: Subset<T, users$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    conversations<T extends users$conversationsArgs<ExtArgs> = {}>(args?: Subset<T, users$conversationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$conversationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user_sessions<T extends users$user_sessionsArgs<ExtArgs> = {}>(args?: Subset<T, users$user_sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sessionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    nofitications<T extends users$nofiticationsArgs<ExtArgs> = {}>(args?: Subset<T, users$nofiticationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$nofiticationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    users_saved_posts<T extends users$users_saved_postsArgs<ExtArgs> = {}>(args?: Subset<T, users$users_saved_postsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$users_saved_postsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    comments<T extends users$commentsArgs<ExtArgs> = {}>(args?: Subset<T, users$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly user_id: FieldRef<"users", 'String'>
    readonly bio: FieldRef<"users", 'String'>
    readonly email: FieldRef<"users", 'String'>
    readonly name: FieldRef<"users", 'String'>
    readonly password: FieldRef<"users", 'String'>
    readonly gender: FieldRef<"users", 'gender_enum'>
    readonly created_at: FieldRef<"users", 'DateTime'>
    readonly stars: FieldRef<"users", 'Int'>
    readonly profile_photo_url: FieldRef<"users", 'String'>
    readonly cover_photo_url: FieldRef<"users", 'String'>
    readonly user_account_type: FieldRef<"users", 'account_type'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users createManyAndReturn
   */
  export type usersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users updateManyAndReturn
   */
  export type usersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users.preferences
   */
  export type users$preferencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the post_categories
     */
    select?: post_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the post_categories
     */
    omit?: post_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: post_categoriesInclude<ExtArgs> | null
    where?: post_categoriesWhereInput
    orderBy?: post_categoriesOrderByWithRelationInput | post_categoriesOrderByWithRelationInput[]
    cursor?: post_categoriesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Post_categoriesScalarFieldEnum | Post_categoriesScalarFieldEnum[]
  }

  /**
   * users.followers
   */
  export type users$followersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    cursor?: usersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users.followings
   */
  export type users$followingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    cursor?: usersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users.user_posts
   */
  export type users$user_postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts
     */
    select?: postsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the posts
     */
    omit?: postsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postsInclude<ExtArgs> | null
    where?: postsWhereInput
    orderBy?: postsOrderByWithRelationInput | postsOrderByWithRelationInput[]
    cursor?: postsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostsScalarFieldEnum | PostsScalarFieldEnum[]
  }

  /**
   * users.posts_liked
   */
  export type users$posts_likedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts
     */
    select?: postsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the posts
     */
    omit?: postsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postsInclude<ExtArgs> | null
    where?: postsWhereInput
    orderBy?: postsOrderByWithRelationInput | postsOrderByWithRelationInput[]
    cursor?: postsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostsScalarFieldEnum | PostsScalarFieldEnum[]
  }

  /**
   * users.comments_liked
   */
  export type users$comments_likedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsInclude<ExtArgs> | null
    where?: commentsWhereInput
    orderBy?: commentsOrderByWithRelationInput | commentsOrderByWithRelationInput[]
    cursor?: commentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }

  /**
   * users.messages
   */
  export type users$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messagesInclude<ExtArgs> | null
    where?: messagesWhereInput
    orderBy?: messagesOrderByWithRelationInput | messagesOrderByWithRelationInput[]
    cursor?: messagesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessagesScalarFieldEnum | MessagesScalarFieldEnum[]
  }

  /**
   * users.conversations
   */
  export type users$conversationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the conversations
     */
    select?: conversationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the conversations
     */
    omit?: conversationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: conversationsInclude<ExtArgs> | null
    where?: conversationsWhereInput
    orderBy?: conversationsOrderByWithRelationInput | conversationsOrderByWithRelationInput[]
    cursor?: conversationsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConversationsScalarFieldEnum | ConversationsScalarFieldEnum[]
  }

  /**
   * users.user_sessions
   */
  export type users$user_sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sessions
     */
    omit?: sessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sessionsInclude<ExtArgs> | null
    where?: sessionsWhereInput
    orderBy?: sessionsOrderByWithRelationInput | sessionsOrderByWithRelationInput[]
    cursor?: sessionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionsScalarFieldEnum | SessionsScalarFieldEnum[]
  }

  /**
   * users.nofitications
   */
  export type users$nofiticationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nofitications
     */
    select?: nofiticationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the nofitications
     */
    omit?: nofiticationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: nofiticationsInclude<ExtArgs> | null
    where?: nofiticationsWhereInput
    orderBy?: nofiticationsOrderByWithRelationInput | nofiticationsOrderByWithRelationInput[]
    cursor?: nofiticationsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NofiticationsScalarFieldEnum | NofiticationsScalarFieldEnum[]
  }

  /**
   * users.users_saved_posts
   */
  export type users$users_saved_postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users_saved_posts
     */
    select?: users_saved_postsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users_saved_posts
     */
    omit?: users_saved_postsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: users_saved_postsInclude<ExtArgs> | null
    where?: users_saved_postsWhereInput
    orderBy?: users_saved_postsOrderByWithRelationInput | users_saved_postsOrderByWithRelationInput[]
    cursor?: users_saved_postsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Users_saved_postsScalarFieldEnum | Users_saved_postsScalarFieldEnum[]
  }

  /**
   * users.comments
   */
  export type users$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsInclude<ExtArgs> | null
    where?: commentsWhereInput
    orderBy?: commentsOrderByWithRelationInput | commentsOrderByWithRelationInput[]
    cursor?: commentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
  }


  /**
   * Model sessions
   */

  export type AggregateSessions = {
    _count: SessionsCountAggregateOutputType | null
    _min: SessionsMinAggregateOutputType | null
    _max: SessionsMaxAggregateOutputType | null
  }

  export type SessionsMinAggregateOutputType = {
    session_id: string | null
    session_token: string | null
    ip_addr: string | null
    user_agent: string | null
    session_user_id: string | null
  }

  export type SessionsMaxAggregateOutputType = {
    session_id: string | null
    session_token: string | null
    ip_addr: string | null
    user_agent: string | null
    session_user_id: string | null
  }

  export type SessionsCountAggregateOutputType = {
    session_id: number
    session_token: number
    ip_addr: number
    user_agent: number
    session_user_id: number
    _all: number
  }


  export type SessionsMinAggregateInputType = {
    session_id?: true
    session_token?: true
    ip_addr?: true
    user_agent?: true
    session_user_id?: true
  }

  export type SessionsMaxAggregateInputType = {
    session_id?: true
    session_token?: true
    ip_addr?: true
    user_agent?: true
    session_user_id?: true
  }

  export type SessionsCountAggregateInputType = {
    session_id?: true
    session_token?: true
    ip_addr?: true
    user_agent?: true
    session_user_id?: true
    _all?: true
  }

  export type SessionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sessions to aggregate.
     */
    where?: sessionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sessions to fetch.
     */
    orderBy?: sessionsOrderByWithRelationInput | sessionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: sessionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned sessions
    **/
    _count?: true | SessionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionsMaxAggregateInputType
  }

  export type GetSessionsAggregateType<T extends SessionsAggregateArgs> = {
        [P in keyof T & keyof AggregateSessions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSessions[P]>
      : GetScalarType<T[P], AggregateSessions[P]>
  }




  export type sessionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sessionsWhereInput
    orderBy?: sessionsOrderByWithAggregationInput | sessionsOrderByWithAggregationInput[]
    by: SessionsScalarFieldEnum[] | SessionsScalarFieldEnum
    having?: sessionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionsCountAggregateInputType | true
    _min?: SessionsMinAggregateInputType
    _max?: SessionsMaxAggregateInputType
  }

  export type SessionsGroupByOutputType = {
    session_id: string
    session_token: string
    ip_addr: string | null
    user_agent: string | null
    session_user_id: string | null
    _count: SessionsCountAggregateOutputType | null
    _min: SessionsMinAggregateOutputType | null
    _max: SessionsMaxAggregateOutputType | null
  }

  type GetSessionsGroupByPayload<T extends sessionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionsGroupByOutputType[P]>
            : GetScalarType<T[P], SessionsGroupByOutputType[P]>
        }
      >
    >


  export type sessionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    session_id?: boolean
    session_token?: boolean
    ip_addr?: boolean
    user_agent?: boolean
    session_user_id?: boolean
    session_user?: boolean | sessions$session_userArgs<ExtArgs>
  }, ExtArgs["result"]["sessions"]>

  export type sessionsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    session_id?: boolean
    session_token?: boolean
    ip_addr?: boolean
    user_agent?: boolean
    session_user_id?: boolean
    session_user?: boolean | sessions$session_userArgs<ExtArgs>
  }, ExtArgs["result"]["sessions"]>

  export type sessionsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    session_id?: boolean
    session_token?: boolean
    ip_addr?: boolean
    user_agent?: boolean
    session_user_id?: boolean
    session_user?: boolean | sessions$session_userArgs<ExtArgs>
  }, ExtArgs["result"]["sessions"]>

  export type sessionsSelectScalar = {
    session_id?: boolean
    session_token?: boolean
    ip_addr?: boolean
    user_agent?: boolean
    session_user_id?: boolean
  }

  export type sessionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"session_id" | "session_token" | "ip_addr" | "user_agent" | "session_user_id", ExtArgs["result"]["sessions"]>
  export type sessionsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session_user?: boolean | sessions$session_userArgs<ExtArgs>
  }
  export type sessionsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session_user?: boolean | sessions$session_userArgs<ExtArgs>
  }
  export type sessionsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session_user?: boolean | sessions$session_userArgs<ExtArgs>
  }

  export type $sessionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "sessions"
    objects: {
      session_user: Prisma.$usersPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      session_id: string
      session_token: string
      ip_addr: string | null
      user_agent: string | null
      session_user_id: string | null
    }, ExtArgs["result"]["sessions"]>
    composites: {}
  }

  type sessionsGetPayload<S extends boolean | null | undefined | sessionsDefaultArgs> = $Result.GetResult<Prisma.$sessionsPayload, S>

  type sessionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<sessionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionsCountAggregateInputType | true
    }

  export interface sessionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['sessions'], meta: { name: 'sessions' } }
    /**
     * Find zero or one Sessions that matches the filter.
     * @param {sessionsFindUniqueArgs} args - Arguments to find a Sessions
     * @example
     * // Get one Sessions
     * const sessions = await prisma.sessions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends sessionsFindUniqueArgs>(args: SelectSubset<T, sessionsFindUniqueArgs<ExtArgs>>): Prisma__sessionsClient<$Result.GetResult<Prisma.$sessionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sessions that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {sessionsFindUniqueOrThrowArgs} args - Arguments to find a Sessions
     * @example
     * // Get one Sessions
     * const sessions = await prisma.sessions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends sessionsFindUniqueOrThrowArgs>(args: SelectSubset<T, sessionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__sessionsClient<$Result.GetResult<Prisma.$sessionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sessionsFindFirstArgs} args - Arguments to find a Sessions
     * @example
     * // Get one Sessions
     * const sessions = await prisma.sessions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends sessionsFindFirstArgs>(args?: SelectSubset<T, sessionsFindFirstArgs<ExtArgs>>): Prisma__sessionsClient<$Result.GetResult<Prisma.$sessionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sessions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sessionsFindFirstOrThrowArgs} args - Arguments to find a Sessions
     * @example
     * // Get one Sessions
     * const sessions = await prisma.sessions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends sessionsFindFirstOrThrowArgs>(args?: SelectSubset<T, sessionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__sessionsClient<$Result.GetResult<Prisma.$sessionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sessionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.sessions.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.sessions.findMany({ take: 10 })
     * 
     * // Only select the `session_id`
     * const sessionsWithSession_idOnly = await prisma.sessions.findMany({ select: { session_id: true } })
     * 
     */
    findMany<T extends sessionsFindManyArgs>(args?: SelectSubset<T, sessionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sessionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sessions.
     * @param {sessionsCreateArgs} args - Arguments to create a Sessions.
     * @example
     * // Create one Sessions
     * const Sessions = await prisma.sessions.create({
     *   data: {
     *     // ... data to create a Sessions
     *   }
     * })
     * 
     */
    create<T extends sessionsCreateArgs>(args: SelectSubset<T, sessionsCreateArgs<ExtArgs>>): Prisma__sessionsClient<$Result.GetResult<Prisma.$sessionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {sessionsCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const sessions = await prisma.sessions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends sessionsCreateManyArgs>(args?: SelectSubset<T, sessionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {sessionsCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const sessions = await prisma.sessions.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `session_id`
     * const sessionsWithSession_idOnly = await prisma.sessions.createManyAndReturn({
     *   select: { session_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends sessionsCreateManyAndReturnArgs>(args?: SelectSubset<T, sessionsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sessionsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Sessions.
     * @param {sessionsDeleteArgs} args - Arguments to delete one Sessions.
     * @example
     * // Delete one Sessions
     * const Sessions = await prisma.sessions.delete({
     *   where: {
     *     // ... filter to delete one Sessions
     *   }
     * })
     * 
     */
    delete<T extends sessionsDeleteArgs>(args: SelectSubset<T, sessionsDeleteArgs<ExtArgs>>): Prisma__sessionsClient<$Result.GetResult<Prisma.$sessionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sessions.
     * @param {sessionsUpdateArgs} args - Arguments to update one Sessions.
     * @example
     * // Update one Sessions
     * const sessions = await prisma.sessions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends sessionsUpdateArgs>(args: SelectSubset<T, sessionsUpdateArgs<ExtArgs>>): Prisma__sessionsClient<$Result.GetResult<Prisma.$sessionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {sessionsDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.sessions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends sessionsDeleteManyArgs>(args?: SelectSubset<T, sessionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sessionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const sessions = await prisma.sessions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends sessionsUpdateManyArgs>(args: SelectSubset<T, sessionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {sessionsUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const sessions = await prisma.sessions.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `session_id`
     * const sessionsWithSession_idOnly = await prisma.sessions.updateManyAndReturn({
     *   select: { session_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends sessionsUpdateManyAndReturnArgs>(args: SelectSubset<T, sessionsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sessionsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Sessions.
     * @param {sessionsUpsertArgs} args - Arguments to update or create a Sessions.
     * @example
     * // Update or create a Sessions
     * const sessions = await prisma.sessions.upsert({
     *   create: {
     *     // ... data to create a Sessions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sessions we want to update
     *   }
     * })
     */
    upsert<T extends sessionsUpsertArgs>(args: SelectSubset<T, sessionsUpsertArgs<ExtArgs>>): Prisma__sessionsClient<$Result.GetResult<Prisma.$sessionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sessionsCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.sessions.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends sessionsCountArgs>(
      args?: Subset<T, sessionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SessionsAggregateArgs>(args: Subset<T, SessionsAggregateArgs>): Prisma.PrismaPromise<GetSessionsAggregateType<T>>

    /**
     * Group by Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sessionsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends sessionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: sessionsGroupByArgs['orderBy'] }
        : { orderBy?: sessionsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, sessionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the sessions model
   */
  readonly fields: sessionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for sessions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__sessionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    session_user<T extends sessions$session_userArgs<ExtArgs> = {}>(args?: Subset<T, sessions$session_userArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the sessions model
   */
  interface sessionsFieldRefs {
    readonly session_id: FieldRef<"sessions", 'String'>
    readonly session_token: FieldRef<"sessions", 'String'>
    readonly ip_addr: FieldRef<"sessions", 'String'>
    readonly user_agent: FieldRef<"sessions", 'String'>
    readonly session_user_id: FieldRef<"sessions", 'String'>
  }
    

  // Custom InputTypes
  /**
   * sessions findUnique
   */
  export type sessionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sessions
     */
    omit?: sessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sessionsInclude<ExtArgs> | null
    /**
     * Filter, which sessions to fetch.
     */
    where: sessionsWhereUniqueInput
  }

  /**
   * sessions findUniqueOrThrow
   */
  export type sessionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sessions
     */
    omit?: sessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sessionsInclude<ExtArgs> | null
    /**
     * Filter, which sessions to fetch.
     */
    where: sessionsWhereUniqueInput
  }

  /**
   * sessions findFirst
   */
  export type sessionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sessions
     */
    omit?: sessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sessionsInclude<ExtArgs> | null
    /**
     * Filter, which sessions to fetch.
     */
    where?: sessionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sessions to fetch.
     */
    orderBy?: sessionsOrderByWithRelationInput | sessionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sessions.
     */
    cursor?: sessionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sessions.
     */
    distinct?: SessionsScalarFieldEnum | SessionsScalarFieldEnum[]
  }

  /**
   * sessions findFirstOrThrow
   */
  export type sessionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sessions
     */
    omit?: sessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sessionsInclude<ExtArgs> | null
    /**
     * Filter, which sessions to fetch.
     */
    where?: sessionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sessions to fetch.
     */
    orderBy?: sessionsOrderByWithRelationInput | sessionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sessions.
     */
    cursor?: sessionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sessions.
     */
    distinct?: SessionsScalarFieldEnum | SessionsScalarFieldEnum[]
  }

  /**
   * sessions findMany
   */
  export type sessionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sessions
     */
    omit?: sessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sessionsInclude<ExtArgs> | null
    /**
     * Filter, which sessions to fetch.
     */
    where?: sessionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sessions to fetch.
     */
    orderBy?: sessionsOrderByWithRelationInput | sessionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing sessions.
     */
    cursor?: sessionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sessions.
     */
    skip?: number
    distinct?: SessionsScalarFieldEnum | SessionsScalarFieldEnum[]
  }

  /**
   * sessions create
   */
  export type sessionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sessions
     */
    omit?: sessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sessionsInclude<ExtArgs> | null
    /**
     * The data needed to create a sessions.
     */
    data: XOR<sessionsCreateInput, sessionsUncheckedCreateInput>
  }

  /**
   * sessions createMany
   */
  export type sessionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many sessions.
     */
    data: sessionsCreateManyInput | sessionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * sessions createManyAndReturn
   */
  export type sessionsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the sessions
     */
    omit?: sessionsOmit<ExtArgs> | null
    /**
     * The data used to create many sessions.
     */
    data: sessionsCreateManyInput | sessionsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sessionsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * sessions update
   */
  export type sessionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sessions
     */
    omit?: sessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sessionsInclude<ExtArgs> | null
    /**
     * The data needed to update a sessions.
     */
    data: XOR<sessionsUpdateInput, sessionsUncheckedUpdateInput>
    /**
     * Choose, which sessions to update.
     */
    where: sessionsWhereUniqueInput
  }

  /**
   * sessions updateMany
   */
  export type sessionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update sessions.
     */
    data: XOR<sessionsUpdateManyMutationInput, sessionsUncheckedUpdateManyInput>
    /**
     * Filter which sessions to update
     */
    where?: sessionsWhereInput
    /**
     * Limit how many sessions to update.
     */
    limit?: number
  }

  /**
   * sessions updateManyAndReturn
   */
  export type sessionsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the sessions
     */
    omit?: sessionsOmit<ExtArgs> | null
    /**
     * The data used to update sessions.
     */
    data: XOR<sessionsUpdateManyMutationInput, sessionsUncheckedUpdateManyInput>
    /**
     * Filter which sessions to update
     */
    where?: sessionsWhereInput
    /**
     * Limit how many sessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sessionsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * sessions upsert
   */
  export type sessionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sessions
     */
    omit?: sessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sessionsInclude<ExtArgs> | null
    /**
     * The filter to search for the sessions to update in case it exists.
     */
    where: sessionsWhereUniqueInput
    /**
     * In case the sessions found by the `where` argument doesn't exist, create a new sessions with this data.
     */
    create: XOR<sessionsCreateInput, sessionsUncheckedCreateInput>
    /**
     * In case the sessions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<sessionsUpdateInput, sessionsUncheckedUpdateInput>
  }

  /**
   * sessions delete
   */
  export type sessionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sessions
     */
    omit?: sessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sessionsInclude<ExtArgs> | null
    /**
     * Filter which sessions to delete.
     */
    where: sessionsWhereUniqueInput
  }

  /**
   * sessions deleteMany
   */
  export type sessionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sessions to delete
     */
    where?: sessionsWhereInput
    /**
     * Limit how many sessions to delete.
     */
    limit?: number
  }

  /**
   * sessions.session_user
   */
  export type sessions$session_userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }

  /**
   * sessions without action
   */
  export type sessionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sessions
     */
    omit?: sessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sessionsInclude<ExtArgs> | null
  }


  /**
   * Model post_categories
   */

  export type AggregatePost_categories = {
    _count: Post_categoriesCountAggregateOutputType | null
    _min: Post_categoriesMinAggregateOutputType | null
    _max: Post_categoriesMaxAggregateOutputType | null
  }

  export type Post_categoriesMinAggregateOutputType = {
    category_id: string | null
    category_value: string | null
    parent_category_id: string | null
  }

  export type Post_categoriesMaxAggregateOutputType = {
    category_id: string | null
    category_value: string | null
    parent_category_id: string | null
  }

  export type Post_categoriesCountAggregateOutputType = {
    category_id: number
    category_value: number
    parent_category_id: number
    _all: number
  }


  export type Post_categoriesMinAggregateInputType = {
    category_id?: true
    category_value?: true
    parent_category_id?: true
  }

  export type Post_categoriesMaxAggregateInputType = {
    category_id?: true
    category_value?: true
    parent_category_id?: true
  }

  export type Post_categoriesCountAggregateInputType = {
    category_id?: true
    category_value?: true
    parent_category_id?: true
    _all?: true
  }

  export type Post_categoriesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which post_categories to aggregate.
     */
    where?: post_categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of post_categories to fetch.
     */
    orderBy?: post_categoriesOrderByWithRelationInput | post_categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: post_categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` post_categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` post_categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned post_categories
    **/
    _count?: true | Post_categoriesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Post_categoriesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Post_categoriesMaxAggregateInputType
  }

  export type GetPost_categoriesAggregateType<T extends Post_categoriesAggregateArgs> = {
        [P in keyof T & keyof AggregatePost_categories]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePost_categories[P]>
      : GetScalarType<T[P], AggregatePost_categories[P]>
  }




  export type post_categoriesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: post_categoriesWhereInput
    orderBy?: post_categoriesOrderByWithAggregationInput | post_categoriesOrderByWithAggregationInput[]
    by: Post_categoriesScalarFieldEnum[] | Post_categoriesScalarFieldEnum
    having?: post_categoriesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Post_categoriesCountAggregateInputType | true
    _min?: Post_categoriesMinAggregateInputType
    _max?: Post_categoriesMaxAggregateInputType
  }

  export type Post_categoriesGroupByOutputType = {
    category_id: string
    category_value: string
    parent_category_id: string | null
    _count: Post_categoriesCountAggregateOutputType | null
    _min: Post_categoriesMinAggregateOutputType | null
    _max: Post_categoriesMaxAggregateOutputType | null
  }

  type GetPost_categoriesGroupByPayload<T extends post_categoriesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Post_categoriesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Post_categoriesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Post_categoriesGroupByOutputType[P]>
            : GetScalarType<T[P], Post_categoriesGroupByOutputType[P]>
        }
      >
    >


  export type post_categoriesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    category_id?: boolean
    category_value?: boolean
    parent_category_id?: boolean
    parent_category?: boolean | post_categories$parent_categoryArgs<ExtArgs>
    sub_categories?: boolean | post_categories$sub_categoriesArgs<ExtArgs>
    posts?: boolean | post_categories$postsArgs<ExtArgs>
    interested_users?: boolean | post_categories$interested_usersArgs<ExtArgs>
    _count?: boolean | Post_categoriesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post_categories"]>

  export type post_categoriesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    category_id?: boolean
    category_value?: boolean
    parent_category_id?: boolean
    parent_category?: boolean | post_categories$parent_categoryArgs<ExtArgs>
  }, ExtArgs["result"]["post_categories"]>

  export type post_categoriesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    category_id?: boolean
    category_value?: boolean
    parent_category_id?: boolean
    parent_category?: boolean | post_categories$parent_categoryArgs<ExtArgs>
  }, ExtArgs["result"]["post_categories"]>

  export type post_categoriesSelectScalar = {
    category_id?: boolean
    category_value?: boolean
    parent_category_id?: boolean
  }

  export type post_categoriesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"category_id" | "category_value" | "parent_category_id", ExtArgs["result"]["post_categories"]>
  export type post_categoriesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parent_category?: boolean | post_categories$parent_categoryArgs<ExtArgs>
    sub_categories?: boolean | post_categories$sub_categoriesArgs<ExtArgs>
    posts?: boolean | post_categories$postsArgs<ExtArgs>
    interested_users?: boolean | post_categories$interested_usersArgs<ExtArgs>
    _count?: boolean | Post_categoriesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type post_categoriesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parent_category?: boolean | post_categories$parent_categoryArgs<ExtArgs>
  }
  export type post_categoriesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parent_category?: boolean | post_categories$parent_categoryArgs<ExtArgs>
  }

  export type $post_categoriesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "post_categories"
    objects: {
      parent_category: Prisma.$post_categoriesPayload<ExtArgs> | null
      sub_categories: Prisma.$post_categoriesPayload<ExtArgs>[]
      posts: Prisma.$postsPayload<ExtArgs>[]
      interested_users: Prisma.$usersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      category_id: string
      category_value: string
      parent_category_id: string | null
    }, ExtArgs["result"]["post_categories"]>
    composites: {}
  }

  type post_categoriesGetPayload<S extends boolean | null | undefined | post_categoriesDefaultArgs> = $Result.GetResult<Prisma.$post_categoriesPayload, S>

  type post_categoriesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<post_categoriesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Post_categoriesCountAggregateInputType | true
    }

  export interface post_categoriesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['post_categories'], meta: { name: 'post_categories' } }
    /**
     * Find zero or one Post_categories that matches the filter.
     * @param {post_categoriesFindUniqueArgs} args - Arguments to find a Post_categories
     * @example
     * // Get one Post_categories
     * const post_categories = await prisma.post_categories.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends post_categoriesFindUniqueArgs>(args: SelectSubset<T, post_categoriesFindUniqueArgs<ExtArgs>>): Prisma__post_categoriesClient<$Result.GetResult<Prisma.$post_categoriesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Post_categories that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {post_categoriesFindUniqueOrThrowArgs} args - Arguments to find a Post_categories
     * @example
     * // Get one Post_categories
     * const post_categories = await prisma.post_categories.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends post_categoriesFindUniqueOrThrowArgs>(args: SelectSubset<T, post_categoriesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__post_categoriesClient<$Result.GetResult<Prisma.$post_categoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post_categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {post_categoriesFindFirstArgs} args - Arguments to find a Post_categories
     * @example
     * // Get one Post_categories
     * const post_categories = await prisma.post_categories.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends post_categoriesFindFirstArgs>(args?: SelectSubset<T, post_categoriesFindFirstArgs<ExtArgs>>): Prisma__post_categoriesClient<$Result.GetResult<Prisma.$post_categoriesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post_categories that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {post_categoriesFindFirstOrThrowArgs} args - Arguments to find a Post_categories
     * @example
     * // Get one Post_categories
     * const post_categories = await prisma.post_categories.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends post_categoriesFindFirstOrThrowArgs>(args?: SelectSubset<T, post_categoriesFindFirstOrThrowArgs<ExtArgs>>): Prisma__post_categoriesClient<$Result.GetResult<Prisma.$post_categoriesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Post_categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {post_categoriesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Post_categories
     * const post_categories = await prisma.post_categories.findMany()
     * 
     * // Get first 10 Post_categories
     * const post_categories = await prisma.post_categories.findMany({ take: 10 })
     * 
     * // Only select the `category_id`
     * const post_categoriesWithCategory_idOnly = await prisma.post_categories.findMany({ select: { category_id: true } })
     * 
     */
    findMany<T extends post_categoriesFindManyArgs>(args?: SelectSubset<T, post_categoriesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$post_categoriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Post_categories.
     * @param {post_categoriesCreateArgs} args - Arguments to create a Post_categories.
     * @example
     * // Create one Post_categories
     * const Post_categories = await prisma.post_categories.create({
     *   data: {
     *     // ... data to create a Post_categories
     *   }
     * })
     * 
     */
    create<T extends post_categoriesCreateArgs>(args: SelectSubset<T, post_categoriesCreateArgs<ExtArgs>>): Prisma__post_categoriesClient<$Result.GetResult<Prisma.$post_categoriesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Post_categories.
     * @param {post_categoriesCreateManyArgs} args - Arguments to create many Post_categories.
     * @example
     * // Create many Post_categories
     * const post_categories = await prisma.post_categories.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends post_categoriesCreateManyArgs>(args?: SelectSubset<T, post_categoriesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Post_categories and returns the data saved in the database.
     * @param {post_categoriesCreateManyAndReturnArgs} args - Arguments to create many Post_categories.
     * @example
     * // Create many Post_categories
     * const post_categories = await prisma.post_categories.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Post_categories and only return the `category_id`
     * const post_categoriesWithCategory_idOnly = await prisma.post_categories.createManyAndReturn({
     *   select: { category_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends post_categoriesCreateManyAndReturnArgs>(args?: SelectSubset<T, post_categoriesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$post_categoriesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Post_categories.
     * @param {post_categoriesDeleteArgs} args - Arguments to delete one Post_categories.
     * @example
     * // Delete one Post_categories
     * const Post_categories = await prisma.post_categories.delete({
     *   where: {
     *     // ... filter to delete one Post_categories
     *   }
     * })
     * 
     */
    delete<T extends post_categoriesDeleteArgs>(args: SelectSubset<T, post_categoriesDeleteArgs<ExtArgs>>): Prisma__post_categoriesClient<$Result.GetResult<Prisma.$post_categoriesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Post_categories.
     * @param {post_categoriesUpdateArgs} args - Arguments to update one Post_categories.
     * @example
     * // Update one Post_categories
     * const post_categories = await prisma.post_categories.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends post_categoriesUpdateArgs>(args: SelectSubset<T, post_categoriesUpdateArgs<ExtArgs>>): Prisma__post_categoriesClient<$Result.GetResult<Prisma.$post_categoriesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Post_categories.
     * @param {post_categoriesDeleteManyArgs} args - Arguments to filter Post_categories to delete.
     * @example
     * // Delete a few Post_categories
     * const { count } = await prisma.post_categories.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends post_categoriesDeleteManyArgs>(args?: SelectSubset<T, post_categoriesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Post_categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {post_categoriesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Post_categories
     * const post_categories = await prisma.post_categories.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends post_categoriesUpdateManyArgs>(args: SelectSubset<T, post_categoriesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Post_categories and returns the data updated in the database.
     * @param {post_categoriesUpdateManyAndReturnArgs} args - Arguments to update many Post_categories.
     * @example
     * // Update many Post_categories
     * const post_categories = await prisma.post_categories.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Post_categories and only return the `category_id`
     * const post_categoriesWithCategory_idOnly = await prisma.post_categories.updateManyAndReturn({
     *   select: { category_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends post_categoriesUpdateManyAndReturnArgs>(args: SelectSubset<T, post_categoriesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$post_categoriesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Post_categories.
     * @param {post_categoriesUpsertArgs} args - Arguments to update or create a Post_categories.
     * @example
     * // Update or create a Post_categories
     * const post_categories = await prisma.post_categories.upsert({
     *   create: {
     *     // ... data to create a Post_categories
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Post_categories we want to update
     *   }
     * })
     */
    upsert<T extends post_categoriesUpsertArgs>(args: SelectSubset<T, post_categoriesUpsertArgs<ExtArgs>>): Prisma__post_categoriesClient<$Result.GetResult<Prisma.$post_categoriesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Post_categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {post_categoriesCountArgs} args - Arguments to filter Post_categories to count.
     * @example
     * // Count the number of Post_categories
     * const count = await prisma.post_categories.count({
     *   where: {
     *     // ... the filter for the Post_categories we want to count
     *   }
     * })
    **/
    count<T extends post_categoriesCountArgs>(
      args?: Subset<T, post_categoriesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Post_categoriesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Post_categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Post_categoriesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Post_categoriesAggregateArgs>(args: Subset<T, Post_categoriesAggregateArgs>): Prisma.PrismaPromise<GetPost_categoriesAggregateType<T>>

    /**
     * Group by Post_categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {post_categoriesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends post_categoriesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: post_categoriesGroupByArgs['orderBy'] }
        : { orderBy?: post_categoriesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, post_categoriesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPost_categoriesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the post_categories model
   */
  readonly fields: post_categoriesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for post_categories.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__post_categoriesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    parent_category<T extends post_categories$parent_categoryArgs<ExtArgs> = {}>(args?: Subset<T, post_categories$parent_categoryArgs<ExtArgs>>): Prisma__post_categoriesClient<$Result.GetResult<Prisma.$post_categoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    sub_categories<T extends post_categories$sub_categoriesArgs<ExtArgs> = {}>(args?: Subset<T, post_categories$sub_categoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$post_categoriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    posts<T extends post_categories$postsArgs<ExtArgs> = {}>(args?: Subset<T, post_categories$postsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    interested_users<T extends post_categories$interested_usersArgs<ExtArgs> = {}>(args?: Subset<T, post_categories$interested_usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the post_categories model
   */
  interface post_categoriesFieldRefs {
    readonly category_id: FieldRef<"post_categories", 'String'>
    readonly category_value: FieldRef<"post_categories", 'String'>
    readonly parent_category_id: FieldRef<"post_categories", 'String'>
  }
    

  // Custom InputTypes
  /**
   * post_categories findUnique
   */
  export type post_categoriesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the post_categories
     */
    select?: post_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the post_categories
     */
    omit?: post_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: post_categoriesInclude<ExtArgs> | null
    /**
     * Filter, which post_categories to fetch.
     */
    where: post_categoriesWhereUniqueInput
  }

  /**
   * post_categories findUniqueOrThrow
   */
  export type post_categoriesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the post_categories
     */
    select?: post_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the post_categories
     */
    omit?: post_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: post_categoriesInclude<ExtArgs> | null
    /**
     * Filter, which post_categories to fetch.
     */
    where: post_categoriesWhereUniqueInput
  }

  /**
   * post_categories findFirst
   */
  export type post_categoriesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the post_categories
     */
    select?: post_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the post_categories
     */
    omit?: post_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: post_categoriesInclude<ExtArgs> | null
    /**
     * Filter, which post_categories to fetch.
     */
    where?: post_categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of post_categories to fetch.
     */
    orderBy?: post_categoriesOrderByWithRelationInput | post_categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for post_categories.
     */
    cursor?: post_categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` post_categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` post_categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of post_categories.
     */
    distinct?: Post_categoriesScalarFieldEnum | Post_categoriesScalarFieldEnum[]
  }

  /**
   * post_categories findFirstOrThrow
   */
  export type post_categoriesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the post_categories
     */
    select?: post_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the post_categories
     */
    omit?: post_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: post_categoriesInclude<ExtArgs> | null
    /**
     * Filter, which post_categories to fetch.
     */
    where?: post_categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of post_categories to fetch.
     */
    orderBy?: post_categoriesOrderByWithRelationInput | post_categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for post_categories.
     */
    cursor?: post_categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` post_categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` post_categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of post_categories.
     */
    distinct?: Post_categoriesScalarFieldEnum | Post_categoriesScalarFieldEnum[]
  }

  /**
   * post_categories findMany
   */
  export type post_categoriesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the post_categories
     */
    select?: post_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the post_categories
     */
    omit?: post_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: post_categoriesInclude<ExtArgs> | null
    /**
     * Filter, which post_categories to fetch.
     */
    where?: post_categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of post_categories to fetch.
     */
    orderBy?: post_categoriesOrderByWithRelationInput | post_categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing post_categories.
     */
    cursor?: post_categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` post_categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` post_categories.
     */
    skip?: number
    distinct?: Post_categoriesScalarFieldEnum | Post_categoriesScalarFieldEnum[]
  }

  /**
   * post_categories create
   */
  export type post_categoriesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the post_categories
     */
    select?: post_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the post_categories
     */
    omit?: post_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: post_categoriesInclude<ExtArgs> | null
    /**
     * The data needed to create a post_categories.
     */
    data: XOR<post_categoriesCreateInput, post_categoriesUncheckedCreateInput>
  }

  /**
   * post_categories createMany
   */
  export type post_categoriesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many post_categories.
     */
    data: post_categoriesCreateManyInput | post_categoriesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * post_categories createManyAndReturn
   */
  export type post_categoriesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the post_categories
     */
    select?: post_categoriesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the post_categories
     */
    omit?: post_categoriesOmit<ExtArgs> | null
    /**
     * The data used to create many post_categories.
     */
    data: post_categoriesCreateManyInput | post_categoriesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: post_categoriesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * post_categories update
   */
  export type post_categoriesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the post_categories
     */
    select?: post_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the post_categories
     */
    omit?: post_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: post_categoriesInclude<ExtArgs> | null
    /**
     * The data needed to update a post_categories.
     */
    data: XOR<post_categoriesUpdateInput, post_categoriesUncheckedUpdateInput>
    /**
     * Choose, which post_categories to update.
     */
    where: post_categoriesWhereUniqueInput
  }

  /**
   * post_categories updateMany
   */
  export type post_categoriesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update post_categories.
     */
    data: XOR<post_categoriesUpdateManyMutationInput, post_categoriesUncheckedUpdateManyInput>
    /**
     * Filter which post_categories to update
     */
    where?: post_categoriesWhereInput
    /**
     * Limit how many post_categories to update.
     */
    limit?: number
  }

  /**
   * post_categories updateManyAndReturn
   */
  export type post_categoriesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the post_categories
     */
    select?: post_categoriesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the post_categories
     */
    omit?: post_categoriesOmit<ExtArgs> | null
    /**
     * The data used to update post_categories.
     */
    data: XOR<post_categoriesUpdateManyMutationInput, post_categoriesUncheckedUpdateManyInput>
    /**
     * Filter which post_categories to update
     */
    where?: post_categoriesWhereInput
    /**
     * Limit how many post_categories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: post_categoriesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * post_categories upsert
   */
  export type post_categoriesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the post_categories
     */
    select?: post_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the post_categories
     */
    omit?: post_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: post_categoriesInclude<ExtArgs> | null
    /**
     * The filter to search for the post_categories to update in case it exists.
     */
    where: post_categoriesWhereUniqueInput
    /**
     * In case the post_categories found by the `where` argument doesn't exist, create a new post_categories with this data.
     */
    create: XOR<post_categoriesCreateInput, post_categoriesUncheckedCreateInput>
    /**
     * In case the post_categories was found with the provided `where` argument, update it with this data.
     */
    update: XOR<post_categoriesUpdateInput, post_categoriesUncheckedUpdateInput>
  }

  /**
   * post_categories delete
   */
  export type post_categoriesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the post_categories
     */
    select?: post_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the post_categories
     */
    omit?: post_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: post_categoriesInclude<ExtArgs> | null
    /**
     * Filter which post_categories to delete.
     */
    where: post_categoriesWhereUniqueInput
  }

  /**
   * post_categories deleteMany
   */
  export type post_categoriesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which post_categories to delete
     */
    where?: post_categoriesWhereInput
    /**
     * Limit how many post_categories to delete.
     */
    limit?: number
  }

  /**
   * post_categories.parent_category
   */
  export type post_categories$parent_categoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the post_categories
     */
    select?: post_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the post_categories
     */
    omit?: post_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: post_categoriesInclude<ExtArgs> | null
    where?: post_categoriesWhereInput
  }

  /**
   * post_categories.sub_categories
   */
  export type post_categories$sub_categoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the post_categories
     */
    select?: post_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the post_categories
     */
    omit?: post_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: post_categoriesInclude<ExtArgs> | null
    where?: post_categoriesWhereInput
    orderBy?: post_categoriesOrderByWithRelationInput | post_categoriesOrderByWithRelationInput[]
    cursor?: post_categoriesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Post_categoriesScalarFieldEnum | Post_categoriesScalarFieldEnum[]
  }

  /**
   * post_categories.posts
   */
  export type post_categories$postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts
     */
    select?: postsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the posts
     */
    omit?: postsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postsInclude<ExtArgs> | null
    where?: postsWhereInput
    orderBy?: postsOrderByWithRelationInput | postsOrderByWithRelationInput[]
    cursor?: postsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostsScalarFieldEnum | PostsScalarFieldEnum[]
  }

  /**
   * post_categories.interested_users
   */
  export type post_categories$interested_usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    cursor?: usersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * post_categories without action
   */
  export type post_categoriesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the post_categories
     */
    select?: post_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the post_categories
     */
    omit?: post_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: post_categoriesInclude<ExtArgs> | null
  }


  /**
   * Model posts
   */

  export type AggregatePosts = {
    _count: PostsCountAggregateOutputType | null
    _avg: PostsAvgAggregateOutputType | null
    _sum: PostsSumAggregateOutputType | null
    _min: PostsMinAggregateOutputType | null
    _max: PostsMaxAggregateOutputType | null
  }

  export type PostsAvgAggregateOutputType = {
    price: number | null
  }

  export type PostsSumAggregateOutputType = {
    price: bigint | null
  }

  export type PostsMinAggregateOutputType = {
    post_id: string | null
    title: string | null
    description: string | null
    price: bigint | null
    created_at: Date | null
    post_category_id: string | null
    author_id: string | null
  }

  export type PostsMaxAggregateOutputType = {
    post_id: string | null
    title: string | null
    description: string | null
    price: bigint | null
    created_at: Date | null
    post_category_id: string | null
    author_id: string | null
  }

  export type PostsCountAggregateOutputType = {
    post_id: number
    title: number
    description: number
    price: number
    created_at: number
    post_category_id: number
    author_id: number
    _all: number
  }


  export type PostsAvgAggregateInputType = {
    price?: true
  }

  export type PostsSumAggregateInputType = {
    price?: true
  }

  export type PostsMinAggregateInputType = {
    post_id?: true
    title?: true
    description?: true
    price?: true
    created_at?: true
    post_category_id?: true
    author_id?: true
  }

  export type PostsMaxAggregateInputType = {
    post_id?: true
    title?: true
    description?: true
    price?: true
    created_at?: true
    post_category_id?: true
    author_id?: true
  }

  export type PostsCountAggregateInputType = {
    post_id?: true
    title?: true
    description?: true
    price?: true
    created_at?: true
    post_category_id?: true
    author_id?: true
    _all?: true
  }

  export type PostsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which posts to aggregate.
     */
    where?: postsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of posts to fetch.
     */
    orderBy?: postsOrderByWithRelationInput | postsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: postsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned posts
    **/
    _count?: true | PostsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PostsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PostsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostsMaxAggregateInputType
  }

  export type GetPostsAggregateType<T extends PostsAggregateArgs> = {
        [P in keyof T & keyof AggregatePosts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePosts[P]>
      : GetScalarType<T[P], AggregatePosts[P]>
  }




  export type postsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: postsWhereInput
    orderBy?: postsOrderByWithAggregationInput | postsOrderByWithAggregationInput[]
    by: PostsScalarFieldEnum[] | PostsScalarFieldEnum
    having?: postsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostsCountAggregateInputType | true
    _avg?: PostsAvgAggregateInputType
    _sum?: PostsSumAggregateInputType
    _min?: PostsMinAggregateInputType
    _max?: PostsMaxAggregateInputType
  }

  export type PostsGroupByOutputType = {
    post_id: string
    title: string
    description: string | null
    price: bigint | null
    created_at: Date
    post_category_id: string | null
    author_id: string
    _count: PostsCountAggregateOutputType | null
    _avg: PostsAvgAggregateOutputType | null
    _sum: PostsSumAggregateOutputType | null
    _min: PostsMinAggregateOutputType | null
    _max: PostsMaxAggregateOutputType | null
  }

  type GetPostsGroupByPayload<T extends postsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostsGroupByOutputType[P]>
            : GetScalarType<T[P], PostsGroupByOutputType[P]>
        }
      >
    >


  export type postsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    post_id?: boolean
    title?: boolean
    description?: boolean
    price?: boolean
    created_at?: boolean
    post_category_id?: boolean
    author_id?: boolean
    post_category?: boolean | posts$post_categoryArgs<ExtArgs>
    post_likers?: boolean | posts$post_likersArgs<ExtArgs>
    author?: boolean | usersDefaultArgs<ExtArgs>
    comments?: boolean | posts$commentsArgs<ExtArgs>
    medias?: boolean | posts$mediasArgs<ExtArgs>
    users_saved_posts?: boolean | posts$users_saved_postsArgs<ExtArgs>
    _count?: boolean | PostsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["posts"]>

  export type postsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    post_id?: boolean
    title?: boolean
    description?: boolean
    price?: boolean
    created_at?: boolean
    post_category_id?: boolean
    author_id?: boolean
    post_category?: boolean | posts$post_categoryArgs<ExtArgs>
    author?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["posts"]>

  export type postsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    post_id?: boolean
    title?: boolean
    description?: boolean
    price?: boolean
    created_at?: boolean
    post_category_id?: boolean
    author_id?: boolean
    post_category?: boolean | posts$post_categoryArgs<ExtArgs>
    author?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["posts"]>

  export type postsSelectScalar = {
    post_id?: boolean
    title?: boolean
    description?: boolean
    price?: boolean
    created_at?: boolean
    post_category_id?: boolean
    author_id?: boolean
  }

  export type postsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"post_id" | "title" | "description" | "price" | "created_at" | "post_category_id" | "author_id", ExtArgs["result"]["posts"]>
  export type postsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post_category?: boolean | posts$post_categoryArgs<ExtArgs>
    post_likers?: boolean | posts$post_likersArgs<ExtArgs>
    author?: boolean | usersDefaultArgs<ExtArgs>
    comments?: boolean | posts$commentsArgs<ExtArgs>
    medias?: boolean | posts$mediasArgs<ExtArgs>
    users_saved_posts?: boolean | posts$users_saved_postsArgs<ExtArgs>
    _count?: boolean | PostsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type postsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post_category?: boolean | posts$post_categoryArgs<ExtArgs>
    author?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type postsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post_category?: boolean | posts$post_categoryArgs<ExtArgs>
    author?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $postsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "posts"
    objects: {
      post_category: Prisma.$post_categoriesPayload<ExtArgs> | null
      post_likers: Prisma.$usersPayload<ExtArgs>[]
      author: Prisma.$usersPayload<ExtArgs>
      comments: Prisma.$commentsPayload<ExtArgs>[]
      medias: Prisma.$mediasPayload<ExtArgs>[]
      users_saved_posts: Prisma.$users_saved_postsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      post_id: string
      title: string
      description: string | null
      price: bigint | null
      created_at: Date
      post_category_id: string | null
      author_id: string
    }, ExtArgs["result"]["posts"]>
    composites: {}
  }

  type postsGetPayload<S extends boolean | null | undefined | postsDefaultArgs> = $Result.GetResult<Prisma.$postsPayload, S>

  type postsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<postsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PostsCountAggregateInputType | true
    }

  export interface postsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['posts'], meta: { name: 'posts' } }
    /**
     * Find zero or one Posts that matches the filter.
     * @param {postsFindUniqueArgs} args - Arguments to find a Posts
     * @example
     * // Get one Posts
     * const posts = await prisma.posts.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends postsFindUniqueArgs>(args: SelectSubset<T, postsFindUniqueArgs<ExtArgs>>): Prisma__postsClient<$Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Posts that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {postsFindUniqueOrThrowArgs} args - Arguments to find a Posts
     * @example
     * // Get one Posts
     * const posts = await prisma.posts.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends postsFindUniqueOrThrowArgs>(args: SelectSubset<T, postsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__postsClient<$Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {postsFindFirstArgs} args - Arguments to find a Posts
     * @example
     * // Get one Posts
     * const posts = await prisma.posts.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends postsFindFirstArgs>(args?: SelectSubset<T, postsFindFirstArgs<ExtArgs>>): Prisma__postsClient<$Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Posts that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {postsFindFirstOrThrowArgs} args - Arguments to find a Posts
     * @example
     * // Get one Posts
     * const posts = await prisma.posts.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends postsFindFirstOrThrowArgs>(args?: SelectSubset<T, postsFindFirstOrThrowArgs<ExtArgs>>): Prisma__postsClient<$Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {postsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Posts
     * const posts = await prisma.posts.findMany()
     * 
     * // Get first 10 Posts
     * const posts = await prisma.posts.findMany({ take: 10 })
     * 
     * // Only select the `post_id`
     * const postsWithPost_idOnly = await prisma.posts.findMany({ select: { post_id: true } })
     * 
     */
    findMany<T extends postsFindManyArgs>(args?: SelectSubset<T, postsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Posts.
     * @param {postsCreateArgs} args - Arguments to create a Posts.
     * @example
     * // Create one Posts
     * const Posts = await prisma.posts.create({
     *   data: {
     *     // ... data to create a Posts
     *   }
     * })
     * 
     */
    create<T extends postsCreateArgs>(args: SelectSubset<T, postsCreateArgs<ExtArgs>>): Prisma__postsClient<$Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Posts.
     * @param {postsCreateManyArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const posts = await prisma.posts.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends postsCreateManyArgs>(args?: SelectSubset<T, postsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Posts and returns the data saved in the database.
     * @param {postsCreateManyAndReturnArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const posts = await prisma.posts.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Posts and only return the `post_id`
     * const postsWithPost_idOnly = await prisma.posts.createManyAndReturn({
     *   select: { post_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends postsCreateManyAndReturnArgs>(args?: SelectSubset<T, postsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Posts.
     * @param {postsDeleteArgs} args - Arguments to delete one Posts.
     * @example
     * // Delete one Posts
     * const Posts = await prisma.posts.delete({
     *   where: {
     *     // ... filter to delete one Posts
     *   }
     * })
     * 
     */
    delete<T extends postsDeleteArgs>(args: SelectSubset<T, postsDeleteArgs<ExtArgs>>): Prisma__postsClient<$Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Posts.
     * @param {postsUpdateArgs} args - Arguments to update one Posts.
     * @example
     * // Update one Posts
     * const posts = await prisma.posts.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends postsUpdateArgs>(args: SelectSubset<T, postsUpdateArgs<ExtArgs>>): Prisma__postsClient<$Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Posts.
     * @param {postsDeleteManyArgs} args - Arguments to filter Posts to delete.
     * @example
     * // Delete a few Posts
     * const { count } = await prisma.posts.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends postsDeleteManyArgs>(args?: SelectSubset<T, postsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {postsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Posts
     * const posts = await prisma.posts.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends postsUpdateManyArgs>(args: SelectSubset<T, postsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts and returns the data updated in the database.
     * @param {postsUpdateManyAndReturnArgs} args - Arguments to update many Posts.
     * @example
     * // Update many Posts
     * const posts = await prisma.posts.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Posts and only return the `post_id`
     * const postsWithPost_idOnly = await prisma.posts.updateManyAndReturn({
     *   select: { post_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends postsUpdateManyAndReturnArgs>(args: SelectSubset<T, postsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Posts.
     * @param {postsUpsertArgs} args - Arguments to update or create a Posts.
     * @example
     * // Update or create a Posts
     * const posts = await prisma.posts.upsert({
     *   create: {
     *     // ... data to create a Posts
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Posts we want to update
     *   }
     * })
     */
    upsert<T extends postsUpsertArgs>(args: SelectSubset<T, postsUpsertArgs<ExtArgs>>): Prisma__postsClient<$Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {postsCountArgs} args - Arguments to filter Posts to count.
     * @example
     * // Count the number of Posts
     * const count = await prisma.posts.count({
     *   where: {
     *     // ... the filter for the Posts we want to count
     *   }
     * })
    **/
    count<T extends postsCountArgs>(
      args?: Subset<T, postsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PostsAggregateArgs>(args: Subset<T, PostsAggregateArgs>): Prisma.PrismaPromise<GetPostsAggregateType<T>>

    /**
     * Group by Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {postsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends postsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: postsGroupByArgs['orderBy'] }
        : { orderBy?: postsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, postsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the posts model
   */
  readonly fields: postsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for posts.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__postsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    post_category<T extends posts$post_categoryArgs<ExtArgs> = {}>(args?: Subset<T, posts$post_categoryArgs<ExtArgs>>): Prisma__post_categoriesClient<$Result.GetResult<Prisma.$post_categoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    post_likers<T extends posts$post_likersArgs<ExtArgs> = {}>(args?: Subset<T, posts$post_likersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    author<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    comments<T extends posts$commentsArgs<ExtArgs> = {}>(args?: Subset<T, posts$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    medias<T extends posts$mediasArgs<ExtArgs> = {}>(args?: Subset<T, posts$mediasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$mediasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    users_saved_posts<T extends posts$users_saved_postsArgs<ExtArgs> = {}>(args?: Subset<T, posts$users_saved_postsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$users_saved_postsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the posts model
   */
  interface postsFieldRefs {
    readonly post_id: FieldRef<"posts", 'String'>
    readonly title: FieldRef<"posts", 'String'>
    readonly description: FieldRef<"posts", 'String'>
    readonly price: FieldRef<"posts", 'BigInt'>
    readonly created_at: FieldRef<"posts", 'DateTime'>
    readonly post_category_id: FieldRef<"posts", 'String'>
    readonly author_id: FieldRef<"posts", 'String'>
  }
    

  // Custom InputTypes
  /**
   * posts findUnique
   */
  export type postsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts
     */
    select?: postsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the posts
     */
    omit?: postsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postsInclude<ExtArgs> | null
    /**
     * Filter, which posts to fetch.
     */
    where: postsWhereUniqueInput
  }

  /**
   * posts findUniqueOrThrow
   */
  export type postsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts
     */
    select?: postsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the posts
     */
    omit?: postsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postsInclude<ExtArgs> | null
    /**
     * Filter, which posts to fetch.
     */
    where: postsWhereUniqueInput
  }

  /**
   * posts findFirst
   */
  export type postsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts
     */
    select?: postsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the posts
     */
    omit?: postsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postsInclude<ExtArgs> | null
    /**
     * Filter, which posts to fetch.
     */
    where?: postsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of posts to fetch.
     */
    orderBy?: postsOrderByWithRelationInput | postsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for posts.
     */
    cursor?: postsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of posts.
     */
    distinct?: PostsScalarFieldEnum | PostsScalarFieldEnum[]
  }

  /**
   * posts findFirstOrThrow
   */
  export type postsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts
     */
    select?: postsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the posts
     */
    omit?: postsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postsInclude<ExtArgs> | null
    /**
     * Filter, which posts to fetch.
     */
    where?: postsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of posts to fetch.
     */
    orderBy?: postsOrderByWithRelationInput | postsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for posts.
     */
    cursor?: postsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of posts.
     */
    distinct?: PostsScalarFieldEnum | PostsScalarFieldEnum[]
  }

  /**
   * posts findMany
   */
  export type postsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts
     */
    select?: postsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the posts
     */
    omit?: postsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postsInclude<ExtArgs> | null
    /**
     * Filter, which posts to fetch.
     */
    where?: postsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of posts to fetch.
     */
    orderBy?: postsOrderByWithRelationInput | postsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing posts.
     */
    cursor?: postsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` posts.
     */
    skip?: number
    distinct?: PostsScalarFieldEnum | PostsScalarFieldEnum[]
  }

  /**
   * posts create
   */
  export type postsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts
     */
    select?: postsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the posts
     */
    omit?: postsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postsInclude<ExtArgs> | null
    /**
     * The data needed to create a posts.
     */
    data: XOR<postsCreateInput, postsUncheckedCreateInput>
  }

  /**
   * posts createMany
   */
  export type postsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many posts.
     */
    data: postsCreateManyInput | postsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * posts createManyAndReturn
   */
  export type postsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts
     */
    select?: postsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the posts
     */
    omit?: postsOmit<ExtArgs> | null
    /**
     * The data used to create many posts.
     */
    data: postsCreateManyInput | postsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * posts update
   */
  export type postsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts
     */
    select?: postsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the posts
     */
    omit?: postsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postsInclude<ExtArgs> | null
    /**
     * The data needed to update a posts.
     */
    data: XOR<postsUpdateInput, postsUncheckedUpdateInput>
    /**
     * Choose, which posts to update.
     */
    where: postsWhereUniqueInput
  }

  /**
   * posts updateMany
   */
  export type postsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update posts.
     */
    data: XOR<postsUpdateManyMutationInput, postsUncheckedUpdateManyInput>
    /**
     * Filter which posts to update
     */
    where?: postsWhereInput
    /**
     * Limit how many posts to update.
     */
    limit?: number
  }

  /**
   * posts updateManyAndReturn
   */
  export type postsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts
     */
    select?: postsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the posts
     */
    omit?: postsOmit<ExtArgs> | null
    /**
     * The data used to update posts.
     */
    data: XOR<postsUpdateManyMutationInput, postsUncheckedUpdateManyInput>
    /**
     * Filter which posts to update
     */
    where?: postsWhereInput
    /**
     * Limit how many posts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * posts upsert
   */
  export type postsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts
     */
    select?: postsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the posts
     */
    omit?: postsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postsInclude<ExtArgs> | null
    /**
     * The filter to search for the posts to update in case it exists.
     */
    where: postsWhereUniqueInput
    /**
     * In case the posts found by the `where` argument doesn't exist, create a new posts with this data.
     */
    create: XOR<postsCreateInput, postsUncheckedCreateInput>
    /**
     * In case the posts was found with the provided `where` argument, update it with this data.
     */
    update: XOR<postsUpdateInput, postsUncheckedUpdateInput>
  }

  /**
   * posts delete
   */
  export type postsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts
     */
    select?: postsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the posts
     */
    omit?: postsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postsInclude<ExtArgs> | null
    /**
     * Filter which posts to delete.
     */
    where: postsWhereUniqueInput
  }

  /**
   * posts deleteMany
   */
  export type postsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which posts to delete
     */
    where?: postsWhereInput
    /**
     * Limit how many posts to delete.
     */
    limit?: number
  }

  /**
   * posts.post_category
   */
  export type posts$post_categoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the post_categories
     */
    select?: post_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the post_categories
     */
    omit?: post_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: post_categoriesInclude<ExtArgs> | null
    where?: post_categoriesWhereInput
  }

  /**
   * posts.post_likers
   */
  export type posts$post_likersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    cursor?: usersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * posts.comments
   */
  export type posts$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsInclude<ExtArgs> | null
    where?: commentsWhereInput
    orderBy?: commentsOrderByWithRelationInput | commentsOrderByWithRelationInput[]
    cursor?: commentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }

  /**
   * posts.medias
   */
  export type posts$mediasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the medias
     */
    select?: mediasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the medias
     */
    omit?: mediasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mediasInclude<ExtArgs> | null
    where?: mediasWhereInput
    orderBy?: mediasOrderByWithRelationInput | mediasOrderByWithRelationInput[]
    cursor?: mediasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MediasScalarFieldEnum | MediasScalarFieldEnum[]
  }

  /**
   * posts.users_saved_posts
   */
  export type posts$users_saved_postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users_saved_posts
     */
    select?: users_saved_postsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users_saved_posts
     */
    omit?: users_saved_postsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: users_saved_postsInclude<ExtArgs> | null
    where?: users_saved_postsWhereInput
    orderBy?: users_saved_postsOrderByWithRelationInput | users_saved_postsOrderByWithRelationInput[]
    cursor?: users_saved_postsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Users_saved_postsScalarFieldEnum | Users_saved_postsScalarFieldEnum[]
  }

  /**
   * posts without action
   */
  export type postsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts
     */
    select?: postsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the posts
     */
    omit?: postsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postsInclude<ExtArgs> | null
  }


  /**
   * Model users_saved_posts
   */

  export type AggregateUsers_saved_posts = {
    _count: Users_saved_postsCountAggregateOutputType | null
    _min: Users_saved_postsMinAggregateOutputType | null
    _max: Users_saved_postsMaxAggregateOutputType | null
  }

  export type Users_saved_postsMinAggregateOutputType = {
    post_saving_id: string | null
    saved_at: Date | null
    user_saving_id: string | null
    saved_post_id: string | null
  }

  export type Users_saved_postsMaxAggregateOutputType = {
    post_saving_id: string | null
    saved_at: Date | null
    user_saving_id: string | null
    saved_post_id: string | null
  }

  export type Users_saved_postsCountAggregateOutputType = {
    post_saving_id: number
    saved_at: number
    user_saving_id: number
    saved_post_id: number
    _all: number
  }


  export type Users_saved_postsMinAggregateInputType = {
    post_saving_id?: true
    saved_at?: true
    user_saving_id?: true
    saved_post_id?: true
  }

  export type Users_saved_postsMaxAggregateInputType = {
    post_saving_id?: true
    saved_at?: true
    user_saving_id?: true
    saved_post_id?: true
  }

  export type Users_saved_postsCountAggregateInputType = {
    post_saving_id?: true
    saved_at?: true
    user_saving_id?: true
    saved_post_id?: true
    _all?: true
  }

  export type Users_saved_postsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users_saved_posts to aggregate.
     */
    where?: users_saved_postsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users_saved_posts to fetch.
     */
    orderBy?: users_saved_postsOrderByWithRelationInput | users_saved_postsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: users_saved_postsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users_saved_posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users_saved_posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users_saved_posts
    **/
    _count?: true | Users_saved_postsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Users_saved_postsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Users_saved_postsMaxAggregateInputType
  }

  export type GetUsers_saved_postsAggregateType<T extends Users_saved_postsAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers_saved_posts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers_saved_posts[P]>
      : GetScalarType<T[P], AggregateUsers_saved_posts[P]>
  }




  export type users_saved_postsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: users_saved_postsWhereInput
    orderBy?: users_saved_postsOrderByWithAggregationInput | users_saved_postsOrderByWithAggregationInput[]
    by: Users_saved_postsScalarFieldEnum[] | Users_saved_postsScalarFieldEnum
    having?: users_saved_postsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Users_saved_postsCountAggregateInputType | true
    _min?: Users_saved_postsMinAggregateInputType
    _max?: Users_saved_postsMaxAggregateInputType
  }

  export type Users_saved_postsGroupByOutputType = {
    post_saving_id: string
    saved_at: Date
    user_saving_id: string | null
    saved_post_id: string | null
    _count: Users_saved_postsCountAggregateOutputType | null
    _min: Users_saved_postsMinAggregateOutputType | null
    _max: Users_saved_postsMaxAggregateOutputType | null
  }

  type GetUsers_saved_postsGroupByPayload<T extends users_saved_postsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Users_saved_postsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Users_saved_postsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Users_saved_postsGroupByOutputType[P]>
            : GetScalarType<T[P], Users_saved_postsGroupByOutputType[P]>
        }
      >
    >


  export type users_saved_postsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    post_saving_id?: boolean
    saved_at?: boolean
    user_saving_id?: boolean
    saved_post_id?: boolean
    user_saving?: boolean | users_saved_posts$user_savingArgs<ExtArgs>
    saved_post?: boolean | users_saved_posts$saved_postArgs<ExtArgs>
  }, ExtArgs["result"]["users_saved_posts"]>

  export type users_saved_postsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    post_saving_id?: boolean
    saved_at?: boolean
    user_saving_id?: boolean
    saved_post_id?: boolean
    user_saving?: boolean | users_saved_posts$user_savingArgs<ExtArgs>
    saved_post?: boolean | users_saved_posts$saved_postArgs<ExtArgs>
  }, ExtArgs["result"]["users_saved_posts"]>

  export type users_saved_postsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    post_saving_id?: boolean
    saved_at?: boolean
    user_saving_id?: boolean
    saved_post_id?: boolean
    user_saving?: boolean | users_saved_posts$user_savingArgs<ExtArgs>
    saved_post?: boolean | users_saved_posts$saved_postArgs<ExtArgs>
  }, ExtArgs["result"]["users_saved_posts"]>

  export type users_saved_postsSelectScalar = {
    post_saving_id?: boolean
    saved_at?: boolean
    user_saving_id?: boolean
    saved_post_id?: boolean
  }

  export type users_saved_postsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"post_saving_id" | "saved_at" | "user_saving_id" | "saved_post_id", ExtArgs["result"]["users_saved_posts"]>
  export type users_saved_postsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_saving?: boolean | users_saved_posts$user_savingArgs<ExtArgs>
    saved_post?: boolean | users_saved_posts$saved_postArgs<ExtArgs>
  }
  export type users_saved_postsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_saving?: boolean | users_saved_posts$user_savingArgs<ExtArgs>
    saved_post?: boolean | users_saved_posts$saved_postArgs<ExtArgs>
  }
  export type users_saved_postsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_saving?: boolean | users_saved_posts$user_savingArgs<ExtArgs>
    saved_post?: boolean | users_saved_posts$saved_postArgs<ExtArgs>
  }

  export type $users_saved_postsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users_saved_posts"
    objects: {
      user_saving: Prisma.$usersPayload<ExtArgs> | null
      saved_post: Prisma.$postsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      post_saving_id: string
      saved_at: Date
      user_saving_id: string | null
      saved_post_id: string | null
    }, ExtArgs["result"]["users_saved_posts"]>
    composites: {}
  }

  type users_saved_postsGetPayload<S extends boolean | null | undefined | users_saved_postsDefaultArgs> = $Result.GetResult<Prisma.$users_saved_postsPayload, S>

  type users_saved_postsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<users_saved_postsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Users_saved_postsCountAggregateInputType | true
    }

  export interface users_saved_postsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users_saved_posts'], meta: { name: 'users_saved_posts' } }
    /**
     * Find zero or one Users_saved_posts that matches the filter.
     * @param {users_saved_postsFindUniqueArgs} args - Arguments to find a Users_saved_posts
     * @example
     * // Get one Users_saved_posts
     * const users_saved_posts = await prisma.users_saved_posts.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends users_saved_postsFindUniqueArgs>(args: SelectSubset<T, users_saved_postsFindUniqueArgs<ExtArgs>>): Prisma__users_saved_postsClient<$Result.GetResult<Prisma.$users_saved_postsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users_saved_posts that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {users_saved_postsFindUniqueOrThrowArgs} args - Arguments to find a Users_saved_posts
     * @example
     * // Get one Users_saved_posts
     * const users_saved_posts = await prisma.users_saved_posts.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends users_saved_postsFindUniqueOrThrowArgs>(args: SelectSubset<T, users_saved_postsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__users_saved_postsClient<$Result.GetResult<Prisma.$users_saved_postsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users_saved_posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {users_saved_postsFindFirstArgs} args - Arguments to find a Users_saved_posts
     * @example
     * // Get one Users_saved_posts
     * const users_saved_posts = await prisma.users_saved_posts.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends users_saved_postsFindFirstArgs>(args?: SelectSubset<T, users_saved_postsFindFirstArgs<ExtArgs>>): Prisma__users_saved_postsClient<$Result.GetResult<Prisma.$users_saved_postsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users_saved_posts that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {users_saved_postsFindFirstOrThrowArgs} args - Arguments to find a Users_saved_posts
     * @example
     * // Get one Users_saved_posts
     * const users_saved_posts = await prisma.users_saved_posts.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends users_saved_postsFindFirstOrThrowArgs>(args?: SelectSubset<T, users_saved_postsFindFirstOrThrowArgs<ExtArgs>>): Prisma__users_saved_postsClient<$Result.GetResult<Prisma.$users_saved_postsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users_saved_posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {users_saved_postsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users_saved_posts
     * const users_saved_posts = await prisma.users_saved_posts.findMany()
     * 
     * // Get first 10 Users_saved_posts
     * const users_saved_posts = await prisma.users_saved_posts.findMany({ take: 10 })
     * 
     * // Only select the `post_saving_id`
     * const users_saved_postsWithPost_saving_idOnly = await prisma.users_saved_posts.findMany({ select: { post_saving_id: true } })
     * 
     */
    findMany<T extends users_saved_postsFindManyArgs>(args?: SelectSubset<T, users_saved_postsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$users_saved_postsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users_saved_posts.
     * @param {users_saved_postsCreateArgs} args - Arguments to create a Users_saved_posts.
     * @example
     * // Create one Users_saved_posts
     * const Users_saved_posts = await prisma.users_saved_posts.create({
     *   data: {
     *     // ... data to create a Users_saved_posts
     *   }
     * })
     * 
     */
    create<T extends users_saved_postsCreateArgs>(args: SelectSubset<T, users_saved_postsCreateArgs<ExtArgs>>): Prisma__users_saved_postsClient<$Result.GetResult<Prisma.$users_saved_postsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users_saved_posts.
     * @param {users_saved_postsCreateManyArgs} args - Arguments to create many Users_saved_posts.
     * @example
     * // Create many Users_saved_posts
     * const users_saved_posts = await prisma.users_saved_posts.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends users_saved_postsCreateManyArgs>(args?: SelectSubset<T, users_saved_postsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users_saved_posts and returns the data saved in the database.
     * @param {users_saved_postsCreateManyAndReturnArgs} args - Arguments to create many Users_saved_posts.
     * @example
     * // Create many Users_saved_posts
     * const users_saved_posts = await prisma.users_saved_posts.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users_saved_posts and only return the `post_saving_id`
     * const users_saved_postsWithPost_saving_idOnly = await prisma.users_saved_posts.createManyAndReturn({
     *   select: { post_saving_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends users_saved_postsCreateManyAndReturnArgs>(args?: SelectSubset<T, users_saved_postsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$users_saved_postsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users_saved_posts.
     * @param {users_saved_postsDeleteArgs} args - Arguments to delete one Users_saved_posts.
     * @example
     * // Delete one Users_saved_posts
     * const Users_saved_posts = await prisma.users_saved_posts.delete({
     *   where: {
     *     // ... filter to delete one Users_saved_posts
     *   }
     * })
     * 
     */
    delete<T extends users_saved_postsDeleteArgs>(args: SelectSubset<T, users_saved_postsDeleteArgs<ExtArgs>>): Prisma__users_saved_postsClient<$Result.GetResult<Prisma.$users_saved_postsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users_saved_posts.
     * @param {users_saved_postsUpdateArgs} args - Arguments to update one Users_saved_posts.
     * @example
     * // Update one Users_saved_posts
     * const users_saved_posts = await prisma.users_saved_posts.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends users_saved_postsUpdateArgs>(args: SelectSubset<T, users_saved_postsUpdateArgs<ExtArgs>>): Prisma__users_saved_postsClient<$Result.GetResult<Prisma.$users_saved_postsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users_saved_posts.
     * @param {users_saved_postsDeleteManyArgs} args - Arguments to filter Users_saved_posts to delete.
     * @example
     * // Delete a few Users_saved_posts
     * const { count } = await prisma.users_saved_posts.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends users_saved_postsDeleteManyArgs>(args?: SelectSubset<T, users_saved_postsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users_saved_posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {users_saved_postsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users_saved_posts
     * const users_saved_posts = await prisma.users_saved_posts.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends users_saved_postsUpdateManyArgs>(args: SelectSubset<T, users_saved_postsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users_saved_posts and returns the data updated in the database.
     * @param {users_saved_postsUpdateManyAndReturnArgs} args - Arguments to update many Users_saved_posts.
     * @example
     * // Update many Users_saved_posts
     * const users_saved_posts = await prisma.users_saved_posts.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users_saved_posts and only return the `post_saving_id`
     * const users_saved_postsWithPost_saving_idOnly = await prisma.users_saved_posts.updateManyAndReturn({
     *   select: { post_saving_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends users_saved_postsUpdateManyAndReturnArgs>(args: SelectSubset<T, users_saved_postsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$users_saved_postsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users_saved_posts.
     * @param {users_saved_postsUpsertArgs} args - Arguments to update or create a Users_saved_posts.
     * @example
     * // Update or create a Users_saved_posts
     * const users_saved_posts = await prisma.users_saved_posts.upsert({
     *   create: {
     *     // ... data to create a Users_saved_posts
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users_saved_posts we want to update
     *   }
     * })
     */
    upsert<T extends users_saved_postsUpsertArgs>(args: SelectSubset<T, users_saved_postsUpsertArgs<ExtArgs>>): Prisma__users_saved_postsClient<$Result.GetResult<Prisma.$users_saved_postsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users_saved_posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {users_saved_postsCountArgs} args - Arguments to filter Users_saved_posts to count.
     * @example
     * // Count the number of Users_saved_posts
     * const count = await prisma.users_saved_posts.count({
     *   where: {
     *     // ... the filter for the Users_saved_posts we want to count
     *   }
     * })
    **/
    count<T extends users_saved_postsCountArgs>(
      args?: Subset<T, users_saved_postsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Users_saved_postsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users_saved_posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Users_saved_postsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Users_saved_postsAggregateArgs>(args: Subset<T, Users_saved_postsAggregateArgs>): Prisma.PrismaPromise<GetUsers_saved_postsAggregateType<T>>

    /**
     * Group by Users_saved_posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {users_saved_postsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends users_saved_postsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: users_saved_postsGroupByArgs['orderBy'] }
        : { orderBy?: users_saved_postsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, users_saved_postsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsers_saved_postsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users_saved_posts model
   */
  readonly fields: users_saved_postsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users_saved_posts.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__users_saved_postsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user_saving<T extends users_saved_posts$user_savingArgs<ExtArgs> = {}>(args?: Subset<T, users_saved_posts$user_savingArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    saved_post<T extends users_saved_posts$saved_postArgs<ExtArgs> = {}>(args?: Subset<T, users_saved_posts$saved_postArgs<ExtArgs>>): Prisma__postsClient<$Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the users_saved_posts model
   */
  interface users_saved_postsFieldRefs {
    readonly post_saving_id: FieldRef<"users_saved_posts", 'String'>
    readonly saved_at: FieldRef<"users_saved_posts", 'DateTime'>
    readonly user_saving_id: FieldRef<"users_saved_posts", 'String'>
    readonly saved_post_id: FieldRef<"users_saved_posts", 'String'>
  }
    

  // Custom InputTypes
  /**
   * users_saved_posts findUnique
   */
  export type users_saved_postsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users_saved_posts
     */
    select?: users_saved_postsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users_saved_posts
     */
    omit?: users_saved_postsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: users_saved_postsInclude<ExtArgs> | null
    /**
     * Filter, which users_saved_posts to fetch.
     */
    where: users_saved_postsWhereUniqueInput
  }

  /**
   * users_saved_posts findUniqueOrThrow
   */
  export type users_saved_postsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users_saved_posts
     */
    select?: users_saved_postsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users_saved_posts
     */
    omit?: users_saved_postsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: users_saved_postsInclude<ExtArgs> | null
    /**
     * Filter, which users_saved_posts to fetch.
     */
    where: users_saved_postsWhereUniqueInput
  }

  /**
   * users_saved_posts findFirst
   */
  export type users_saved_postsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users_saved_posts
     */
    select?: users_saved_postsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users_saved_posts
     */
    omit?: users_saved_postsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: users_saved_postsInclude<ExtArgs> | null
    /**
     * Filter, which users_saved_posts to fetch.
     */
    where?: users_saved_postsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users_saved_posts to fetch.
     */
    orderBy?: users_saved_postsOrderByWithRelationInput | users_saved_postsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users_saved_posts.
     */
    cursor?: users_saved_postsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users_saved_posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users_saved_posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users_saved_posts.
     */
    distinct?: Users_saved_postsScalarFieldEnum | Users_saved_postsScalarFieldEnum[]
  }

  /**
   * users_saved_posts findFirstOrThrow
   */
  export type users_saved_postsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users_saved_posts
     */
    select?: users_saved_postsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users_saved_posts
     */
    omit?: users_saved_postsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: users_saved_postsInclude<ExtArgs> | null
    /**
     * Filter, which users_saved_posts to fetch.
     */
    where?: users_saved_postsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users_saved_posts to fetch.
     */
    orderBy?: users_saved_postsOrderByWithRelationInput | users_saved_postsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users_saved_posts.
     */
    cursor?: users_saved_postsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users_saved_posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users_saved_posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users_saved_posts.
     */
    distinct?: Users_saved_postsScalarFieldEnum | Users_saved_postsScalarFieldEnum[]
  }

  /**
   * users_saved_posts findMany
   */
  export type users_saved_postsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users_saved_posts
     */
    select?: users_saved_postsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users_saved_posts
     */
    omit?: users_saved_postsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: users_saved_postsInclude<ExtArgs> | null
    /**
     * Filter, which users_saved_posts to fetch.
     */
    where?: users_saved_postsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users_saved_posts to fetch.
     */
    orderBy?: users_saved_postsOrderByWithRelationInput | users_saved_postsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users_saved_posts.
     */
    cursor?: users_saved_postsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users_saved_posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users_saved_posts.
     */
    skip?: number
    distinct?: Users_saved_postsScalarFieldEnum | Users_saved_postsScalarFieldEnum[]
  }

  /**
   * users_saved_posts create
   */
  export type users_saved_postsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users_saved_posts
     */
    select?: users_saved_postsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users_saved_posts
     */
    omit?: users_saved_postsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: users_saved_postsInclude<ExtArgs> | null
    /**
     * The data needed to create a users_saved_posts.
     */
    data?: XOR<users_saved_postsCreateInput, users_saved_postsUncheckedCreateInput>
  }

  /**
   * users_saved_posts createMany
   */
  export type users_saved_postsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users_saved_posts.
     */
    data: users_saved_postsCreateManyInput | users_saved_postsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users_saved_posts createManyAndReturn
   */
  export type users_saved_postsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users_saved_posts
     */
    select?: users_saved_postsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users_saved_posts
     */
    omit?: users_saved_postsOmit<ExtArgs> | null
    /**
     * The data used to create many users_saved_posts.
     */
    data: users_saved_postsCreateManyInput | users_saved_postsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: users_saved_postsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * users_saved_posts update
   */
  export type users_saved_postsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users_saved_posts
     */
    select?: users_saved_postsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users_saved_posts
     */
    omit?: users_saved_postsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: users_saved_postsInclude<ExtArgs> | null
    /**
     * The data needed to update a users_saved_posts.
     */
    data: XOR<users_saved_postsUpdateInput, users_saved_postsUncheckedUpdateInput>
    /**
     * Choose, which users_saved_posts to update.
     */
    where: users_saved_postsWhereUniqueInput
  }

  /**
   * users_saved_posts updateMany
   */
  export type users_saved_postsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users_saved_posts.
     */
    data: XOR<users_saved_postsUpdateManyMutationInput, users_saved_postsUncheckedUpdateManyInput>
    /**
     * Filter which users_saved_posts to update
     */
    where?: users_saved_postsWhereInput
    /**
     * Limit how many users_saved_posts to update.
     */
    limit?: number
  }

  /**
   * users_saved_posts updateManyAndReturn
   */
  export type users_saved_postsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users_saved_posts
     */
    select?: users_saved_postsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users_saved_posts
     */
    omit?: users_saved_postsOmit<ExtArgs> | null
    /**
     * The data used to update users_saved_posts.
     */
    data: XOR<users_saved_postsUpdateManyMutationInput, users_saved_postsUncheckedUpdateManyInput>
    /**
     * Filter which users_saved_posts to update
     */
    where?: users_saved_postsWhereInput
    /**
     * Limit how many users_saved_posts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: users_saved_postsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * users_saved_posts upsert
   */
  export type users_saved_postsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users_saved_posts
     */
    select?: users_saved_postsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users_saved_posts
     */
    omit?: users_saved_postsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: users_saved_postsInclude<ExtArgs> | null
    /**
     * The filter to search for the users_saved_posts to update in case it exists.
     */
    where: users_saved_postsWhereUniqueInput
    /**
     * In case the users_saved_posts found by the `where` argument doesn't exist, create a new users_saved_posts with this data.
     */
    create: XOR<users_saved_postsCreateInput, users_saved_postsUncheckedCreateInput>
    /**
     * In case the users_saved_posts was found with the provided `where` argument, update it with this data.
     */
    update: XOR<users_saved_postsUpdateInput, users_saved_postsUncheckedUpdateInput>
  }

  /**
   * users_saved_posts delete
   */
  export type users_saved_postsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users_saved_posts
     */
    select?: users_saved_postsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users_saved_posts
     */
    omit?: users_saved_postsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: users_saved_postsInclude<ExtArgs> | null
    /**
     * Filter which users_saved_posts to delete.
     */
    where: users_saved_postsWhereUniqueInput
  }

  /**
   * users_saved_posts deleteMany
   */
  export type users_saved_postsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users_saved_posts to delete
     */
    where?: users_saved_postsWhereInput
    /**
     * Limit how many users_saved_posts to delete.
     */
    limit?: number
  }

  /**
   * users_saved_posts.user_saving
   */
  export type users_saved_posts$user_savingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }

  /**
   * users_saved_posts.saved_post
   */
  export type users_saved_posts$saved_postArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts
     */
    select?: postsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the posts
     */
    omit?: postsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postsInclude<ExtArgs> | null
    where?: postsWhereInput
  }

  /**
   * users_saved_posts without action
   */
  export type users_saved_postsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users_saved_posts
     */
    select?: users_saved_postsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users_saved_posts
     */
    omit?: users_saved_postsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: users_saved_postsInclude<ExtArgs> | null
  }


  /**
   * Model comments
   */

  export type AggregateComments = {
    _count: CommentsCountAggregateOutputType | null
    _min: CommentsMinAggregateOutputType | null
    _max: CommentsMaxAggregateOutputType | null
  }

  export type CommentsMinAggregateOutputType = {
    comment_id: string | null
    body: string | null
    created_at: Date | null
    commentator_id: string | null
    commented_post_id: string | null
    parent_comment_id: string | null
  }

  export type CommentsMaxAggregateOutputType = {
    comment_id: string | null
    body: string | null
    created_at: Date | null
    commentator_id: string | null
    commented_post_id: string | null
    parent_comment_id: string | null
  }

  export type CommentsCountAggregateOutputType = {
    comment_id: number
    body: number
    created_at: number
    commentator_id: number
    commented_post_id: number
    parent_comment_id: number
    _all: number
  }


  export type CommentsMinAggregateInputType = {
    comment_id?: true
    body?: true
    created_at?: true
    commentator_id?: true
    commented_post_id?: true
    parent_comment_id?: true
  }

  export type CommentsMaxAggregateInputType = {
    comment_id?: true
    body?: true
    created_at?: true
    commentator_id?: true
    commented_post_id?: true
    parent_comment_id?: true
  }

  export type CommentsCountAggregateInputType = {
    comment_id?: true
    body?: true
    created_at?: true
    commentator_id?: true
    commented_post_id?: true
    parent_comment_id?: true
    _all?: true
  }

  export type CommentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which comments to aggregate.
     */
    where?: commentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of comments to fetch.
     */
    orderBy?: commentsOrderByWithRelationInput | commentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: commentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned comments
    **/
    _count?: true | CommentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommentsMaxAggregateInputType
  }

  export type GetCommentsAggregateType<T extends CommentsAggregateArgs> = {
        [P in keyof T & keyof AggregateComments]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComments[P]>
      : GetScalarType<T[P], AggregateComments[P]>
  }




  export type commentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: commentsWhereInput
    orderBy?: commentsOrderByWithAggregationInput | commentsOrderByWithAggregationInput[]
    by: CommentsScalarFieldEnum[] | CommentsScalarFieldEnum
    having?: commentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommentsCountAggregateInputType | true
    _min?: CommentsMinAggregateInputType
    _max?: CommentsMaxAggregateInputType
  }

  export type CommentsGroupByOutputType = {
    comment_id: string
    body: string
    created_at: Date | null
    commentator_id: string | null
    commented_post_id: string | null
    parent_comment_id: string | null
    _count: CommentsCountAggregateOutputType | null
    _min: CommentsMinAggregateOutputType | null
    _max: CommentsMaxAggregateOutputType | null
  }

  type GetCommentsGroupByPayload<T extends commentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommentsGroupByOutputType[P]>
            : GetScalarType<T[P], CommentsGroupByOutputType[P]>
        }
      >
    >


  export type commentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    comment_id?: boolean
    body?: boolean
    created_at?: boolean
    commentator_id?: boolean
    commented_post_id?: boolean
    parent_comment_id?: boolean
    comment_likers?: boolean | comments$comment_likersArgs<ExtArgs>
    commentator?: boolean | comments$commentatorArgs<ExtArgs>
    commented_post?: boolean | comments$commented_postArgs<ExtArgs>
    parent_coment?: boolean | comments$parent_comentArgs<ExtArgs>
    sub_comments?: boolean | comments$sub_commentsArgs<ExtArgs>
    _count?: boolean | CommentsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comments"]>

  export type commentsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    comment_id?: boolean
    body?: boolean
    created_at?: boolean
    commentator_id?: boolean
    commented_post_id?: boolean
    parent_comment_id?: boolean
    commentator?: boolean | comments$commentatorArgs<ExtArgs>
    commented_post?: boolean | comments$commented_postArgs<ExtArgs>
    parent_coment?: boolean | comments$parent_comentArgs<ExtArgs>
  }, ExtArgs["result"]["comments"]>

  export type commentsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    comment_id?: boolean
    body?: boolean
    created_at?: boolean
    commentator_id?: boolean
    commented_post_id?: boolean
    parent_comment_id?: boolean
    commentator?: boolean | comments$commentatorArgs<ExtArgs>
    commented_post?: boolean | comments$commented_postArgs<ExtArgs>
    parent_coment?: boolean | comments$parent_comentArgs<ExtArgs>
  }, ExtArgs["result"]["comments"]>

  export type commentsSelectScalar = {
    comment_id?: boolean
    body?: boolean
    created_at?: boolean
    commentator_id?: boolean
    commented_post_id?: boolean
    parent_comment_id?: boolean
  }

  export type commentsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"comment_id" | "body" | "created_at" | "commentator_id" | "commented_post_id" | "parent_comment_id", ExtArgs["result"]["comments"]>
  export type commentsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comment_likers?: boolean | comments$comment_likersArgs<ExtArgs>
    commentator?: boolean | comments$commentatorArgs<ExtArgs>
    commented_post?: boolean | comments$commented_postArgs<ExtArgs>
    parent_coment?: boolean | comments$parent_comentArgs<ExtArgs>
    sub_comments?: boolean | comments$sub_commentsArgs<ExtArgs>
    _count?: boolean | CommentsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type commentsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    commentator?: boolean | comments$commentatorArgs<ExtArgs>
    commented_post?: boolean | comments$commented_postArgs<ExtArgs>
    parent_coment?: boolean | comments$parent_comentArgs<ExtArgs>
  }
  export type commentsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    commentator?: boolean | comments$commentatorArgs<ExtArgs>
    commented_post?: boolean | comments$commented_postArgs<ExtArgs>
    parent_coment?: boolean | comments$parent_comentArgs<ExtArgs>
  }

  export type $commentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "comments"
    objects: {
      comment_likers: Prisma.$usersPayload<ExtArgs>[]
      commentator: Prisma.$usersPayload<ExtArgs> | null
      commented_post: Prisma.$postsPayload<ExtArgs> | null
      parent_coment: Prisma.$commentsPayload<ExtArgs> | null
      sub_comments: Prisma.$commentsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      comment_id: string
      body: string
      created_at: Date | null
      commentator_id: string | null
      commented_post_id: string | null
      parent_comment_id: string | null
    }, ExtArgs["result"]["comments"]>
    composites: {}
  }

  type commentsGetPayload<S extends boolean | null | undefined | commentsDefaultArgs> = $Result.GetResult<Prisma.$commentsPayload, S>

  type commentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<commentsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommentsCountAggregateInputType | true
    }

  export interface commentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['comments'], meta: { name: 'comments' } }
    /**
     * Find zero or one Comments that matches the filter.
     * @param {commentsFindUniqueArgs} args - Arguments to find a Comments
     * @example
     * // Get one Comments
     * const comments = await prisma.comments.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends commentsFindUniqueArgs>(args: SelectSubset<T, commentsFindUniqueArgs<ExtArgs>>): Prisma__commentsClient<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Comments that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {commentsFindUniqueOrThrowArgs} args - Arguments to find a Comments
     * @example
     * // Get one Comments
     * const comments = await prisma.comments.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends commentsFindUniqueOrThrowArgs>(args: SelectSubset<T, commentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__commentsClient<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commentsFindFirstArgs} args - Arguments to find a Comments
     * @example
     * // Get one Comments
     * const comments = await prisma.comments.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends commentsFindFirstArgs>(args?: SelectSubset<T, commentsFindFirstArgs<ExtArgs>>): Prisma__commentsClient<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comments that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commentsFindFirstOrThrowArgs} args - Arguments to find a Comments
     * @example
     * // Get one Comments
     * const comments = await prisma.comments.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends commentsFindFirstOrThrowArgs>(args?: SelectSubset<T, commentsFindFirstOrThrowArgs<ExtArgs>>): Prisma__commentsClient<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commentsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comments
     * const comments = await prisma.comments.findMany()
     * 
     * // Get first 10 Comments
     * const comments = await prisma.comments.findMany({ take: 10 })
     * 
     * // Only select the `comment_id`
     * const commentsWithComment_idOnly = await prisma.comments.findMany({ select: { comment_id: true } })
     * 
     */
    findMany<T extends commentsFindManyArgs>(args?: SelectSubset<T, commentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Comments.
     * @param {commentsCreateArgs} args - Arguments to create a Comments.
     * @example
     * // Create one Comments
     * const Comments = await prisma.comments.create({
     *   data: {
     *     // ... data to create a Comments
     *   }
     * })
     * 
     */
    create<T extends commentsCreateArgs>(args: SelectSubset<T, commentsCreateArgs<ExtArgs>>): Prisma__commentsClient<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Comments.
     * @param {commentsCreateManyArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comments = await prisma.comments.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends commentsCreateManyArgs>(args?: SelectSubset<T, commentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Comments and returns the data saved in the database.
     * @param {commentsCreateManyAndReturnArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comments = await prisma.comments.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Comments and only return the `comment_id`
     * const commentsWithComment_idOnly = await prisma.comments.createManyAndReturn({
     *   select: { comment_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends commentsCreateManyAndReturnArgs>(args?: SelectSubset<T, commentsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Comments.
     * @param {commentsDeleteArgs} args - Arguments to delete one Comments.
     * @example
     * // Delete one Comments
     * const Comments = await prisma.comments.delete({
     *   where: {
     *     // ... filter to delete one Comments
     *   }
     * })
     * 
     */
    delete<T extends commentsDeleteArgs>(args: SelectSubset<T, commentsDeleteArgs<ExtArgs>>): Prisma__commentsClient<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Comments.
     * @param {commentsUpdateArgs} args - Arguments to update one Comments.
     * @example
     * // Update one Comments
     * const comments = await prisma.comments.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends commentsUpdateArgs>(args: SelectSubset<T, commentsUpdateArgs<ExtArgs>>): Prisma__commentsClient<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Comments.
     * @param {commentsDeleteManyArgs} args - Arguments to filter Comments to delete.
     * @example
     * // Delete a few Comments
     * const { count } = await prisma.comments.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends commentsDeleteManyArgs>(args?: SelectSubset<T, commentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comments
     * const comments = await prisma.comments.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends commentsUpdateManyArgs>(args: SelectSubset<T, commentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments and returns the data updated in the database.
     * @param {commentsUpdateManyAndReturnArgs} args - Arguments to update many Comments.
     * @example
     * // Update many Comments
     * const comments = await prisma.comments.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Comments and only return the `comment_id`
     * const commentsWithComment_idOnly = await prisma.comments.updateManyAndReturn({
     *   select: { comment_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends commentsUpdateManyAndReturnArgs>(args: SelectSubset<T, commentsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Comments.
     * @param {commentsUpsertArgs} args - Arguments to update or create a Comments.
     * @example
     * // Update or create a Comments
     * const comments = await prisma.comments.upsert({
     *   create: {
     *     // ... data to create a Comments
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comments we want to update
     *   }
     * })
     */
    upsert<T extends commentsUpsertArgs>(args: SelectSubset<T, commentsUpsertArgs<ExtArgs>>): Prisma__commentsClient<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commentsCountArgs} args - Arguments to filter Comments to count.
     * @example
     * // Count the number of Comments
     * const count = await prisma.comments.count({
     *   where: {
     *     // ... the filter for the Comments we want to count
     *   }
     * })
    **/
    count<T extends commentsCountArgs>(
      args?: Subset<T, commentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CommentsAggregateArgs>(args: Subset<T, CommentsAggregateArgs>): Prisma.PrismaPromise<GetCommentsAggregateType<T>>

    /**
     * Group by Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commentsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends commentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: commentsGroupByArgs['orderBy'] }
        : { orderBy?: commentsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, commentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the comments model
   */
  readonly fields: commentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for comments.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__commentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    comment_likers<T extends comments$comment_likersArgs<ExtArgs> = {}>(args?: Subset<T, comments$comment_likersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    commentator<T extends comments$commentatorArgs<ExtArgs> = {}>(args?: Subset<T, comments$commentatorArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    commented_post<T extends comments$commented_postArgs<ExtArgs> = {}>(args?: Subset<T, comments$commented_postArgs<ExtArgs>>): Prisma__postsClient<$Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    parent_coment<T extends comments$parent_comentArgs<ExtArgs> = {}>(args?: Subset<T, comments$parent_comentArgs<ExtArgs>>): Prisma__commentsClient<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    sub_comments<T extends comments$sub_commentsArgs<ExtArgs> = {}>(args?: Subset<T, comments$sub_commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the comments model
   */
  interface commentsFieldRefs {
    readonly comment_id: FieldRef<"comments", 'String'>
    readonly body: FieldRef<"comments", 'String'>
    readonly created_at: FieldRef<"comments", 'DateTime'>
    readonly commentator_id: FieldRef<"comments", 'String'>
    readonly commented_post_id: FieldRef<"comments", 'String'>
    readonly parent_comment_id: FieldRef<"comments", 'String'>
  }
    

  // Custom InputTypes
  /**
   * comments findUnique
   */
  export type commentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsInclude<ExtArgs> | null
    /**
     * Filter, which comments to fetch.
     */
    where: commentsWhereUniqueInput
  }

  /**
   * comments findUniqueOrThrow
   */
  export type commentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsInclude<ExtArgs> | null
    /**
     * Filter, which comments to fetch.
     */
    where: commentsWhereUniqueInput
  }

  /**
   * comments findFirst
   */
  export type commentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsInclude<ExtArgs> | null
    /**
     * Filter, which comments to fetch.
     */
    where?: commentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of comments to fetch.
     */
    orderBy?: commentsOrderByWithRelationInput | commentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for comments.
     */
    cursor?: commentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of comments.
     */
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }

  /**
   * comments findFirstOrThrow
   */
  export type commentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsInclude<ExtArgs> | null
    /**
     * Filter, which comments to fetch.
     */
    where?: commentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of comments to fetch.
     */
    orderBy?: commentsOrderByWithRelationInput | commentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for comments.
     */
    cursor?: commentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of comments.
     */
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }

  /**
   * comments findMany
   */
  export type commentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsInclude<ExtArgs> | null
    /**
     * Filter, which comments to fetch.
     */
    where?: commentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of comments to fetch.
     */
    orderBy?: commentsOrderByWithRelationInput | commentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing comments.
     */
    cursor?: commentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` comments.
     */
    skip?: number
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }

  /**
   * comments create
   */
  export type commentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsInclude<ExtArgs> | null
    /**
     * The data needed to create a comments.
     */
    data: XOR<commentsCreateInput, commentsUncheckedCreateInput>
  }

  /**
   * comments createMany
   */
  export type commentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many comments.
     */
    data: commentsCreateManyInput | commentsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * comments createManyAndReturn
   */
  export type commentsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * The data used to create many comments.
     */
    data: commentsCreateManyInput | commentsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * comments update
   */
  export type commentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsInclude<ExtArgs> | null
    /**
     * The data needed to update a comments.
     */
    data: XOR<commentsUpdateInput, commentsUncheckedUpdateInput>
    /**
     * Choose, which comments to update.
     */
    where: commentsWhereUniqueInput
  }

  /**
   * comments updateMany
   */
  export type commentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update comments.
     */
    data: XOR<commentsUpdateManyMutationInput, commentsUncheckedUpdateManyInput>
    /**
     * Filter which comments to update
     */
    where?: commentsWhereInput
    /**
     * Limit how many comments to update.
     */
    limit?: number
  }

  /**
   * comments updateManyAndReturn
   */
  export type commentsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * The data used to update comments.
     */
    data: XOR<commentsUpdateManyMutationInput, commentsUncheckedUpdateManyInput>
    /**
     * Filter which comments to update
     */
    where?: commentsWhereInput
    /**
     * Limit how many comments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * comments upsert
   */
  export type commentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsInclude<ExtArgs> | null
    /**
     * The filter to search for the comments to update in case it exists.
     */
    where: commentsWhereUniqueInput
    /**
     * In case the comments found by the `where` argument doesn't exist, create a new comments with this data.
     */
    create: XOR<commentsCreateInput, commentsUncheckedCreateInput>
    /**
     * In case the comments was found with the provided `where` argument, update it with this data.
     */
    update: XOR<commentsUpdateInput, commentsUncheckedUpdateInput>
  }

  /**
   * comments delete
   */
  export type commentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsInclude<ExtArgs> | null
    /**
     * Filter which comments to delete.
     */
    where: commentsWhereUniqueInput
  }

  /**
   * comments deleteMany
   */
  export type commentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which comments to delete
     */
    where?: commentsWhereInput
    /**
     * Limit how many comments to delete.
     */
    limit?: number
  }

  /**
   * comments.comment_likers
   */
  export type comments$comment_likersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    cursor?: usersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * comments.commentator
   */
  export type comments$commentatorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }

  /**
   * comments.commented_post
   */
  export type comments$commented_postArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts
     */
    select?: postsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the posts
     */
    omit?: postsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postsInclude<ExtArgs> | null
    where?: postsWhereInput
  }

  /**
   * comments.parent_coment
   */
  export type comments$parent_comentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsInclude<ExtArgs> | null
    where?: commentsWhereInput
  }

  /**
   * comments.sub_comments
   */
  export type comments$sub_commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsInclude<ExtArgs> | null
    where?: commentsWhereInput
    orderBy?: commentsOrderByWithRelationInput | commentsOrderByWithRelationInput[]
    cursor?: commentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }

  /**
   * comments without action
   */
  export type commentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsInclude<ExtArgs> | null
  }


  /**
   * Model medias
   */

  export type AggregateMedias = {
    _count: MediasCountAggregateOutputType | null
    _avg: MediasAvgAggregateOutputType | null
    _sum: MediasSumAggregateOutputType | null
    _min: MediasMinAggregateOutputType | null
    _max: MediasMaxAggregateOutputType | null
  }

  export type MediasAvgAggregateOutputType = {
    size: number | null
  }

  export type MediasSumAggregateOutputType = {
    size: bigint | null
  }

  export type MediasMinAggregateOutputType = {
    media_id: string | null
    fileType: $Enums.file_type_enum | null
    encoding: string | null
    mimetype: string | null
    filename: string | null
    fileUrl: string | null
    path: string | null
    size: bigint | null
    media_post_id: string | null
  }

  export type MediasMaxAggregateOutputType = {
    media_id: string | null
    fileType: $Enums.file_type_enum | null
    encoding: string | null
    mimetype: string | null
    filename: string | null
    fileUrl: string | null
    path: string | null
    size: bigint | null
    media_post_id: string | null
  }

  export type MediasCountAggregateOutputType = {
    media_id: number
    fileType: number
    encoding: number
    mimetype: number
    filename: number
    fileUrl: number
    path: number
    size: number
    media_post_id: number
    _all: number
  }


  export type MediasAvgAggregateInputType = {
    size?: true
  }

  export type MediasSumAggregateInputType = {
    size?: true
  }

  export type MediasMinAggregateInputType = {
    media_id?: true
    fileType?: true
    encoding?: true
    mimetype?: true
    filename?: true
    fileUrl?: true
    path?: true
    size?: true
    media_post_id?: true
  }

  export type MediasMaxAggregateInputType = {
    media_id?: true
    fileType?: true
    encoding?: true
    mimetype?: true
    filename?: true
    fileUrl?: true
    path?: true
    size?: true
    media_post_id?: true
  }

  export type MediasCountAggregateInputType = {
    media_id?: true
    fileType?: true
    encoding?: true
    mimetype?: true
    filename?: true
    fileUrl?: true
    path?: true
    size?: true
    media_post_id?: true
    _all?: true
  }

  export type MediasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which medias to aggregate.
     */
    where?: mediasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of medias to fetch.
     */
    orderBy?: mediasOrderByWithRelationInput | mediasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: mediasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` medias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` medias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned medias
    **/
    _count?: true | MediasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MediasAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MediasSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MediasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MediasMaxAggregateInputType
  }

  export type GetMediasAggregateType<T extends MediasAggregateArgs> = {
        [P in keyof T & keyof AggregateMedias]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMedias[P]>
      : GetScalarType<T[P], AggregateMedias[P]>
  }




  export type mediasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: mediasWhereInput
    orderBy?: mediasOrderByWithAggregationInput | mediasOrderByWithAggregationInput[]
    by: MediasScalarFieldEnum[] | MediasScalarFieldEnum
    having?: mediasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MediasCountAggregateInputType | true
    _avg?: MediasAvgAggregateInputType
    _sum?: MediasSumAggregateInputType
    _min?: MediasMinAggregateInputType
    _max?: MediasMaxAggregateInputType
  }

  export type MediasGroupByOutputType = {
    media_id: string
    fileType: $Enums.file_type_enum
    encoding: string
    mimetype: string
    filename: string
    fileUrl: string
    path: string
    size: bigint
    media_post_id: string | null
    _count: MediasCountAggregateOutputType | null
    _avg: MediasAvgAggregateOutputType | null
    _sum: MediasSumAggregateOutputType | null
    _min: MediasMinAggregateOutputType | null
    _max: MediasMaxAggregateOutputType | null
  }

  type GetMediasGroupByPayload<T extends mediasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MediasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MediasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MediasGroupByOutputType[P]>
            : GetScalarType<T[P], MediasGroupByOutputType[P]>
        }
      >
    >


  export type mediasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    media_id?: boolean
    fileType?: boolean
    encoding?: boolean
    mimetype?: boolean
    filename?: boolean
    fileUrl?: boolean
    path?: boolean
    size?: boolean
    media_post_id?: boolean
    media_post?: boolean | medias$media_postArgs<ExtArgs>
  }, ExtArgs["result"]["medias"]>

  export type mediasSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    media_id?: boolean
    fileType?: boolean
    encoding?: boolean
    mimetype?: boolean
    filename?: boolean
    fileUrl?: boolean
    path?: boolean
    size?: boolean
    media_post_id?: boolean
    media_post?: boolean | medias$media_postArgs<ExtArgs>
  }, ExtArgs["result"]["medias"]>

  export type mediasSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    media_id?: boolean
    fileType?: boolean
    encoding?: boolean
    mimetype?: boolean
    filename?: boolean
    fileUrl?: boolean
    path?: boolean
    size?: boolean
    media_post_id?: boolean
    media_post?: boolean | medias$media_postArgs<ExtArgs>
  }, ExtArgs["result"]["medias"]>

  export type mediasSelectScalar = {
    media_id?: boolean
    fileType?: boolean
    encoding?: boolean
    mimetype?: boolean
    filename?: boolean
    fileUrl?: boolean
    path?: boolean
    size?: boolean
    media_post_id?: boolean
  }

  export type mediasOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"media_id" | "fileType" | "encoding" | "mimetype" | "filename" | "fileUrl" | "path" | "size" | "media_post_id", ExtArgs["result"]["medias"]>
  export type mediasInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    media_post?: boolean | medias$media_postArgs<ExtArgs>
  }
  export type mediasIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    media_post?: boolean | medias$media_postArgs<ExtArgs>
  }
  export type mediasIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    media_post?: boolean | medias$media_postArgs<ExtArgs>
  }

  export type $mediasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "medias"
    objects: {
      media_post: Prisma.$postsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      media_id: string
      fileType: $Enums.file_type_enum
      encoding: string
      mimetype: string
      filename: string
      fileUrl: string
      path: string
      size: bigint
      media_post_id: string | null
    }, ExtArgs["result"]["medias"]>
    composites: {}
  }

  type mediasGetPayload<S extends boolean | null | undefined | mediasDefaultArgs> = $Result.GetResult<Prisma.$mediasPayload, S>

  type mediasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<mediasFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MediasCountAggregateInputType | true
    }

  export interface mediasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['medias'], meta: { name: 'medias' } }
    /**
     * Find zero or one Medias that matches the filter.
     * @param {mediasFindUniqueArgs} args - Arguments to find a Medias
     * @example
     * // Get one Medias
     * const medias = await prisma.medias.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends mediasFindUniqueArgs>(args: SelectSubset<T, mediasFindUniqueArgs<ExtArgs>>): Prisma__mediasClient<$Result.GetResult<Prisma.$mediasPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Medias that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {mediasFindUniqueOrThrowArgs} args - Arguments to find a Medias
     * @example
     * // Get one Medias
     * const medias = await prisma.medias.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends mediasFindUniqueOrThrowArgs>(args: SelectSubset<T, mediasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__mediasClient<$Result.GetResult<Prisma.$mediasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Medias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mediasFindFirstArgs} args - Arguments to find a Medias
     * @example
     * // Get one Medias
     * const medias = await prisma.medias.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends mediasFindFirstArgs>(args?: SelectSubset<T, mediasFindFirstArgs<ExtArgs>>): Prisma__mediasClient<$Result.GetResult<Prisma.$mediasPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Medias that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mediasFindFirstOrThrowArgs} args - Arguments to find a Medias
     * @example
     * // Get one Medias
     * const medias = await prisma.medias.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends mediasFindFirstOrThrowArgs>(args?: SelectSubset<T, mediasFindFirstOrThrowArgs<ExtArgs>>): Prisma__mediasClient<$Result.GetResult<Prisma.$mediasPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Medias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mediasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Medias
     * const medias = await prisma.medias.findMany()
     * 
     * // Get first 10 Medias
     * const medias = await prisma.medias.findMany({ take: 10 })
     * 
     * // Only select the `media_id`
     * const mediasWithMedia_idOnly = await prisma.medias.findMany({ select: { media_id: true } })
     * 
     */
    findMany<T extends mediasFindManyArgs>(args?: SelectSubset<T, mediasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$mediasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Medias.
     * @param {mediasCreateArgs} args - Arguments to create a Medias.
     * @example
     * // Create one Medias
     * const Medias = await prisma.medias.create({
     *   data: {
     *     // ... data to create a Medias
     *   }
     * })
     * 
     */
    create<T extends mediasCreateArgs>(args: SelectSubset<T, mediasCreateArgs<ExtArgs>>): Prisma__mediasClient<$Result.GetResult<Prisma.$mediasPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Medias.
     * @param {mediasCreateManyArgs} args - Arguments to create many Medias.
     * @example
     * // Create many Medias
     * const medias = await prisma.medias.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends mediasCreateManyArgs>(args?: SelectSubset<T, mediasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Medias and returns the data saved in the database.
     * @param {mediasCreateManyAndReturnArgs} args - Arguments to create many Medias.
     * @example
     * // Create many Medias
     * const medias = await prisma.medias.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Medias and only return the `media_id`
     * const mediasWithMedia_idOnly = await prisma.medias.createManyAndReturn({
     *   select: { media_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends mediasCreateManyAndReturnArgs>(args?: SelectSubset<T, mediasCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$mediasPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Medias.
     * @param {mediasDeleteArgs} args - Arguments to delete one Medias.
     * @example
     * // Delete one Medias
     * const Medias = await prisma.medias.delete({
     *   where: {
     *     // ... filter to delete one Medias
     *   }
     * })
     * 
     */
    delete<T extends mediasDeleteArgs>(args: SelectSubset<T, mediasDeleteArgs<ExtArgs>>): Prisma__mediasClient<$Result.GetResult<Prisma.$mediasPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Medias.
     * @param {mediasUpdateArgs} args - Arguments to update one Medias.
     * @example
     * // Update one Medias
     * const medias = await prisma.medias.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends mediasUpdateArgs>(args: SelectSubset<T, mediasUpdateArgs<ExtArgs>>): Prisma__mediasClient<$Result.GetResult<Prisma.$mediasPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Medias.
     * @param {mediasDeleteManyArgs} args - Arguments to filter Medias to delete.
     * @example
     * // Delete a few Medias
     * const { count } = await prisma.medias.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends mediasDeleteManyArgs>(args?: SelectSubset<T, mediasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Medias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mediasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Medias
     * const medias = await prisma.medias.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends mediasUpdateManyArgs>(args: SelectSubset<T, mediasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Medias and returns the data updated in the database.
     * @param {mediasUpdateManyAndReturnArgs} args - Arguments to update many Medias.
     * @example
     * // Update many Medias
     * const medias = await prisma.medias.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Medias and only return the `media_id`
     * const mediasWithMedia_idOnly = await prisma.medias.updateManyAndReturn({
     *   select: { media_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends mediasUpdateManyAndReturnArgs>(args: SelectSubset<T, mediasUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$mediasPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Medias.
     * @param {mediasUpsertArgs} args - Arguments to update or create a Medias.
     * @example
     * // Update or create a Medias
     * const medias = await prisma.medias.upsert({
     *   create: {
     *     // ... data to create a Medias
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Medias we want to update
     *   }
     * })
     */
    upsert<T extends mediasUpsertArgs>(args: SelectSubset<T, mediasUpsertArgs<ExtArgs>>): Prisma__mediasClient<$Result.GetResult<Prisma.$mediasPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Medias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mediasCountArgs} args - Arguments to filter Medias to count.
     * @example
     * // Count the number of Medias
     * const count = await prisma.medias.count({
     *   where: {
     *     // ... the filter for the Medias we want to count
     *   }
     * })
    **/
    count<T extends mediasCountArgs>(
      args?: Subset<T, mediasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MediasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Medias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MediasAggregateArgs>(args: Subset<T, MediasAggregateArgs>): Prisma.PrismaPromise<GetMediasAggregateType<T>>

    /**
     * Group by Medias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mediasGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends mediasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: mediasGroupByArgs['orderBy'] }
        : { orderBy?: mediasGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, mediasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMediasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the medias model
   */
  readonly fields: mediasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for medias.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__mediasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    media_post<T extends medias$media_postArgs<ExtArgs> = {}>(args?: Subset<T, medias$media_postArgs<ExtArgs>>): Prisma__postsClient<$Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the medias model
   */
  interface mediasFieldRefs {
    readonly media_id: FieldRef<"medias", 'String'>
    readonly fileType: FieldRef<"medias", 'file_type_enum'>
    readonly encoding: FieldRef<"medias", 'String'>
    readonly mimetype: FieldRef<"medias", 'String'>
    readonly filename: FieldRef<"medias", 'String'>
    readonly fileUrl: FieldRef<"medias", 'String'>
    readonly path: FieldRef<"medias", 'String'>
    readonly size: FieldRef<"medias", 'BigInt'>
    readonly media_post_id: FieldRef<"medias", 'String'>
  }
    

  // Custom InputTypes
  /**
   * medias findUnique
   */
  export type mediasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the medias
     */
    select?: mediasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the medias
     */
    omit?: mediasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mediasInclude<ExtArgs> | null
    /**
     * Filter, which medias to fetch.
     */
    where: mediasWhereUniqueInput
  }

  /**
   * medias findUniqueOrThrow
   */
  export type mediasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the medias
     */
    select?: mediasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the medias
     */
    omit?: mediasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mediasInclude<ExtArgs> | null
    /**
     * Filter, which medias to fetch.
     */
    where: mediasWhereUniqueInput
  }

  /**
   * medias findFirst
   */
  export type mediasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the medias
     */
    select?: mediasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the medias
     */
    omit?: mediasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mediasInclude<ExtArgs> | null
    /**
     * Filter, which medias to fetch.
     */
    where?: mediasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of medias to fetch.
     */
    orderBy?: mediasOrderByWithRelationInput | mediasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for medias.
     */
    cursor?: mediasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` medias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` medias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of medias.
     */
    distinct?: MediasScalarFieldEnum | MediasScalarFieldEnum[]
  }

  /**
   * medias findFirstOrThrow
   */
  export type mediasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the medias
     */
    select?: mediasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the medias
     */
    omit?: mediasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mediasInclude<ExtArgs> | null
    /**
     * Filter, which medias to fetch.
     */
    where?: mediasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of medias to fetch.
     */
    orderBy?: mediasOrderByWithRelationInput | mediasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for medias.
     */
    cursor?: mediasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` medias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` medias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of medias.
     */
    distinct?: MediasScalarFieldEnum | MediasScalarFieldEnum[]
  }

  /**
   * medias findMany
   */
  export type mediasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the medias
     */
    select?: mediasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the medias
     */
    omit?: mediasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mediasInclude<ExtArgs> | null
    /**
     * Filter, which medias to fetch.
     */
    where?: mediasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of medias to fetch.
     */
    orderBy?: mediasOrderByWithRelationInput | mediasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing medias.
     */
    cursor?: mediasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` medias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` medias.
     */
    skip?: number
    distinct?: MediasScalarFieldEnum | MediasScalarFieldEnum[]
  }

  /**
   * medias create
   */
  export type mediasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the medias
     */
    select?: mediasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the medias
     */
    omit?: mediasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mediasInclude<ExtArgs> | null
    /**
     * The data needed to create a medias.
     */
    data: XOR<mediasCreateInput, mediasUncheckedCreateInput>
  }

  /**
   * medias createMany
   */
  export type mediasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many medias.
     */
    data: mediasCreateManyInput | mediasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * medias createManyAndReturn
   */
  export type mediasCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the medias
     */
    select?: mediasSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the medias
     */
    omit?: mediasOmit<ExtArgs> | null
    /**
     * The data used to create many medias.
     */
    data: mediasCreateManyInput | mediasCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mediasIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * medias update
   */
  export type mediasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the medias
     */
    select?: mediasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the medias
     */
    omit?: mediasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mediasInclude<ExtArgs> | null
    /**
     * The data needed to update a medias.
     */
    data: XOR<mediasUpdateInput, mediasUncheckedUpdateInput>
    /**
     * Choose, which medias to update.
     */
    where: mediasWhereUniqueInput
  }

  /**
   * medias updateMany
   */
  export type mediasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update medias.
     */
    data: XOR<mediasUpdateManyMutationInput, mediasUncheckedUpdateManyInput>
    /**
     * Filter which medias to update
     */
    where?: mediasWhereInput
    /**
     * Limit how many medias to update.
     */
    limit?: number
  }

  /**
   * medias updateManyAndReturn
   */
  export type mediasUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the medias
     */
    select?: mediasSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the medias
     */
    omit?: mediasOmit<ExtArgs> | null
    /**
     * The data used to update medias.
     */
    data: XOR<mediasUpdateManyMutationInput, mediasUncheckedUpdateManyInput>
    /**
     * Filter which medias to update
     */
    where?: mediasWhereInput
    /**
     * Limit how many medias to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mediasIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * medias upsert
   */
  export type mediasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the medias
     */
    select?: mediasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the medias
     */
    omit?: mediasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mediasInclude<ExtArgs> | null
    /**
     * The filter to search for the medias to update in case it exists.
     */
    where: mediasWhereUniqueInput
    /**
     * In case the medias found by the `where` argument doesn't exist, create a new medias with this data.
     */
    create: XOR<mediasCreateInput, mediasUncheckedCreateInput>
    /**
     * In case the medias was found with the provided `where` argument, update it with this data.
     */
    update: XOR<mediasUpdateInput, mediasUncheckedUpdateInput>
  }

  /**
   * medias delete
   */
  export type mediasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the medias
     */
    select?: mediasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the medias
     */
    omit?: mediasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mediasInclude<ExtArgs> | null
    /**
     * Filter which medias to delete.
     */
    where: mediasWhereUniqueInput
  }

  /**
   * medias deleteMany
   */
  export type mediasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which medias to delete
     */
    where?: mediasWhereInput
    /**
     * Limit how many medias to delete.
     */
    limit?: number
  }

  /**
   * medias.media_post
   */
  export type medias$media_postArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts
     */
    select?: postsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the posts
     */
    omit?: postsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postsInclude<ExtArgs> | null
    where?: postsWhereInput
  }

  /**
   * medias without action
   */
  export type mediasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the medias
     */
    select?: mediasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the medias
     */
    omit?: mediasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mediasInclude<ExtArgs> | null
  }


  /**
   * Model attachments
   */

  export type AggregateAttachments = {
    _count: AttachmentsCountAggregateOutputType | null
    _min: AttachmentsMinAggregateOutputType | null
    _max: AttachmentsMaxAggregateOutputType | null
  }

  export type AttachmentsMinAggregateOutputType = {
    attachment_id: string | null
    message_id: string | null
    file_url: string | null
    file_type: $Enums.file_type_enum | null
    created_at: Date | null
  }

  export type AttachmentsMaxAggregateOutputType = {
    attachment_id: string | null
    message_id: string | null
    file_url: string | null
    file_type: $Enums.file_type_enum | null
    created_at: Date | null
  }

  export type AttachmentsCountAggregateOutputType = {
    attachment_id: number
    message_id: number
    file_url: number
    file_type: number
    created_at: number
    _all: number
  }


  export type AttachmentsMinAggregateInputType = {
    attachment_id?: true
    message_id?: true
    file_url?: true
    file_type?: true
    created_at?: true
  }

  export type AttachmentsMaxAggregateInputType = {
    attachment_id?: true
    message_id?: true
    file_url?: true
    file_type?: true
    created_at?: true
  }

  export type AttachmentsCountAggregateInputType = {
    attachment_id?: true
    message_id?: true
    file_url?: true
    file_type?: true
    created_at?: true
    _all?: true
  }

  export type AttachmentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which attachments to aggregate.
     */
    where?: attachmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of attachments to fetch.
     */
    orderBy?: attachmentsOrderByWithRelationInput | attachmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: attachmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` attachments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` attachments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned attachments
    **/
    _count?: true | AttachmentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AttachmentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AttachmentsMaxAggregateInputType
  }

  export type GetAttachmentsAggregateType<T extends AttachmentsAggregateArgs> = {
        [P in keyof T & keyof AggregateAttachments]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAttachments[P]>
      : GetScalarType<T[P], AggregateAttachments[P]>
  }




  export type attachmentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: attachmentsWhereInput
    orderBy?: attachmentsOrderByWithAggregationInput | attachmentsOrderByWithAggregationInput[]
    by: AttachmentsScalarFieldEnum[] | AttachmentsScalarFieldEnum
    having?: attachmentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AttachmentsCountAggregateInputType | true
    _min?: AttachmentsMinAggregateInputType
    _max?: AttachmentsMaxAggregateInputType
  }

  export type AttachmentsGroupByOutputType = {
    attachment_id: string
    message_id: string
    file_url: string
    file_type: $Enums.file_type_enum | null
    created_at: Date | null
    _count: AttachmentsCountAggregateOutputType | null
    _min: AttachmentsMinAggregateOutputType | null
    _max: AttachmentsMaxAggregateOutputType | null
  }

  type GetAttachmentsGroupByPayload<T extends attachmentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AttachmentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AttachmentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AttachmentsGroupByOutputType[P]>
            : GetScalarType<T[P], AttachmentsGroupByOutputType[P]>
        }
      >
    >


  export type attachmentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    attachment_id?: boolean
    message_id?: boolean
    file_url?: boolean
    file_type?: boolean
    created_at?: boolean
    messages?: boolean | messagesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attachments"]>

  export type attachmentsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    attachment_id?: boolean
    message_id?: boolean
    file_url?: boolean
    file_type?: boolean
    created_at?: boolean
    messages?: boolean | messagesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attachments"]>

  export type attachmentsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    attachment_id?: boolean
    message_id?: boolean
    file_url?: boolean
    file_type?: boolean
    created_at?: boolean
    messages?: boolean | messagesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attachments"]>

  export type attachmentsSelectScalar = {
    attachment_id?: boolean
    message_id?: boolean
    file_url?: boolean
    file_type?: boolean
    created_at?: boolean
  }

  export type attachmentsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"attachment_id" | "message_id" | "file_url" | "file_type" | "created_at", ExtArgs["result"]["attachments"]>
  export type attachmentsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    messages?: boolean | messagesDefaultArgs<ExtArgs>
  }
  export type attachmentsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    messages?: boolean | messagesDefaultArgs<ExtArgs>
  }
  export type attachmentsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    messages?: boolean | messagesDefaultArgs<ExtArgs>
  }

  export type $attachmentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "attachments"
    objects: {
      messages: Prisma.$messagesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      attachment_id: string
      message_id: string
      file_url: string
      file_type: $Enums.file_type_enum | null
      created_at: Date | null
    }, ExtArgs["result"]["attachments"]>
    composites: {}
  }

  type attachmentsGetPayload<S extends boolean | null | undefined | attachmentsDefaultArgs> = $Result.GetResult<Prisma.$attachmentsPayload, S>

  type attachmentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<attachmentsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AttachmentsCountAggregateInputType | true
    }

  export interface attachmentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['attachments'], meta: { name: 'attachments' } }
    /**
     * Find zero or one Attachments that matches the filter.
     * @param {attachmentsFindUniqueArgs} args - Arguments to find a Attachments
     * @example
     * // Get one Attachments
     * const attachments = await prisma.attachments.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends attachmentsFindUniqueArgs>(args: SelectSubset<T, attachmentsFindUniqueArgs<ExtArgs>>): Prisma__attachmentsClient<$Result.GetResult<Prisma.$attachmentsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Attachments that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {attachmentsFindUniqueOrThrowArgs} args - Arguments to find a Attachments
     * @example
     * // Get one Attachments
     * const attachments = await prisma.attachments.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends attachmentsFindUniqueOrThrowArgs>(args: SelectSubset<T, attachmentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__attachmentsClient<$Result.GetResult<Prisma.$attachmentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Attachments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {attachmentsFindFirstArgs} args - Arguments to find a Attachments
     * @example
     * // Get one Attachments
     * const attachments = await prisma.attachments.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends attachmentsFindFirstArgs>(args?: SelectSubset<T, attachmentsFindFirstArgs<ExtArgs>>): Prisma__attachmentsClient<$Result.GetResult<Prisma.$attachmentsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Attachments that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {attachmentsFindFirstOrThrowArgs} args - Arguments to find a Attachments
     * @example
     * // Get one Attachments
     * const attachments = await prisma.attachments.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends attachmentsFindFirstOrThrowArgs>(args?: SelectSubset<T, attachmentsFindFirstOrThrowArgs<ExtArgs>>): Prisma__attachmentsClient<$Result.GetResult<Prisma.$attachmentsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Attachments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {attachmentsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Attachments
     * const attachments = await prisma.attachments.findMany()
     * 
     * // Get first 10 Attachments
     * const attachments = await prisma.attachments.findMany({ take: 10 })
     * 
     * // Only select the `attachment_id`
     * const attachmentsWithAttachment_idOnly = await prisma.attachments.findMany({ select: { attachment_id: true } })
     * 
     */
    findMany<T extends attachmentsFindManyArgs>(args?: SelectSubset<T, attachmentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$attachmentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Attachments.
     * @param {attachmentsCreateArgs} args - Arguments to create a Attachments.
     * @example
     * // Create one Attachments
     * const Attachments = await prisma.attachments.create({
     *   data: {
     *     // ... data to create a Attachments
     *   }
     * })
     * 
     */
    create<T extends attachmentsCreateArgs>(args: SelectSubset<T, attachmentsCreateArgs<ExtArgs>>): Prisma__attachmentsClient<$Result.GetResult<Prisma.$attachmentsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Attachments.
     * @param {attachmentsCreateManyArgs} args - Arguments to create many Attachments.
     * @example
     * // Create many Attachments
     * const attachments = await prisma.attachments.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends attachmentsCreateManyArgs>(args?: SelectSubset<T, attachmentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Attachments and returns the data saved in the database.
     * @param {attachmentsCreateManyAndReturnArgs} args - Arguments to create many Attachments.
     * @example
     * // Create many Attachments
     * const attachments = await prisma.attachments.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Attachments and only return the `attachment_id`
     * const attachmentsWithAttachment_idOnly = await prisma.attachments.createManyAndReturn({
     *   select: { attachment_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends attachmentsCreateManyAndReturnArgs>(args?: SelectSubset<T, attachmentsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$attachmentsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Attachments.
     * @param {attachmentsDeleteArgs} args - Arguments to delete one Attachments.
     * @example
     * // Delete one Attachments
     * const Attachments = await prisma.attachments.delete({
     *   where: {
     *     // ... filter to delete one Attachments
     *   }
     * })
     * 
     */
    delete<T extends attachmentsDeleteArgs>(args: SelectSubset<T, attachmentsDeleteArgs<ExtArgs>>): Prisma__attachmentsClient<$Result.GetResult<Prisma.$attachmentsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Attachments.
     * @param {attachmentsUpdateArgs} args - Arguments to update one Attachments.
     * @example
     * // Update one Attachments
     * const attachments = await prisma.attachments.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends attachmentsUpdateArgs>(args: SelectSubset<T, attachmentsUpdateArgs<ExtArgs>>): Prisma__attachmentsClient<$Result.GetResult<Prisma.$attachmentsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Attachments.
     * @param {attachmentsDeleteManyArgs} args - Arguments to filter Attachments to delete.
     * @example
     * // Delete a few Attachments
     * const { count } = await prisma.attachments.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends attachmentsDeleteManyArgs>(args?: SelectSubset<T, attachmentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Attachments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {attachmentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Attachments
     * const attachments = await prisma.attachments.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends attachmentsUpdateManyArgs>(args: SelectSubset<T, attachmentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Attachments and returns the data updated in the database.
     * @param {attachmentsUpdateManyAndReturnArgs} args - Arguments to update many Attachments.
     * @example
     * // Update many Attachments
     * const attachments = await prisma.attachments.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Attachments and only return the `attachment_id`
     * const attachmentsWithAttachment_idOnly = await prisma.attachments.updateManyAndReturn({
     *   select: { attachment_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends attachmentsUpdateManyAndReturnArgs>(args: SelectSubset<T, attachmentsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$attachmentsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Attachments.
     * @param {attachmentsUpsertArgs} args - Arguments to update or create a Attachments.
     * @example
     * // Update or create a Attachments
     * const attachments = await prisma.attachments.upsert({
     *   create: {
     *     // ... data to create a Attachments
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Attachments we want to update
     *   }
     * })
     */
    upsert<T extends attachmentsUpsertArgs>(args: SelectSubset<T, attachmentsUpsertArgs<ExtArgs>>): Prisma__attachmentsClient<$Result.GetResult<Prisma.$attachmentsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Attachments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {attachmentsCountArgs} args - Arguments to filter Attachments to count.
     * @example
     * // Count the number of Attachments
     * const count = await prisma.attachments.count({
     *   where: {
     *     // ... the filter for the Attachments we want to count
     *   }
     * })
    **/
    count<T extends attachmentsCountArgs>(
      args?: Subset<T, attachmentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AttachmentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Attachments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttachmentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AttachmentsAggregateArgs>(args: Subset<T, AttachmentsAggregateArgs>): Prisma.PrismaPromise<GetAttachmentsAggregateType<T>>

    /**
     * Group by Attachments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {attachmentsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends attachmentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: attachmentsGroupByArgs['orderBy'] }
        : { orderBy?: attachmentsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, attachmentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAttachmentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the attachments model
   */
  readonly fields: attachmentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for attachments.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__attachmentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    messages<T extends messagesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, messagesDefaultArgs<ExtArgs>>): Prisma__messagesClient<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the attachments model
   */
  interface attachmentsFieldRefs {
    readonly attachment_id: FieldRef<"attachments", 'String'>
    readonly message_id: FieldRef<"attachments", 'String'>
    readonly file_url: FieldRef<"attachments", 'String'>
    readonly file_type: FieldRef<"attachments", 'file_type_enum'>
    readonly created_at: FieldRef<"attachments", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * attachments findUnique
   */
  export type attachmentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attachments
     */
    select?: attachmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the attachments
     */
    omit?: attachmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: attachmentsInclude<ExtArgs> | null
    /**
     * Filter, which attachments to fetch.
     */
    where: attachmentsWhereUniqueInput
  }

  /**
   * attachments findUniqueOrThrow
   */
  export type attachmentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attachments
     */
    select?: attachmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the attachments
     */
    omit?: attachmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: attachmentsInclude<ExtArgs> | null
    /**
     * Filter, which attachments to fetch.
     */
    where: attachmentsWhereUniqueInput
  }

  /**
   * attachments findFirst
   */
  export type attachmentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attachments
     */
    select?: attachmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the attachments
     */
    omit?: attachmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: attachmentsInclude<ExtArgs> | null
    /**
     * Filter, which attachments to fetch.
     */
    where?: attachmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of attachments to fetch.
     */
    orderBy?: attachmentsOrderByWithRelationInput | attachmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for attachments.
     */
    cursor?: attachmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` attachments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` attachments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of attachments.
     */
    distinct?: AttachmentsScalarFieldEnum | AttachmentsScalarFieldEnum[]
  }

  /**
   * attachments findFirstOrThrow
   */
  export type attachmentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attachments
     */
    select?: attachmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the attachments
     */
    omit?: attachmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: attachmentsInclude<ExtArgs> | null
    /**
     * Filter, which attachments to fetch.
     */
    where?: attachmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of attachments to fetch.
     */
    orderBy?: attachmentsOrderByWithRelationInput | attachmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for attachments.
     */
    cursor?: attachmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` attachments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` attachments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of attachments.
     */
    distinct?: AttachmentsScalarFieldEnum | AttachmentsScalarFieldEnum[]
  }

  /**
   * attachments findMany
   */
  export type attachmentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attachments
     */
    select?: attachmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the attachments
     */
    omit?: attachmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: attachmentsInclude<ExtArgs> | null
    /**
     * Filter, which attachments to fetch.
     */
    where?: attachmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of attachments to fetch.
     */
    orderBy?: attachmentsOrderByWithRelationInput | attachmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing attachments.
     */
    cursor?: attachmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` attachments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` attachments.
     */
    skip?: number
    distinct?: AttachmentsScalarFieldEnum | AttachmentsScalarFieldEnum[]
  }

  /**
   * attachments create
   */
  export type attachmentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attachments
     */
    select?: attachmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the attachments
     */
    omit?: attachmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: attachmentsInclude<ExtArgs> | null
    /**
     * The data needed to create a attachments.
     */
    data: XOR<attachmentsCreateInput, attachmentsUncheckedCreateInput>
  }

  /**
   * attachments createMany
   */
  export type attachmentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many attachments.
     */
    data: attachmentsCreateManyInput | attachmentsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * attachments createManyAndReturn
   */
  export type attachmentsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attachments
     */
    select?: attachmentsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the attachments
     */
    omit?: attachmentsOmit<ExtArgs> | null
    /**
     * The data used to create many attachments.
     */
    data: attachmentsCreateManyInput | attachmentsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: attachmentsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * attachments update
   */
  export type attachmentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attachments
     */
    select?: attachmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the attachments
     */
    omit?: attachmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: attachmentsInclude<ExtArgs> | null
    /**
     * The data needed to update a attachments.
     */
    data: XOR<attachmentsUpdateInput, attachmentsUncheckedUpdateInput>
    /**
     * Choose, which attachments to update.
     */
    where: attachmentsWhereUniqueInput
  }

  /**
   * attachments updateMany
   */
  export type attachmentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update attachments.
     */
    data: XOR<attachmentsUpdateManyMutationInput, attachmentsUncheckedUpdateManyInput>
    /**
     * Filter which attachments to update
     */
    where?: attachmentsWhereInput
    /**
     * Limit how many attachments to update.
     */
    limit?: number
  }

  /**
   * attachments updateManyAndReturn
   */
  export type attachmentsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attachments
     */
    select?: attachmentsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the attachments
     */
    omit?: attachmentsOmit<ExtArgs> | null
    /**
     * The data used to update attachments.
     */
    data: XOR<attachmentsUpdateManyMutationInput, attachmentsUncheckedUpdateManyInput>
    /**
     * Filter which attachments to update
     */
    where?: attachmentsWhereInput
    /**
     * Limit how many attachments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: attachmentsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * attachments upsert
   */
  export type attachmentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attachments
     */
    select?: attachmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the attachments
     */
    omit?: attachmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: attachmentsInclude<ExtArgs> | null
    /**
     * The filter to search for the attachments to update in case it exists.
     */
    where: attachmentsWhereUniqueInput
    /**
     * In case the attachments found by the `where` argument doesn't exist, create a new attachments with this data.
     */
    create: XOR<attachmentsCreateInput, attachmentsUncheckedCreateInput>
    /**
     * In case the attachments was found with the provided `where` argument, update it with this data.
     */
    update: XOR<attachmentsUpdateInput, attachmentsUncheckedUpdateInput>
  }

  /**
   * attachments delete
   */
  export type attachmentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attachments
     */
    select?: attachmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the attachments
     */
    omit?: attachmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: attachmentsInclude<ExtArgs> | null
    /**
     * Filter which attachments to delete.
     */
    where: attachmentsWhereUniqueInput
  }

  /**
   * attachments deleteMany
   */
  export type attachmentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which attachments to delete
     */
    where?: attachmentsWhereInput
    /**
     * Limit how many attachments to delete.
     */
    limit?: number
  }

  /**
   * attachments without action
   */
  export type attachmentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attachments
     */
    select?: attachmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the attachments
     */
    omit?: attachmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: attachmentsInclude<ExtArgs> | null
  }


  /**
   * Model conversations
   */

  export type AggregateConversations = {
    _count: ConversationsCountAggregateOutputType | null
    _min: ConversationsMinAggregateOutputType | null
    _max: ConversationsMaxAggregateOutputType | null
  }

  export type ConversationsMinAggregateOutputType = {
    conversation_id: string | null
    conversation_type: $Enums.conversation_type_enum | null
    conversation_name: string | null
    created_at: Date | null
    updated_at: Date | null
    product_id: string | null
  }

  export type ConversationsMaxAggregateOutputType = {
    conversation_id: string | null
    conversation_type: $Enums.conversation_type_enum | null
    conversation_name: string | null
    created_at: Date | null
    updated_at: Date | null
    product_id: string | null
  }

  export type ConversationsCountAggregateOutputType = {
    conversation_id: number
    conversation_type: number
    conversation_name: number
    created_at: number
    updated_at: number
    product_id: number
    _all: number
  }


  export type ConversationsMinAggregateInputType = {
    conversation_id?: true
    conversation_type?: true
    conversation_name?: true
    created_at?: true
    updated_at?: true
    product_id?: true
  }

  export type ConversationsMaxAggregateInputType = {
    conversation_id?: true
    conversation_type?: true
    conversation_name?: true
    created_at?: true
    updated_at?: true
    product_id?: true
  }

  export type ConversationsCountAggregateInputType = {
    conversation_id?: true
    conversation_type?: true
    conversation_name?: true
    created_at?: true
    updated_at?: true
    product_id?: true
    _all?: true
  }

  export type ConversationsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which conversations to aggregate.
     */
    where?: conversationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of conversations to fetch.
     */
    orderBy?: conversationsOrderByWithRelationInput | conversationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: conversationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` conversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` conversations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned conversations
    **/
    _count?: true | ConversationsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConversationsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConversationsMaxAggregateInputType
  }

  export type GetConversationsAggregateType<T extends ConversationsAggregateArgs> = {
        [P in keyof T & keyof AggregateConversations]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConversations[P]>
      : GetScalarType<T[P], AggregateConversations[P]>
  }




  export type conversationsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: conversationsWhereInput
    orderBy?: conversationsOrderByWithAggregationInput | conversationsOrderByWithAggregationInput[]
    by: ConversationsScalarFieldEnum[] | ConversationsScalarFieldEnum
    having?: conversationsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConversationsCountAggregateInputType | true
    _min?: ConversationsMinAggregateInputType
    _max?: ConversationsMaxAggregateInputType
  }

  export type ConversationsGroupByOutputType = {
    conversation_id: string
    conversation_type: $Enums.conversation_type_enum | null
    conversation_name: string | null
    created_at: Date | null
    updated_at: Date | null
    product_id: string
    _count: ConversationsCountAggregateOutputType | null
    _min: ConversationsMinAggregateOutputType | null
    _max: ConversationsMaxAggregateOutputType | null
  }

  type GetConversationsGroupByPayload<T extends conversationsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConversationsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConversationsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConversationsGroupByOutputType[P]>
            : GetScalarType<T[P], ConversationsGroupByOutputType[P]>
        }
      >
    >


  export type conversationsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    conversation_id?: boolean
    conversation_type?: boolean
    conversation_name?: boolean
    created_at?: boolean
    updated_at?: boolean
    product_id?: boolean
    messages?: boolean | conversations$messagesArgs<ExtArgs>
    users?: boolean | conversations$usersArgs<ExtArgs>
    _count?: boolean | ConversationsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["conversations"]>

  export type conversationsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    conversation_id?: boolean
    conversation_type?: boolean
    conversation_name?: boolean
    created_at?: boolean
    updated_at?: boolean
    product_id?: boolean
  }, ExtArgs["result"]["conversations"]>

  export type conversationsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    conversation_id?: boolean
    conversation_type?: boolean
    conversation_name?: boolean
    created_at?: boolean
    updated_at?: boolean
    product_id?: boolean
  }, ExtArgs["result"]["conversations"]>

  export type conversationsSelectScalar = {
    conversation_id?: boolean
    conversation_type?: boolean
    conversation_name?: boolean
    created_at?: boolean
    updated_at?: boolean
    product_id?: boolean
  }

  export type conversationsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"conversation_id" | "conversation_type" | "conversation_name" | "created_at" | "updated_at" | "product_id", ExtArgs["result"]["conversations"]>
  export type conversationsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    messages?: boolean | conversations$messagesArgs<ExtArgs>
    users?: boolean | conversations$usersArgs<ExtArgs>
    _count?: boolean | ConversationsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type conversationsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type conversationsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $conversationsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "conversations"
    objects: {
      messages: Prisma.$messagesPayload<ExtArgs>[]
      users: Prisma.$usersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      conversation_id: string
      conversation_type: $Enums.conversation_type_enum | null
      conversation_name: string | null
      created_at: Date | null
      updated_at: Date | null
      product_id: string
    }, ExtArgs["result"]["conversations"]>
    composites: {}
  }

  type conversationsGetPayload<S extends boolean | null | undefined | conversationsDefaultArgs> = $Result.GetResult<Prisma.$conversationsPayload, S>

  type conversationsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<conversationsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ConversationsCountAggregateInputType | true
    }

  export interface conversationsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['conversations'], meta: { name: 'conversations' } }
    /**
     * Find zero or one Conversations that matches the filter.
     * @param {conversationsFindUniqueArgs} args - Arguments to find a Conversations
     * @example
     * // Get one Conversations
     * const conversations = await prisma.conversations.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends conversationsFindUniqueArgs>(args: SelectSubset<T, conversationsFindUniqueArgs<ExtArgs>>): Prisma__conversationsClient<$Result.GetResult<Prisma.$conversationsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Conversations that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {conversationsFindUniqueOrThrowArgs} args - Arguments to find a Conversations
     * @example
     * // Get one Conversations
     * const conversations = await prisma.conversations.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends conversationsFindUniqueOrThrowArgs>(args: SelectSubset<T, conversationsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__conversationsClient<$Result.GetResult<Prisma.$conversationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Conversations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {conversationsFindFirstArgs} args - Arguments to find a Conversations
     * @example
     * // Get one Conversations
     * const conversations = await prisma.conversations.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends conversationsFindFirstArgs>(args?: SelectSubset<T, conversationsFindFirstArgs<ExtArgs>>): Prisma__conversationsClient<$Result.GetResult<Prisma.$conversationsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Conversations that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {conversationsFindFirstOrThrowArgs} args - Arguments to find a Conversations
     * @example
     * // Get one Conversations
     * const conversations = await prisma.conversations.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends conversationsFindFirstOrThrowArgs>(args?: SelectSubset<T, conversationsFindFirstOrThrowArgs<ExtArgs>>): Prisma__conversationsClient<$Result.GetResult<Prisma.$conversationsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Conversations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {conversationsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Conversations
     * const conversations = await prisma.conversations.findMany()
     * 
     * // Get first 10 Conversations
     * const conversations = await prisma.conversations.findMany({ take: 10 })
     * 
     * // Only select the `conversation_id`
     * const conversationsWithConversation_idOnly = await prisma.conversations.findMany({ select: { conversation_id: true } })
     * 
     */
    findMany<T extends conversationsFindManyArgs>(args?: SelectSubset<T, conversationsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$conversationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Conversations.
     * @param {conversationsCreateArgs} args - Arguments to create a Conversations.
     * @example
     * // Create one Conversations
     * const Conversations = await prisma.conversations.create({
     *   data: {
     *     // ... data to create a Conversations
     *   }
     * })
     * 
     */
    create<T extends conversationsCreateArgs>(args: SelectSubset<T, conversationsCreateArgs<ExtArgs>>): Prisma__conversationsClient<$Result.GetResult<Prisma.$conversationsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Conversations.
     * @param {conversationsCreateManyArgs} args - Arguments to create many Conversations.
     * @example
     * // Create many Conversations
     * const conversations = await prisma.conversations.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends conversationsCreateManyArgs>(args?: SelectSubset<T, conversationsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Conversations and returns the data saved in the database.
     * @param {conversationsCreateManyAndReturnArgs} args - Arguments to create many Conversations.
     * @example
     * // Create many Conversations
     * const conversations = await prisma.conversations.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Conversations and only return the `conversation_id`
     * const conversationsWithConversation_idOnly = await prisma.conversations.createManyAndReturn({
     *   select: { conversation_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends conversationsCreateManyAndReturnArgs>(args?: SelectSubset<T, conversationsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$conversationsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Conversations.
     * @param {conversationsDeleteArgs} args - Arguments to delete one Conversations.
     * @example
     * // Delete one Conversations
     * const Conversations = await prisma.conversations.delete({
     *   where: {
     *     // ... filter to delete one Conversations
     *   }
     * })
     * 
     */
    delete<T extends conversationsDeleteArgs>(args: SelectSubset<T, conversationsDeleteArgs<ExtArgs>>): Prisma__conversationsClient<$Result.GetResult<Prisma.$conversationsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Conversations.
     * @param {conversationsUpdateArgs} args - Arguments to update one Conversations.
     * @example
     * // Update one Conversations
     * const conversations = await prisma.conversations.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends conversationsUpdateArgs>(args: SelectSubset<T, conversationsUpdateArgs<ExtArgs>>): Prisma__conversationsClient<$Result.GetResult<Prisma.$conversationsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Conversations.
     * @param {conversationsDeleteManyArgs} args - Arguments to filter Conversations to delete.
     * @example
     * // Delete a few Conversations
     * const { count } = await prisma.conversations.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends conversationsDeleteManyArgs>(args?: SelectSubset<T, conversationsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Conversations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {conversationsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Conversations
     * const conversations = await prisma.conversations.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends conversationsUpdateManyArgs>(args: SelectSubset<T, conversationsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Conversations and returns the data updated in the database.
     * @param {conversationsUpdateManyAndReturnArgs} args - Arguments to update many Conversations.
     * @example
     * // Update many Conversations
     * const conversations = await prisma.conversations.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Conversations and only return the `conversation_id`
     * const conversationsWithConversation_idOnly = await prisma.conversations.updateManyAndReturn({
     *   select: { conversation_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends conversationsUpdateManyAndReturnArgs>(args: SelectSubset<T, conversationsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$conversationsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Conversations.
     * @param {conversationsUpsertArgs} args - Arguments to update or create a Conversations.
     * @example
     * // Update or create a Conversations
     * const conversations = await prisma.conversations.upsert({
     *   create: {
     *     // ... data to create a Conversations
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Conversations we want to update
     *   }
     * })
     */
    upsert<T extends conversationsUpsertArgs>(args: SelectSubset<T, conversationsUpsertArgs<ExtArgs>>): Prisma__conversationsClient<$Result.GetResult<Prisma.$conversationsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Conversations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {conversationsCountArgs} args - Arguments to filter Conversations to count.
     * @example
     * // Count the number of Conversations
     * const count = await prisma.conversations.count({
     *   where: {
     *     // ... the filter for the Conversations we want to count
     *   }
     * })
    **/
    count<T extends conversationsCountArgs>(
      args?: Subset<T, conversationsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConversationsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Conversations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ConversationsAggregateArgs>(args: Subset<T, ConversationsAggregateArgs>): Prisma.PrismaPromise<GetConversationsAggregateType<T>>

    /**
     * Group by Conversations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {conversationsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends conversationsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: conversationsGroupByArgs['orderBy'] }
        : { orderBy?: conversationsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, conversationsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConversationsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the conversations model
   */
  readonly fields: conversationsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for conversations.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__conversationsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    messages<T extends conversations$messagesArgs<ExtArgs> = {}>(args?: Subset<T, conversations$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    users<T extends conversations$usersArgs<ExtArgs> = {}>(args?: Subset<T, conversations$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the conversations model
   */
  interface conversationsFieldRefs {
    readonly conversation_id: FieldRef<"conversations", 'String'>
    readonly conversation_type: FieldRef<"conversations", 'conversation_type_enum'>
    readonly conversation_name: FieldRef<"conversations", 'String'>
    readonly created_at: FieldRef<"conversations", 'DateTime'>
    readonly updated_at: FieldRef<"conversations", 'DateTime'>
    readonly product_id: FieldRef<"conversations", 'String'>
  }
    

  // Custom InputTypes
  /**
   * conversations findUnique
   */
  export type conversationsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the conversations
     */
    select?: conversationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the conversations
     */
    omit?: conversationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: conversationsInclude<ExtArgs> | null
    /**
     * Filter, which conversations to fetch.
     */
    where: conversationsWhereUniqueInput
  }

  /**
   * conversations findUniqueOrThrow
   */
  export type conversationsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the conversations
     */
    select?: conversationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the conversations
     */
    omit?: conversationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: conversationsInclude<ExtArgs> | null
    /**
     * Filter, which conversations to fetch.
     */
    where: conversationsWhereUniqueInput
  }

  /**
   * conversations findFirst
   */
  export type conversationsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the conversations
     */
    select?: conversationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the conversations
     */
    omit?: conversationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: conversationsInclude<ExtArgs> | null
    /**
     * Filter, which conversations to fetch.
     */
    where?: conversationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of conversations to fetch.
     */
    orderBy?: conversationsOrderByWithRelationInput | conversationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for conversations.
     */
    cursor?: conversationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` conversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` conversations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of conversations.
     */
    distinct?: ConversationsScalarFieldEnum | ConversationsScalarFieldEnum[]
  }

  /**
   * conversations findFirstOrThrow
   */
  export type conversationsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the conversations
     */
    select?: conversationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the conversations
     */
    omit?: conversationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: conversationsInclude<ExtArgs> | null
    /**
     * Filter, which conversations to fetch.
     */
    where?: conversationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of conversations to fetch.
     */
    orderBy?: conversationsOrderByWithRelationInput | conversationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for conversations.
     */
    cursor?: conversationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` conversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` conversations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of conversations.
     */
    distinct?: ConversationsScalarFieldEnum | ConversationsScalarFieldEnum[]
  }

  /**
   * conversations findMany
   */
  export type conversationsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the conversations
     */
    select?: conversationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the conversations
     */
    omit?: conversationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: conversationsInclude<ExtArgs> | null
    /**
     * Filter, which conversations to fetch.
     */
    where?: conversationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of conversations to fetch.
     */
    orderBy?: conversationsOrderByWithRelationInput | conversationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing conversations.
     */
    cursor?: conversationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` conversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` conversations.
     */
    skip?: number
    distinct?: ConversationsScalarFieldEnum | ConversationsScalarFieldEnum[]
  }

  /**
   * conversations create
   */
  export type conversationsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the conversations
     */
    select?: conversationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the conversations
     */
    omit?: conversationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: conversationsInclude<ExtArgs> | null
    /**
     * The data needed to create a conversations.
     */
    data: XOR<conversationsCreateInput, conversationsUncheckedCreateInput>
  }

  /**
   * conversations createMany
   */
  export type conversationsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many conversations.
     */
    data: conversationsCreateManyInput | conversationsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * conversations createManyAndReturn
   */
  export type conversationsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the conversations
     */
    select?: conversationsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the conversations
     */
    omit?: conversationsOmit<ExtArgs> | null
    /**
     * The data used to create many conversations.
     */
    data: conversationsCreateManyInput | conversationsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * conversations update
   */
  export type conversationsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the conversations
     */
    select?: conversationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the conversations
     */
    omit?: conversationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: conversationsInclude<ExtArgs> | null
    /**
     * The data needed to update a conversations.
     */
    data: XOR<conversationsUpdateInput, conversationsUncheckedUpdateInput>
    /**
     * Choose, which conversations to update.
     */
    where: conversationsWhereUniqueInput
  }

  /**
   * conversations updateMany
   */
  export type conversationsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update conversations.
     */
    data: XOR<conversationsUpdateManyMutationInput, conversationsUncheckedUpdateManyInput>
    /**
     * Filter which conversations to update
     */
    where?: conversationsWhereInput
    /**
     * Limit how many conversations to update.
     */
    limit?: number
  }

  /**
   * conversations updateManyAndReturn
   */
  export type conversationsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the conversations
     */
    select?: conversationsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the conversations
     */
    omit?: conversationsOmit<ExtArgs> | null
    /**
     * The data used to update conversations.
     */
    data: XOR<conversationsUpdateManyMutationInput, conversationsUncheckedUpdateManyInput>
    /**
     * Filter which conversations to update
     */
    where?: conversationsWhereInput
    /**
     * Limit how many conversations to update.
     */
    limit?: number
  }

  /**
   * conversations upsert
   */
  export type conversationsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the conversations
     */
    select?: conversationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the conversations
     */
    omit?: conversationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: conversationsInclude<ExtArgs> | null
    /**
     * The filter to search for the conversations to update in case it exists.
     */
    where: conversationsWhereUniqueInput
    /**
     * In case the conversations found by the `where` argument doesn't exist, create a new conversations with this data.
     */
    create: XOR<conversationsCreateInput, conversationsUncheckedCreateInput>
    /**
     * In case the conversations was found with the provided `where` argument, update it with this data.
     */
    update: XOR<conversationsUpdateInput, conversationsUncheckedUpdateInput>
  }

  /**
   * conversations delete
   */
  export type conversationsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the conversations
     */
    select?: conversationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the conversations
     */
    omit?: conversationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: conversationsInclude<ExtArgs> | null
    /**
     * Filter which conversations to delete.
     */
    where: conversationsWhereUniqueInput
  }

  /**
   * conversations deleteMany
   */
  export type conversationsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which conversations to delete
     */
    where?: conversationsWhereInput
    /**
     * Limit how many conversations to delete.
     */
    limit?: number
  }

  /**
   * conversations.messages
   */
  export type conversations$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messagesInclude<ExtArgs> | null
    where?: messagesWhereInput
    orderBy?: messagesOrderByWithRelationInput | messagesOrderByWithRelationInput[]
    cursor?: messagesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessagesScalarFieldEnum | MessagesScalarFieldEnum[]
  }

  /**
   * conversations.users
   */
  export type conversations$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    cursor?: usersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * conversations without action
   */
  export type conversationsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the conversations
     */
    select?: conversationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the conversations
     */
    omit?: conversationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: conversationsInclude<ExtArgs> | null
  }


  /**
   * Model messages
   */

  export type AggregateMessages = {
    _count: MessagesCountAggregateOutputType | null
    _min: MessagesMinAggregateOutputType | null
    _max: MessagesMaxAggregateOutputType | null
  }

  export type MessagesMinAggregateOutputType = {
    message_id: string | null
    conversation_id: string | null
    response_id: string | null
    sender_id: string | null
    recipient_id: string | null
    message_status: $Enums.message_status_enum | null
    content: string | null
    created_at: Date | null
  }

  export type MessagesMaxAggregateOutputType = {
    message_id: string | null
    conversation_id: string | null
    response_id: string | null
    sender_id: string | null
    recipient_id: string | null
    message_status: $Enums.message_status_enum | null
    content: string | null
    created_at: Date | null
  }

  export type MessagesCountAggregateOutputType = {
    message_id: number
    conversation_id: number
    response_id: number
    sender_id: number
    recipient_id: number
    message_status: number
    content: number
    created_at: number
    _all: number
  }


  export type MessagesMinAggregateInputType = {
    message_id?: true
    conversation_id?: true
    response_id?: true
    sender_id?: true
    recipient_id?: true
    message_status?: true
    content?: true
    created_at?: true
  }

  export type MessagesMaxAggregateInputType = {
    message_id?: true
    conversation_id?: true
    response_id?: true
    sender_id?: true
    recipient_id?: true
    message_status?: true
    content?: true
    created_at?: true
  }

  export type MessagesCountAggregateInputType = {
    message_id?: true
    conversation_id?: true
    response_id?: true
    sender_id?: true
    recipient_id?: true
    message_status?: true
    content?: true
    created_at?: true
    _all?: true
  }

  export type MessagesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which messages to aggregate.
     */
    where?: messagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of messages to fetch.
     */
    orderBy?: messagesOrderByWithRelationInput | messagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: messagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned messages
    **/
    _count?: true | MessagesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MessagesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MessagesMaxAggregateInputType
  }

  export type GetMessagesAggregateType<T extends MessagesAggregateArgs> = {
        [P in keyof T & keyof AggregateMessages]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessages[P]>
      : GetScalarType<T[P], AggregateMessages[P]>
  }




  export type messagesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: messagesWhereInput
    orderBy?: messagesOrderByWithAggregationInput | messagesOrderByWithAggregationInput[]
    by: MessagesScalarFieldEnum[] | MessagesScalarFieldEnum
    having?: messagesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MessagesCountAggregateInputType | true
    _min?: MessagesMinAggregateInputType
    _max?: MessagesMaxAggregateInputType
  }

  export type MessagesGroupByOutputType = {
    message_id: string
    conversation_id: string
    response_id: string | null
    sender_id: string
    recipient_id: string
    message_status: $Enums.message_status_enum | null
    content: string
    created_at: Date | null
    _count: MessagesCountAggregateOutputType | null
    _min: MessagesMinAggregateOutputType | null
    _max: MessagesMaxAggregateOutputType | null
  }

  type GetMessagesGroupByPayload<T extends messagesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MessagesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MessagesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MessagesGroupByOutputType[P]>
            : GetScalarType<T[P], MessagesGroupByOutputType[P]>
        }
      >
    >


  export type messagesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    message_id?: boolean
    conversation_id?: boolean
    response_id?: boolean
    sender_id?: boolean
    recipient_id?: boolean
    message_status?: boolean
    content?: boolean
    created_at?: boolean
    attachments?: boolean | messages$attachmentsArgs<ExtArgs>
    conversations?: boolean | conversationsDefaultArgs<ExtArgs>
    users?: boolean | messages$usersArgs<ExtArgs>
    _count?: boolean | MessagesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["messages"]>

  export type messagesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    message_id?: boolean
    conversation_id?: boolean
    response_id?: boolean
    sender_id?: boolean
    recipient_id?: boolean
    message_status?: boolean
    content?: boolean
    created_at?: boolean
    conversations?: boolean | conversationsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["messages"]>

  export type messagesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    message_id?: boolean
    conversation_id?: boolean
    response_id?: boolean
    sender_id?: boolean
    recipient_id?: boolean
    message_status?: boolean
    content?: boolean
    created_at?: boolean
    conversations?: boolean | conversationsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["messages"]>

  export type messagesSelectScalar = {
    message_id?: boolean
    conversation_id?: boolean
    response_id?: boolean
    sender_id?: boolean
    recipient_id?: boolean
    message_status?: boolean
    content?: boolean
    created_at?: boolean
  }

  export type messagesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"message_id" | "conversation_id" | "response_id" | "sender_id" | "recipient_id" | "message_status" | "content" | "created_at", ExtArgs["result"]["messages"]>
  export type messagesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attachments?: boolean | messages$attachmentsArgs<ExtArgs>
    conversations?: boolean | conversationsDefaultArgs<ExtArgs>
    users?: boolean | messages$usersArgs<ExtArgs>
    _count?: boolean | MessagesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type messagesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    conversations?: boolean | conversationsDefaultArgs<ExtArgs>
  }
  export type messagesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    conversations?: boolean | conversationsDefaultArgs<ExtArgs>
  }

  export type $messagesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "messages"
    objects: {
      attachments: Prisma.$attachmentsPayload<ExtArgs>[]
      conversations: Prisma.$conversationsPayload<ExtArgs>
      users: Prisma.$usersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      message_id: string
      conversation_id: string
      response_id: string | null
      sender_id: string
      recipient_id: string
      message_status: $Enums.message_status_enum | null
      content: string
      created_at: Date | null
    }, ExtArgs["result"]["messages"]>
    composites: {}
  }

  type messagesGetPayload<S extends boolean | null | undefined | messagesDefaultArgs> = $Result.GetResult<Prisma.$messagesPayload, S>

  type messagesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<messagesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MessagesCountAggregateInputType | true
    }

  export interface messagesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['messages'], meta: { name: 'messages' } }
    /**
     * Find zero or one Messages that matches the filter.
     * @param {messagesFindUniqueArgs} args - Arguments to find a Messages
     * @example
     * // Get one Messages
     * const messages = await prisma.messages.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends messagesFindUniqueArgs>(args: SelectSubset<T, messagesFindUniqueArgs<ExtArgs>>): Prisma__messagesClient<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Messages that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {messagesFindUniqueOrThrowArgs} args - Arguments to find a Messages
     * @example
     * // Get one Messages
     * const messages = await prisma.messages.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends messagesFindUniqueOrThrowArgs>(args: SelectSubset<T, messagesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__messagesClient<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {messagesFindFirstArgs} args - Arguments to find a Messages
     * @example
     * // Get one Messages
     * const messages = await prisma.messages.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends messagesFindFirstArgs>(args?: SelectSubset<T, messagesFindFirstArgs<ExtArgs>>): Prisma__messagesClient<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Messages that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {messagesFindFirstOrThrowArgs} args - Arguments to find a Messages
     * @example
     * // Get one Messages
     * const messages = await prisma.messages.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends messagesFindFirstOrThrowArgs>(args?: SelectSubset<T, messagesFindFirstOrThrowArgs<ExtArgs>>): Prisma__messagesClient<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {messagesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Messages
     * const messages = await prisma.messages.findMany()
     * 
     * // Get first 10 Messages
     * const messages = await prisma.messages.findMany({ take: 10 })
     * 
     * // Only select the `message_id`
     * const messagesWithMessage_idOnly = await prisma.messages.findMany({ select: { message_id: true } })
     * 
     */
    findMany<T extends messagesFindManyArgs>(args?: SelectSubset<T, messagesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Messages.
     * @param {messagesCreateArgs} args - Arguments to create a Messages.
     * @example
     * // Create one Messages
     * const Messages = await prisma.messages.create({
     *   data: {
     *     // ... data to create a Messages
     *   }
     * })
     * 
     */
    create<T extends messagesCreateArgs>(args: SelectSubset<T, messagesCreateArgs<ExtArgs>>): Prisma__messagesClient<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Messages.
     * @param {messagesCreateManyArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const messages = await prisma.messages.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends messagesCreateManyArgs>(args?: SelectSubset<T, messagesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Messages and returns the data saved in the database.
     * @param {messagesCreateManyAndReturnArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const messages = await prisma.messages.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Messages and only return the `message_id`
     * const messagesWithMessage_idOnly = await prisma.messages.createManyAndReturn({
     *   select: { message_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends messagesCreateManyAndReturnArgs>(args?: SelectSubset<T, messagesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Messages.
     * @param {messagesDeleteArgs} args - Arguments to delete one Messages.
     * @example
     * // Delete one Messages
     * const Messages = await prisma.messages.delete({
     *   where: {
     *     // ... filter to delete one Messages
     *   }
     * })
     * 
     */
    delete<T extends messagesDeleteArgs>(args: SelectSubset<T, messagesDeleteArgs<ExtArgs>>): Prisma__messagesClient<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Messages.
     * @param {messagesUpdateArgs} args - Arguments to update one Messages.
     * @example
     * // Update one Messages
     * const messages = await prisma.messages.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends messagesUpdateArgs>(args: SelectSubset<T, messagesUpdateArgs<ExtArgs>>): Prisma__messagesClient<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Messages.
     * @param {messagesDeleteManyArgs} args - Arguments to filter Messages to delete.
     * @example
     * // Delete a few Messages
     * const { count } = await prisma.messages.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends messagesDeleteManyArgs>(args?: SelectSubset<T, messagesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {messagesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Messages
     * const messages = await prisma.messages.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends messagesUpdateManyArgs>(args: SelectSubset<T, messagesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages and returns the data updated in the database.
     * @param {messagesUpdateManyAndReturnArgs} args - Arguments to update many Messages.
     * @example
     * // Update many Messages
     * const messages = await prisma.messages.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Messages and only return the `message_id`
     * const messagesWithMessage_idOnly = await prisma.messages.updateManyAndReturn({
     *   select: { message_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends messagesUpdateManyAndReturnArgs>(args: SelectSubset<T, messagesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Messages.
     * @param {messagesUpsertArgs} args - Arguments to update or create a Messages.
     * @example
     * // Update or create a Messages
     * const messages = await prisma.messages.upsert({
     *   create: {
     *     // ... data to create a Messages
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Messages we want to update
     *   }
     * })
     */
    upsert<T extends messagesUpsertArgs>(args: SelectSubset<T, messagesUpsertArgs<ExtArgs>>): Prisma__messagesClient<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {messagesCountArgs} args - Arguments to filter Messages to count.
     * @example
     * // Count the number of Messages
     * const count = await prisma.messages.count({
     *   where: {
     *     // ... the filter for the Messages we want to count
     *   }
     * })
    **/
    count<T extends messagesCountArgs>(
      args?: Subset<T, messagesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MessagesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessagesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MessagesAggregateArgs>(args: Subset<T, MessagesAggregateArgs>): Prisma.PrismaPromise<GetMessagesAggregateType<T>>

    /**
     * Group by Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {messagesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends messagesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: messagesGroupByArgs['orderBy'] }
        : { orderBy?: messagesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, messagesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessagesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the messages model
   */
  readonly fields: messagesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for messages.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__messagesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    attachments<T extends messages$attachmentsArgs<ExtArgs> = {}>(args?: Subset<T, messages$attachmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$attachmentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    conversations<T extends conversationsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, conversationsDefaultArgs<ExtArgs>>): Prisma__conversationsClient<$Result.GetResult<Prisma.$conversationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    users<T extends messages$usersArgs<ExtArgs> = {}>(args?: Subset<T, messages$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the messages model
   */
  interface messagesFieldRefs {
    readonly message_id: FieldRef<"messages", 'String'>
    readonly conversation_id: FieldRef<"messages", 'String'>
    readonly response_id: FieldRef<"messages", 'String'>
    readonly sender_id: FieldRef<"messages", 'String'>
    readonly recipient_id: FieldRef<"messages", 'String'>
    readonly message_status: FieldRef<"messages", 'message_status_enum'>
    readonly content: FieldRef<"messages", 'String'>
    readonly created_at: FieldRef<"messages", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * messages findUnique
   */
  export type messagesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messagesInclude<ExtArgs> | null
    /**
     * Filter, which messages to fetch.
     */
    where: messagesWhereUniqueInput
  }

  /**
   * messages findUniqueOrThrow
   */
  export type messagesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messagesInclude<ExtArgs> | null
    /**
     * Filter, which messages to fetch.
     */
    where: messagesWhereUniqueInput
  }

  /**
   * messages findFirst
   */
  export type messagesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messagesInclude<ExtArgs> | null
    /**
     * Filter, which messages to fetch.
     */
    where?: messagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of messages to fetch.
     */
    orderBy?: messagesOrderByWithRelationInput | messagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for messages.
     */
    cursor?: messagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of messages.
     */
    distinct?: MessagesScalarFieldEnum | MessagesScalarFieldEnum[]
  }

  /**
   * messages findFirstOrThrow
   */
  export type messagesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messagesInclude<ExtArgs> | null
    /**
     * Filter, which messages to fetch.
     */
    where?: messagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of messages to fetch.
     */
    orderBy?: messagesOrderByWithRelationInput | messagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for messages.
     */
    cursor?: messagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of messages.
     */
    distinct?: MessagesScalarFieldEnum | MessagesScalarFieldEnum[]
  }

  /**
   * messages findMany
   */
  export type messagesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messagesInclude<ExtArgs> | null
    /**
     * Filter, which messages to fetch.
     */
    where?: messagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of messages to fetch.
     */
    orderBy?: messagesOrderByWithRelationInput | messagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing messages.
     */
    cursor?: messagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` messages.
     */
    skip?: number
    distinct?: MessagesScalarFieldEnum | MessagesScalarFieldEnum[]
  }

  /**
   * messages create
   */
  export type messagesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messagesInclude<ExtArgs> | null
    /**
     * The data needed to create a messages.
     */
    data: XOR<messagesCreateInput, messagesUncheckedCreateInput>
  }

  /**
   * messages createMany
   */
  export type messagesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many messages.
     */
    data: messagesCreateManyInput | messagesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * messages createManyAndReturn
   */
  export type messagesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * The data used to create many messages.
     */
    data: messagesCreateManyInput | messagesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messagesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * messages update
   */
  export type messagesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messagesInclude<ExtArgs> | null
    /**
     * The data needed to update a messages.
     */
    data: XOR<messagesUpdateInput, messagesUncheckedUpdateInput>
    /**
     * Choose, which messages to update.
     */
    where: messagesWhereUniqueInput
  }

  /**
   * messages updateMany
   */
  export type messagesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update messages.
     */
    data: XOR<messagesUpdateManyMutationInput, messagesUncheckedUpdateManyInput>
    /**
     * Filter which messages to update
     */
    where?: messagesWhereInput
    /**
     * Limit how many messages to update.
     */
    limit?: number
  }

  /**
   * messages updateManyAndReturn
   */
  export type messagesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * The data used to update messages.
     */
    data: XOR<messagesUpdateManyMutationInput, messagesUncheckedUpdateManyInput>
    /**
     * Filter which messages to update
     */
    where?: messagesWhereInput
    /**
     * Limit how many messages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messagesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * messages upsert
   */
  export type messagesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messagesInclude<ExtArgs> | null
    /**
     * The filter to search for the messages to update in case it exists.
     */
    where: messagesWhereUniqueInput
    /**
     * In case the messages found by the `where` argument doesn't exist, create a new messages with this data.
     */
    create: XOR<messagesCreateInput, messagesUncheckedCreateInput>
    /**
     * In case the messages was found with the provided `where` argument, update it with this data.
     */
    update: XOR<messagesUpdateInput, messagesUncheckedUpdateInput>
  }

  /**
   * messages delete
   */
  export type messagesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messagesInclude<ExtArgs> | null
    /**
     * Filter which messages to delete.
     */
    where: messagesWhereUniqueInput
  }

  /**
   * messages deleteMany
   */
  export type messagesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which messages to delete
     */
    where?: messagesWhereInput
    /**
     * Limit how many messages to delete.
     */
    limit?: number
  }

  /**
   * messages.attachments
   */
  export type messages$attachmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attachments
     */
    select?: attachmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the attachments
     */
    omit?: attachmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: attachmentsInclude<ExtArgs> | null
    where?: attachmentsWhereInput
    orderBy?: attachmentsOrderByWithRelationInput | attachmentsOrderByWithRelationInput[]
    cursor?: attachmentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AttachmentsScalarFieldEnum | AttachmentsScalarFieldEnum[]
  }

  /**
   * messages.users
   */
  export type messages$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    cursor?: usersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * messages without action
   */
  export type messagesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messagesInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const NofiticationsScalarFieldEnum: {
    notification_id: 'notification_id',
    sender_name: 'sender_name',
    receiver_name: 'receiver_name',
    content: 'content',
    date: 'date'
  };

  export type NofiticationsScalarFieldEnum = (typeof NofiticationsScalarFieldEnum)[keyof typeof NofiticationsScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    user_id: 'user_id',
    bio: 'bio',
    email: 'email',
    name: 'name',
    password: 'password',
    gender: 'gender',
    created_at: 'created_at',
    stars: 'stars',
    profile_photo_url: 'profile_photo_url',
    cover_photo_url: 'cover_photo_url',
    user_account_type: 'user_account_type'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const SessionsScalarFieldEnum: {
    session_id: 'session_id',
    session_token: 'session_token',
    ip_addr: 'ip_addr',
    user_agent: 'user_agent',
    session_user_id: 'session_user_id'
  };

  export type SessionsScalarFieldEnum = (typeof SessionsScalarFieldEnum)[keyof typeof SessionsScalarFieldEnum]


  export const Post_categoriesScalarFieldEnum: {
    category_id: 'category_id',
    category_value: 'category_value',
    parent_category_id: 'parent_category_id'
  };

  export type Post_categoriesScalarFieldEnum = (typeof Post_categoriesScalarFieldEnum)[keyof typeof Post_categoriesScalarFieldEnum]


  export const PostsScalarFieldEnum: {
    post_id: 'post_id',
    title: 'title',
    description: 'description',
    price: 'price',
    created_at: 'created_at',
    post_category_id: 'post_category_id',
    author_id: 'author_id'
  };

  export type PostsScalarFieldEnum = (typeof PostsScalarFieldEnum)[keyof typeof PostsScalarFieldEnum]


  export const Users_saved_postsScalarFieldEnum: {
    post_saving_id: 'post_saving_id',
    saved_at: 'saved_at',
    user_saving_id: 'user_saving_id',
    saved_post_id: 'saved_post_id'
  };

  export type Users_saved_postsScalarFieldEnum = (typeof Users_saved_postsScalarFieldEnum)[keyof typeof Users_saved_postsScalarFieldEnum]


  export const CommentsScalarFieldEnum: {
    comment_id: 'comment_id',
    body: 'body',
    created_at: 'created_at',
    commentator_id: 'commentator_id',
    commented_post_id: 'commented_post_id',
    parent_comment_id: 'parent_comment_id'
  };

  export type CommentsScalarFieldEnum = (typeof CommentsScalarFieldEnum)[keyof typeof CommentsScalarFieldEnum]


  export const MediasScalarFieldEnum: {
    media_id: 'media_id',
    fileType: 'fileType',
    encoding: 'encoding',
    mimetype: 'mimetype',
    filename: 'filename',
    fileUrl: 'fileUrl',
    path: 'path',
    size: 'size',
    media_post_id: 'media_post_id'
  };

  export type MediasScalarFieldEnum = (typeof MediasScalarFieldEnum)[keyof typeof MediasScalarFieldEnum]


  export const AttachmentsScalarFieldEnum: {
    attachment_id: 'attachment_id',
    message_id: 'message_id',
    file_url: 'file_url',
    file_type: 'file_type',
    created_at: 'created_at'
  };

  export type AttachmentsScalarFieldEnum = (typeof AttachmentsScalarFieldEnum)[keyof typeof AttachmentsScalarFieldEnum]


  export const ConversationsScalarFieldEnum: {
    conversation_id: 'conversation_id',
    conversation_type: 'conversation_type',
    conversation_name: 'conversation_name',
    created_at: 'created_at',
    updated_at: 'updated_at',
    product_id: 'product_id'
  };

  export type ConversationsScalarFieldEnum = (typeof ConversationsScalarFieldEnum)[keyof typeof ConversationsScalarFieldEnum]


  export const MessagesScalarFieldEnum: {
    message_id: 'message_id',
    conversation_id: 'conversation_id',
    response_id: 'response_id',
    sender_id: 'sender_id',
    recipient_id: 'recipient_id',
    message_status: 'message_status',
    content: 'content',
    created_at: 'created_at'
  };

  export type MessagesScalarFieldEnum = (typeof MessagesScalarFieldEnum)[keyof typeof MessagesScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'gender_enum'
   */
  export type Enumgender_enumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'gender_enum'>
    


  /**
   * Reference to a field of type 'gender_enum[]'
   */
  export type ListEnumgender_enumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'gender_enum[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'account_type'
   */
  export type Enumaccount_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'account_type'>
    


  /**
   * Reference to a field of type 'account_type[]'
   */
  export type ListEnumaccount_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'account_type[]'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'file_type_enum'
   */
  export type Enumfile_type_enumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'file_type_enum'>
    


  /**
   * Reference to a field of type 'file_type_enum[]'
   */
  export type ListEnumfile_type_enumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'file_type_enum[]'>
    


  /**
   * Reference to a field of type 'conversation_type_enum'
   */
  export type Enumconversation_type_enumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'conversation_type_enum'>
    


  /**
   * Reference to a field of type 'conversation_type_enum[]'
   */
  export type ListEnumconversation_type_enumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'conversation_type_enum[]'>
    


  /**
   * Reference to a field of type 'message_status_enum'
   */
  export type Enummessage_status_enumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'message_status_enum'>
    


  /**
   * Reference to a field of type 'message_status_enum[]'
   */
  export type ListEnummessage_status_enumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'message_status_enum[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type nofiticationsWhereInput = {
    AND?: nofiticationsWhereInput | nofiticationsWhereInput[]
    OR?: nofiticationsWhereInput[]
    NOT?: nofiticationsWhereInput | nofiticationsWhereInput[]
    notification_id?: UuidFilter<"nofitications"> | string
    sender_name?: StringFilter<"nofitications"> | string
    receiver_name?: StringFilter<"nofitications"> | string
    content?: StringFilter<"nofitications"> | string
    date?: DateTimeFilter<"nofitications"> | Date | string
    users?: UsersListRelationFilter
  }

  export type nofiticationsOrderByWithRelationInput = {
    notification_id?: SortOrder
    sender_name?: SortOrder
    receiver_name?: SortOrder
    content?: SortOrder
    date?: SortOrder
    users?: usersOrderByRelationAggregateInput
  }

  export type nofiticationsWhereUniqueInput = Prisma.AtLeast<{
    notification_id?: string
    AND?: nofiticationsWhereInput | nofiticationsWhereInput[]
    OR?: nofiticationsWhereInput[]
    NOT?: nofiticationsWhereInput | nofiticationsWhereInput[]
    sender_name?: StringFilter<"nofitications"> | string
    receiver_name?: StringFilter<"nofitications"> | string
    content?: StringFilter<"nofitications"> | string
    date?: DateTimeFilter<"nofitications"> | Date | string
    users?: UsersListRelationFilter
  }, "notification_id">

  export type nofiticationsOrderByWithAggregationInput = {
    notification_id?: SortOrder
    sender_name?: SortOrder
    receiver_name?: SortOrder
    content?: SortOrder
    date?: SortOrder
    _count?: nofiticationsCountOrderByAggregateInput
    _max?: nofiticationsMaxOrderByAggregateInput
    _min?: nofiticationsMinOrderByAggregateInput
  }

  export type nofiticationsScalarWhereWithAggregatesInput = {
    AND?: nofiticationsScalarWhereWithAggregatesInput | nofiticationsScalarWhereWithAggregatesInput[]
    OR?: nofiticationsScalarWhereWithAggregatesInput[]
    NOT?: nofiticationsScalarWhereWithAggregatesInput | nofiticationsScalarWhereWithAggregatesInput[]
    notification_id?: UuidWithAggregatesFilter<"nofitications"> | string
    sender_name?: StringWithAggregatesFilter<"nofitications"> | string
    receiver_name?: StringWithAggregatesFilter<"nofitications"> | string
    content?: StringWithAggregatesFilter<"nofitications"> | string
    date?: DateTimeWithAggregatesFilter<"nofitications"> | Date | string
  }

  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    user_id?: UuidFilter<"users"> | string
    bio?: StringNullableFilter<"users"> | string | null
    email?: StringFilter<"users"> | string
    name?: StringFilter<"users"> | string
    password?: StringFilter<"users"> | string
    gender?: Enumgender_enumNullableFilter<"users"> | $Enums.gender_enum | null
    created_at?: DateTimeNullableFilter<"users"> | Date | string | null
    stars?: IntFilter<"users"> | number
    profile_photo_url?: StringNullableFilter<"users"> | string | null
    cover_photo_url?: StringNullableFilter<"users"> | string | null
    user_account_type?: Enumaccount_typeFilter<"users"> | $Enums.account_type
    preferences?: Post_categoriesListRelationFilter
    followers?: UsersListRelationFilter
    followings?: UsersListRelationFilter
    user_posts?: PostsListRelationFilter
    posts_liked?: PostsListRelationFilter
    comments_liked?: CommentsListRelationFilter
    messages?: MessagesListRelationFilter
    conversations?: ConversationsListRelationFilter
    user_sessions?: SessionsListRelationFilter
    nofitications?: NofiticationsListRelationFilter
    users_saved_posts?: Users_saved_postsListRelationFilter
    comments?: CommentsListRelationFilter
  }

  export type usersOrderByWithRelationInput = {
    user_id?: SortOrder
    bio?: SortOrderInput | SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    gender?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    stars?: SortOrder
    profile_photo_url?: SortOrderInput | SortOrder
    cover_photo_url?: SortOrderInput | SortOrder
    user_account_type?: SortOrder
    preferences?: post_categoriesOrderByRelationAggregateInput
    followers?: usersOrderByRelationAggregateInput
    followings?: usersOrderByRelationAggregateInput
    user_posts?: postsOrderByRelationAggregateInput
    posts_liked?: postsOrderByRelationAggregateInput
    comments_liked?: commentsOrderByRelationAggregateInput
    messages?: messagesOrderByRelationAggregateInput
    conversations?: conversationsOrderByRelationAggregateInput
    user_sessions?: sessionsOrderByRelationAggregateInput
    nofitications?: nofiticationsOrderByRelationAggregateInput
    users_saved_posts?: users_saved_postsOrderByRelationAggregateInput
    comments?: commentsOrderByRelationAggregateInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    user_id?: string
    email?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    bio?: StringNullableFilter<"users"> | string | null
    name?: StringFilter<"users"> | string
    password?: StringFilter<"users"> | string
    gender?: Enumgender_enumNullableFilter<"users"> | $Enums.gender_enum | null
    created_at?: DateTimeNullableFilter<"users"> | Date | string | null
    stars?: IntFilter<"users"> | number
    profile_photo_url?: StringNullableFilter<"users"> | string | null
    cover_photo_url?: StringNullableFilter<"users"> | string | null
    user_account_type?: Enumaccount_typeFilter<"users"> | $Enums.account_type
    preferences?: Post_categoriesListRelationFilter
    followers?: UsersListRelationFilter
    followings?: UsersListRelationFilter
    user_posts?: PostsListRelationFilter
    posts_liked?: PostsListRelationFilter
    comments_liked?: CommentsListRelationFilter
    messages?: MessagesListRelationFilter
    conversations?: ConversationsListRelationFilter
    user_sessions?: SessionsListRelationFilter
    nofitications?: NofiticationsListRelationFilter
    users_saved_posts?: Users_saved_postsListRelationFilter
    comments?: CommentsListRelationFilter
  }, "user_id" | "email">

  export type usersOrderByWithAggregationInput = {
    user_id?: SortOrder
    bio?: SortOrderInput | SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    gender?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    stars?: SortOrder
    profile_photo_url?: SortOrderInput | SortOrder
    cover_photo_url?: SortOrderInput | SortOrder
    user_account_type?: SortOrder
    _count?: usersCountOrderByAggregateInput
    _avg?: usersAvgOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
    _sum?: usersSumOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    user_id?: UuidWithAggregatesFilter<"users"> | string
    bio?: StringNullableWithAggregatesFilter<"users"> | string | null
    email?: StringWithAggregatesFilter<"users"> | string
    name?: StringWithAggregatesFilter<"users"> | string
    password?: StringWithAggregatesFilter<"users"> | string
    gender?: Enumgender_enumNullableWithAggregatesFilter<"users"> | $Enums.gender_enum | null
    created_at?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
    stars?: IntWithAggregatesFilter<"users"> | number
    profile_photo_url?: StringNullableWithAggregatesFilter<"users"> | string | null
    cover_photo_url?: StringNullableWithAggregatesFilter<"users"> | string | null
    user_account_type?: Enumaccount_typeWithAggregatesFilter<"users"> | $Enums.account_type
  }

  export type sessionsWhereInput = {
    AND?: sessionsWhereInput | sessionsWhereInput[]
    OR?: sessionsWhereInput[]
    NOT?: sessionsWhereInput | sessionsWhereInput[]
    session_id?: UuidFilter<"sessions"> | string
    session_token?: StringFilter<"sessions"> | string
    ip_addr?: StringNullableFilter<"sessions"> | string | null
    user_agent?: StringNullableFilter<"sessions"> | string | null
    session_user_id?: UuidNullableFilter<"sessions"> | string | null
    session_user?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
  }

  export type sessionsOrderByWithRelationInput = {
    session_id?: SortOrder
    session_token?: SortOrder
    ip_addr?: SortOrderInput | SortOrder
    user_agent?: SortOrderInput | SortOrder
    session_user_id?: SortOrderInput | SortOrder
    session_user?: usersOrderByWithRelationInput
  }

  export type sessionsWhereUniqueInput = Prisma.AtLeast<{
    session_id?: string
    session_token?: string
    AND?: sessionsWhereInput | sessionsWhereInput[]
    OR?: sessionsWhereInput[]
    NOT?: sessionsWhereInput | sessionsWhereInput[]
    ip_addr?: StringNullableFilter<"sessions"> | string | null
    user_agent?: StringNullableFilter<"sessions"> | string | null
    session_user_id?: UuidNullableFilter<"sessions"> | string | null
    session_user?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
  }, "session_id" | "session_token">

  export type sessionsOrderByWithAggregationInput = {
    session_id?: SortOrder
    session_token?: SortOrder
    ip_addr?: SortOrderInput | SortOrder
    user_agent?: SortOrderInput | SortOrder
    session_user_id?: SortOrderInput | SortOrder
    _count?: sessionsCountOrderByAggregateInput
    _max?: sessionsMaxOrderByAggregateInput
    _min?: sessionsMinOrderByAggregateInput
  }

  export type sessionsScalarWhereWithAggregatesInput = {
    AND?: sessionsScalarWhereWithAggregatesInput | sessionsScalarWhereWithAggregatesInput[]
    OR?: sessionsScalarWhereWithAggregatesInput[]
    NOT?: sessionsScalarWhereWithAggregatesInput | sessionsScalarWhereWithAggregatesInput[]
    session_id?: UuidWithAggregatesFilter<"sessions"> | string
    session_token?: StringWithAggregatesFilter<"sessions"> | string
    ip_addr?: StringNullableWithAggregatesFilter<"sessions"> | string | null
    user_agent?: StringNullableWithAggregatesFilter<"sessions"> | string | null
    session_user_id?: UuidNullableWithAggregatesFilter<"sessions"> | string | null
  }

  export type post_categoriesWhereInput = {
    AND?: post_categoriesWhereInput | post_categoriesWhereInput[]
    OR?: post_categoriesWhereInput[]
    NOT?: post_categoriesWhereInput | post_categoriesWhereInput[]
    category_id?: UuidFilter<"post_categories"> | string
    category_value?: StringFilter<"post_categories"> | string
    parent_category_id?: UuidNullableFilter<"post_categories"> | string | null
    parent_category?: XOR<Post_categoriesNullableScalarRelationFilter, post_categoriesWhereInput> | null
    sub_categories?: Post_categoriesListRelationFilter
    posts?: PostsListRelationFilter
    interested_users?: UsersListRelationFilter
  }

  export type post_categoriesOrderByWithRelationInput = {
    category_id?: SortOrder
    category_value?: SortOrder
    parent_category_id?: SortOrderInput | SortOrder
    parent_category?: post_categoriesOrderByWithRelationInput
    sub_categories?: post_categoriesOrderByRelationAggregateInput
    posts?: postsOrderByRelationAggregateInput
    interested_users?: usersOrderByRelationAggregateInput
  }

  export type post_categoriesWhereUniqueInput = Prisma.AtLeast<{
    category_id?: string
    category_value?: string
    AND?: post_categoriesWhereInput | post_categoriesWhereInput[]
    OR?: post_categoriesWhereInput[]
    NOT?: post_categoriesWhereInput | post_categoriesWhereInput[]
    parent_category_id?: UuidNullableFilter<"post_categories"> | string | null
    parent_category?: XOR<Post_categoriesNullableScalarRelationFilter, post_categoriesWhereInput> | null
    sub_categories?: Post_categoriesListRelationFilter
    posts?: PostsListRelationFilter
    interested_users?: UsersListRelationFilter
  }, "category_id" | "category_value">

  export type post_categoriesOrderByWithAggregationInput = {
    category_id?: SortOrder
    category_value?: SortOrder
    parent_category_id?: SortOrderInput | SortOrder
    _count?: post_categoriesCountOrderByAggregateInput
    _max?: post_categoriesMaxOrderByAggregateInput
    _min?: post_categoriesMinOrderByAggregateInput
  }

  export type post_categoriesScalarWhereWithAggregatesInput = {
    AND?: post_categoriesScalarWhereWithAggregatesInput | post_categoriesScalarWhereWithAggregatesInput[]
    OR?: post_categoriesScalarWhereWithAggregatesInput[]
    NOT?: post_categoriesScalarWhereWithAggregatesInput | post_categoriesScalarWhereWithAggregatesInput[]
    category_id?: UuidWithAggregatesFilter<"post_categories"> | string
    category_value?: StringWithAggregatesFilter<"post_categories"> | string
    parent_category_id?: UuidNullableWithAggregatesFilter<"post_categories"> | string | null
  }

  export type postsWhereInput = {
    AND?: postsWhereInput | postsWhereInput[]
    OR?: postsWhereInput[]
    NOT?: postsWhereInput | postsWhereInput[]
    post_id?: UuidFilter<"posts"> | string
    title?: StringFilter<"posts"> | string
    description?: StringNullableFilter<"posts"> | string | null
    price?: BigIntNullableFilter<"posts"> | bigint | number | null
    created_at?: DateTimeFilter<"posts"> | Date | string
    post_category_id?: UuidNullableFilter<"posts"> | string | null
    author_id?: UuidFilter<"posts"> | string
    post_category?: XOR<Post_categoriesNullableScalarRelationFilter, post_categoriesWhereInput> | null
    post_likers?: UsersListRelationFilter
    author?: XOR<UsersScalarRelationFilter, usersWhereInput>
    comments?: CommentsListRelationFilter
    medias?: MediasListRelationFilter
    users_saved_posts?: Users_saved_postsListRelationFilter
  }

  export type postsOrderByWithRelationInput = {
    post_id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    price?: SortOrderInput | SortOrder
    created_at?: SortOrder
    post_category_id?: SortOrderInput | SortOrder
    author_id?: SortOrder
    post_category?: post_categoriesOrderByWithRelationInput
    post_likers?: usersOrderByRelationAggregateInput
    author?: usersOrderByWithRelationInput
    comments?: commentsOrderByRelationAggregateInput
    medias?: mediasOrderByRelationAggregateInput
    users_saved_posts?: users_saved_postsOrderByRelationAggregateInput
  }

  export type postsWhereUniqueInput = Prisma.AtLeast<{
    post_id?: string
    AND?: postsWhereInput | postsWhereInput[]
    OR?: postsWhereInput[]
    NOT?: postsWhereInput | postsWhereInput[]
    title?: StringFilter<"posts"> | string
    description?: StringNullableFilter<"posts"> | string | null
    price?: BigIntNullableFilter<"posts"> | bigint | number | null
    created_at?: DateTimeFilter<"posts"> | Date | string
    post_category_id?: UuidNullableFilter<"posts"> | string | null
    author_id?: UuidFilter<"posts"> | string
    post_category?: XOR<Post_categoriesNullableScalarRelationFilter, post_categoriesWhereInput> | null
    post_likers?: UsersListRelationFilter
    author?: XOR<UsersScalarRelationFilter, usersWhereInput>
    comments?: CommentsListRelationFilter
    medias?: MediasListRelationFilter
    users_saved_posts?: Users_saved_postsListRelationFilter
  }, "post_id">

  export type postsOrderByWithAggregationInput = {
    post_id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    price?: SortOrderInput | SortOrder
    created_at?: SortOrder
    post_category_id?: SortOrderInput | SortOrder
    author_id?: SortOrder
    _count?: postsCountOrderByAggregateInput
    _avg?: postsAvgOrderByAggregateInput
    _max?: postsMaxOrderByAggregateInput
    _min?: postsMinOrderByAggregateInput
    _sum?: postsSumOrderByAggregateInput
  }

  export type postsScalarWhereWithAggregatesInput = {
    AND?: postsScalarWhereWithAggregatesInput | postsScalarWhereWithAggregatesInput[]
    OR?: postsScalarWhereWithAggregatesInput[]
    NOT?: postsScalarWhereWithAggregatesInput | postsScalarWhereWithAggregatesInput[]
    post_id?: UuidWithAggregatesFilter<"posts"> | string
    title?: StringWithAggregatesFilter<"posts"> | string
    description?: StringNullableWithAggregatesFilter<"posts"> | string | null
    price?: BigIntNullableWithAggregatesFilter<"posts"> | bigint | number | null
    created_at?: DateTimeWithAggregatesFilter<"posts"> | Date | string
    post_category_id?: UuidNullableWithAggregatesFilter<"posts"> | string | null
    author_id?: UuidWithAggregatesFilter<"posts"> | string
  }

  export type users_saved_postsWhereInput = {
    AND?: users_saved_postsWhereInput | users_saved_postsWhereInput[]
    OR?: users_saved_postsWhereInput[]
    NOT?: users_saved_postsWhereInput | users_saved_postsWhereInput[]
    post_saving_id?: UuidFilter<"users_saved_posts"> | string
    saved_at?: DateTimeFilter<"users_saved_posts"> | Date | string
    user_saving_id?: UuidNullableFilter<"users_saved_posts"> | string | null
    saved_post_id?: UuidNullableFilter<"users_saved_posts"> | string | null
    user_saving?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
    saved_post?: XOR<PostsNullableScalarRelationFilter, postsWhereInput> | null
  }

  export type users_saved_postsOrderByWithRelationInput = {
    post_saving_id?: SortOrder
    saved_at?: SortOrder
    user_saving_id?: SortOrderInput | SortOrder
    saved_post_id?: SortOrderInput | SortOrder
    user_saving?: usersOrderByWithRelationInput
    saved_post?: postsOrderByWithRelationInput
  }

  export type users_saved_postsWhereUniqueInput = Prisma.AtLeast<{
    post_saving_id?: string
    AND?: users_saved_postsWhereInput | users_saved_postsWhereInput[]
    OR?: users_saved_postsWhereInput[]
    NOT?: users_saved_postsWhereInput | users_saved_postsWhereInput[]
    saved_at?: DateTimeFilter<"users_saved_posts"> | Date | string
    user_saving_id?: UuidNullableFilter<"users_saved_posts"> | string | null
    saved_post_id?: UuidNullableFilter<"users_saved_posts"> | string | null
    user_saving?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
    saved_post?: XOR<PostsNullableScalarRelationFilter, postsWhereInput> | null
  }, "post_saving_id">

  export type users_saved_postsOrderByWithAggregationInput = {
    post_saving_id?: SortOrder
    saved_at?: SortOrder
    user_saving_id?: SortOrderInput | SortOrder
    saved_post_id?: SortOrderInput | SortOrder
    _count?: users_saved_postsCountOrderByAggregateInput
    _max?: users_saved_postsMaxOrderByAggregateInput
    _min?: users_saved_postsMinOrderByAggregateInput
  }

  export type users_saved_postsScalarWhereWithAggregatesInput = {
    AND?: users_saved_postsScalarWhereWithAggregatesInput | users_saved_postsScalarWhereWithAggregatesInput[]
    OR?: users_saved_postsScalarWhereWithAggregatesInput[]
    NOT?: users_saved_postsScalarWhereWithAggregatesInput | users_saved_postsScalarWhereWithAggregatesInput[]
    post_saving_id?: UuidWithAggregatesFilter<"users_saved_posts"> | string
    saved_at?: DateTimeWithAggregatesFilter<"users_saved_posts"> | Date | string
    user_saving_id?: UuidNullableWithAggregatesFilter<"users_saved_posts"> | string | null
    saved_post_id?: UuidNullableWithAggregatesFilter<"users_saved_posts"> | string | null
  }

  export type commentsWhereInput = {
    AND?: commentsWhereInput | commentsWhereInput[]
    OR?: commentsWhereInput[]
    NOT?: commentsWhereInput | commentsWhereInput[]
    comment_id?: UuidFilter<"comments"> | string
    body?: StringFilter<"comments"> | string
    created_at?: DateTimeNullableFilter<"comments"> | Date | string | null
    commentator_id?: UuidNullableFilter<"comments"> | string | null
    commented_post_id?: UuidNullableFilter<"comments"> | string | null
    parent_comment_id?: UuidNullableFilter<"comments"> | string | null
    comment_likers?: UsersListRelationFilter
    commentator?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
    commented_post?: XOR<PostsNullableScalarRelationFilter, postsWhereInput> | null
    parent_coment?: XOR<CommentsNullableScalarRelationFilter, commentsWhereInput> | null
    sub_comments?: CommentsListRelationFilter
  }

  export type commentsOrderByWithRelationInput = {
    comment_id?: SortOrder
    body?: SortOrder
    created_at?: SortOrderInput | SortOrder
    commentator_id?: SortOrderInput | SortOrder
    commented_post_id?: SortOrderInput | SortOrder
    parent_comment_id?: SortOrderInput | SortOrder
    comment_likers?: usersOrderByRelationAggregateInput
    commentator?: usersOrderByWithRelationInput
    commented_post?: postsOrderByWithRelationInput
    parent_coment?: commentsOrderByWithRelationInput
    sub_comments?: commentsOrderByRelationAggregateInput
  }

  export type commentsWhereUniqueInput = Prisma.AtLeast<{
    comment_id?: string
    AND?: commentsWhereInput | commentsWhereInput[]
    OR?: commentsWhereInput[]
    NOT?: commentsWhereInput | commentsWhereInput[]
    body?: StringFilter<"comments"> | string
    created_at?: DateTimeNullableFilter<"comments"> | Date | string | null
    commentator_id?: UuidNullableFilter<"comments"> | string | null
    commented_post_id?: UuidNullableFilter<"comments"> | string | null
    parent_comment_id?: UuidNullableFilter<"comments"> | string | null
    comment_likers?: UsersListRelationFilter
    commentator?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
    commented_post?: XOR<PostsNullableScalarRelationFilter, postsWhereInput> | null
    parent_coment?: XOR<CommentsNullableScalarRelationFilter, commentsWhereInput> | null
    sub_comments?: CommentsListRelationFilter
  }, "comment_id">

  export type commentsOrderByWithAggregationInput = {
    comment_id?: SortOrder
    body?: SortOrder
    created_at?: SortOrderInput | SortOrder
    commentator_id?: SortOrderInput | SortOrder
    commented_post_id?: SortOrderInput | SortOrder
    parent_comment_id?: SortOrderInput | SortOrder
    _count?: commentsCountOrderByAggregateInput
    _max?: commentsMaxOrderByAggregateInput
    _min?: commentsMinOrderByAggregateInput
  }

  export type commentsScalarWhereWithAggregatesInput = {
    AND?: commentsScalarWhereWithAggregatesInput | commentsScalarWhereWithAggregatesInput[]
    OR?: commentsScalarWhereWithAggregatesInput[]
    NOT?: commentsScalarWhereWithAggregatesInput | commentsScalarWhereWithAggregatesInput[]
    comment_id?: UuidWithAggregatesFilter<"comments"> | string
    body?: StringWithAggregatesFilter<"comments"> | string
    created_at?: DateTimeNullableWithAggregatesFilter<"comments"> | Date | string | null
    commentator_id?: UuidNullableWithAggregatesFilter<"comments"> | string | null
    commented_post_id?: UuidNullableWithAggregatesFilter<"comments"> | string | null
    parent_comment_id?: UuidNullableWithAggregatesFilter<"comments"> | string | null
  }

  export type mediasWhereInput = {
    AND?: mediasWhereInput | mediasWhereInput[]
    OR?: mediasWhereInput[]
    NOT?: mediasWhereInput | mediasWhereInput[]
    media_id?: UuidFilter<"medias"> | string
    fileType?: Enumfile_type_enumFilter<"medias"> | $Enums.file_type_enum
    encoding?: StringFilter<"medias"> | string
    mimetype?: StringFilter<"medias"> | string
    filename?: StringFilter<"medias"> | string
    fileUrl?: StringFilter<"medias"> | string
    path?: StringFilter<"medias"> | string
    size?: BigIntFilter<"medias"> | bigint | number
    media_post_id?: UuidNullableFilter<"medias"> | string | null
    media_post?: XOR<PostsNullableScalarRelationFilter, postsWhereInput> | null
  }

  export type mediasOrderByWithRelationInput = {
    media_id?: SortOrder
    fileType?: SortOrder
    encoding?: SortOrder
    mimetype?: SortOrder
    filename?: SortOrder
    fileUrl?: SortOrder
    path?: SortOrder
    size?: SortOrder
    media_post_id?: SortOrderInput | SortOrder
    media_post?: postsOrderByWithRelationInput
  }

  export type mediasWhereUniqueInput = Prisma.AtLeast<{
    media_id?: string
    AND?: mediasWhereInput | mediasWhereInput[]
    OR?: mediasWhereInput[]
    NOT?: mediasWhereInput | mediasWhereInput[]
    fileType?: Enumfile_type_enumFilter<"medias"> | $Enums.file_type_enum
    encoding?: StringFilter<"medias"> | string
    mimetype?: StringFilter<"medias"> | string
    filename?: StringFilter<"medias"> | string
    fileUrl?: StringFilter<"medias"> | string
    path?: StringFilter<"medias"> | string
    size?: BigIntFilter<"medias"> | bigint | number
    media_post_id?: UuidNullableFilter<"medias"> | string | null
    media_post?: XOR<PostsNullableScalarRelationFilter, postsWhereInput> | null
  }, "media_id">

  export type mediasOrderByWithAggregationInput = {
    media_id?: SortOrder
    fileType?: SortOrder
    encoding?: SortOrder
    mimetype?: SortOrder
    filename?: SortOrder
    fileUrl?: SortOrder
    path?: SortOrder
    size?: SortOrder
    media_post_id?: SortOrderInput | SortOrder
    _count?: mediasCountOrderByAggregateInput
    _avg?: mediasAvgOrderByAggregateInput
    _max?: mediasMaxOrderByAggregateInput
    _min?: mediasMinOrderByAggregateInput
    _sum?: mediasSumOrderByAggregateInput
  }

  export type mediasScalarWhereWithAggregatesInput = {
    AND?: mediasScalarWhereWithAggregatesInput | mediasScalarWhereWithAggregatesInput[]
    OR?: mediasScalarWhereWithAggregatesInput[]
    NOT?: mediasScalarWhereWithAggregatesInput | mediasScalarWhereWithAggregatesInput[]
    media_id?: UuidWithAggregatesFilter<"medias"> | string
    fileType?: Enumfile_type_enumWithAggregatesFilter<"medias"> | $Enums.file_type_enum
    encoding?: StringWithAggregatesFilter<"medias"> | string
    mimetype?: StringWithAggregatesFilter<"medias"> | string
    filename?: StringWithAggregatesFilter<"medias"> | string
    fileUrl?: StringWithAggregatesFilter<"medias"> | string
    path?: StringWithAggregatesFilter<"medias"> | string
    size?: BigIntWithAggregatesFilter<"medias"> | bigint | number
    media_post_id?: UuidNullableWithAggregatesFilter<"medias"> | string | null
  }

  export type attachmentsWhereInput = {
    AND?: attachmentsWhereInput | attachmentsWhereInput[]
    OR?: attachmentsWhereInput[]
    NOT?: attachmentsWhereInput | attachmentsWhereInput[]
    attachment_id?: UuidFilter<"attachments"> | string
    message_id?: UuidFilter<"attachments"> | string
    file_url?: StringFilter<"attachments"> | string
    file_type?: Enumfile_type_enumNullableFilter<"attachments"> | $Enums.file_type_enum | null
    created_at?: DateTimeNullableFilter<"attachments"> | Date | string | null
    messages?: XOR<MessagesScalarRelationFilter, messagesWhereInput>
  }

  export type attachmentsOrderByWithRelationInput = {
    attachment_id?: SortOrder
    message_id?: SortOrder
    file_url?: SortOrder
    file_type?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    messages?: messagesOrderByWithRelationInput
  }

  export type attachmentsWhereUniqueInput = Prisma.AtLeast<{
    attachment_id?: string
    AND?: attachmentsWhereInput | attachmentsWhereInput[]
    OR?: attachmentsWhereInput[]
    NOT?: attachmentsWhereInput | attachmentsWhereInput[]
    message_id?: UuidFilter<"attachments"> | string
    file_url?: StringFilter<"attachments"> | string
    file_type?: Enumfile_type_enumNullableFilter<"attachments"> | $Enums.file_type_enum | null
    created_at?: DateTimeNullableFilter<"attachments"> | Date | string | null
    messages?: XOR<MessagesScalarRelationFilter, messagesWhereInput>
  }, "attachment_id">

  export type attachmentsOrderByWithAggregationInput = {
    attachment_id?: SortOrder
    message_id?: SortOrder
    file_url?: SortOrder
    file_type?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: attachmentsCountOrderByAggregateInput
    _max?: attachmentsMaxOrderByAggregateInput
    _min?: attachmentsMinOrderByAggregateInput
  }

  export type attachmentsScalarWhereWithAggregatesInput = {
    AND?: attachmentsScalarWhereWithAggregatesInput | attachmentsScalarWhereWithAggregatesInput[]
    OR?: attachmentsScalarWhereWithAggregatesInput[]
    NOT?: attachmentsScalarWhereWithAggregatesInput | attachmentsScalarWhereWithAggregatesInput[]
    attachment_id?: UuidWithAggregatesFilter<"attachments"> | string
    message_id?: UuidWithAggregatesFilter<"attachments"> | string
    file_url?: StringWithAggregatesFilter<"attachments"> | string
    file_type?: Enumfile_type_enumNullableWithAggregatesFilter<"attachments"> | $Enums.file_type_enum | null
    created_at?: DateTimeNullableWithAggregatesFilter<"attachments"> | Date | string | null
  }

  export type conversationsWhereInput = {
    AND?: conversationsWhereInput | conversationsWhereInput[]
    OR?: conversationsWhereInput[]
    NOT?: conversationsWhereInput | conversationsWhereInput[]
    conversation_id?: UuidFilter<"conversations"> | string
    conversation_type?: Enumconversation_type_enumNullableFilter<"conversations"> | $Enums.conversation_type_enum | null
    conversation_name?: StringNullableFilter<"conversations"> | string | null
    created_at?: DateTimeNullableFilter<"conversations"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"conversations"> | Date | string | null
    product_id?: UuidFilter<"conversations"> | string
    messages?: MessagesListRelationFilter
    users?: UsersListRelationFilter
  }

  export type conversationsOrderByWithRelationInput = {
    conversation_id?: SortOrder
    conversation_type?: SortOrderInput | SortOrder
    conversation_name?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    product_id?: SortOrder
    messages?: messagesOrderByRelationAggregateInput
    users?: usersOrderByRelationAggregateInput
  }

  export type conversationsWhereUniqueInput = Prisma.AtLeast<{
    conversation_id?: string
    AND?: conversationsWhereInput | conversationsWhereInput[]
    OR?: conversationsWhereInput[]
    NOT?: conversationsWhereInput | conversationsWhereInput[]
    conversation_type?: Enumconversation_type_enumNullableFilter<"conversations"> | $Enums.conversation_type_enum | null
    conversation_name?: StringNullableFilter<"conversations"> | string | null
    created_at?: DateTimeNullableFilter<"conversations"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"conversations"> | Date | string | null
    product_id?: UuidFilter<"conversations"> | string
    messages?: MessagesListRelationFilter
    users?: UsersListRelationFilter
  }, "conversation_id">

  export type conversationsOrderByWithAggregationInput = {
    conversation_id?: SortOrder
    conversation_type?: SortOrderInput | SortOrder
    conversation_name?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    product_id?: SortOrder
    _count?: conversationsCountOrderByAggregateInput
    _max?: conversationsMaxOrderByAggregateInput
    _min?: conversationsMinOrderByAggregateInput
  }

  export type conversationsScalarWhereWithAggregatesInput = {
    AND?: conversationsScalarWhereWithAggregatesInput | conversationsScalarWhereWithAggregatesInput[]
    OR?: conversationsScalarWhereWithAggregatesInput[]
    NOT?: conversationsScalarWhereWithAggregatesInput | conversationsScalarWhereWithAggregatesInput[]
    conversation_id?: UuidWithAggregatesFilter<"conversations"> | string
    conversation_type?: Enumconversation_type_enumNullableWithAggregatesFilter<"conversations"> | $Enums.conversation_type_enum | null
    conversation_name?: StringNullableWithAggregatesFilter<"conversations"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"conversations"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"conversations"> | Date | string | null
    product_id?: UuidWithAggregatesFilter<"conversations"> | string
  }

  export type messagesWhereInput = {
    AND?: messagesWhereInput | messagesWhereInput[]
    OR?: messagesWhereInput[]
    NOT?: messagesWhereInput | messagesWhereInput[]
    message_id?: UuidFilter<"messages"> | string
    conversation_id?: UuidFilter<"messages"> | string
    response_id?: UuidNullableFilter<"messages"> | string | null
    sender_id?: UuidFilter<"messages"> | string
    recipient_id?: UuidFilter<"messages"> | string
    message_status?: Enummessage_status_enumNullableFilter<"messages"> | $Enums.message_status_enum | null
    content?: StringFilter<"messages"> | string
    created_at?: DateTimeNullableFilter<"messages"> | Date | string | null
    attachments?: AttachmentsListRelationFilter
    conversations?: XOR<ConversationsScalarRelationFilter, conversationsWhereInput>
    users?: UsersListRelationFilter
  }

  export type messagesOrderByWithRelationInput = {
    message_id?: SortOrder
    conversation_id?: SortOrder
    response_id?: SortOrderInput | SortOrder
    sender_id?: SortOrder
    recipient_id?: SortOrder
    message_status?: SortOrderInput | SortOrder
    content?: SortOrder
    created_at?: SortOrderInput | SortOrder
    attachments?: attachmentsOrderByRelationAggregateInput
    conversations?: conversationsOrderByWithRelationInput
    users?: usersOrderByRelationAggregateInput
  }

  export type messagesWhereUniqueInput = Prisma.AtLeast<{
    message_id?: string
    AND?: messagesWhereInput | messagesWhereInput[]
    OR?: messagesWhereInput[]
    NOT?: messagesWhereInput | messagesWhereInput[]
    conversation_id?: UuidFilter<"messages"> | string
    response_id?: UuidNullableFilter<"messages"> | string | null
    sender_id?: UuidFilter<"messages"> | string
    recipient_id?: UuidFilter<"messages"> | string
    message_status?: Enummessage_status_enumNullableFilter<"messages"> | $Enums.message_status_enum | null
    content?: StringFilter<"messages"> | string
    created_at?: DateTimeNullableFilter<"messages"> | Date | string | null
    attachments?: AttachmentsListRelationFilter
    conversations?: XOR<ConversationsScalarRelationFilter, conversationsWhereInput>
    users?: UsersListRelationFilter
  }, "message_id">

  export type messagesOrderByWithAggregationInput = {
    message_id?: SortOrder
    conversation_id?: SortOrder
    response_id?: SortOrderInput | SortOrder
    sender_id?: SortOrder
    recipient_id?: SortOrder
    message_status?: SortOrderInput | SortOrder
    content?: SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: messagesCountOrderByAggregateInput
    _max?: messagesMaxOrderByAggregateInput
    _min?: messagesMinOrderByAggregateInput
  }

  export type messagesScalarWhereWithAggregatesInput = {
    AND?: messagesScalarWhereWithAggregatesInput | messagesScalarWhereWithAggregatesInput[]
    OR?: messagesScalarWhereWithAggregatesInput[]
    NOT?: messagesScalarWhereWithAggregatesInput | messagesScalarWhereWithAggregatesInput[]
    message_id?: UuidWithAggregatesFilter<"messages"> | string
    conversation_id?: UuidWithAggregatesFilter<"messages"> | string
    response_id?: UuidNullableWithAggregatesFilter<"messages"> | string | null
    sender_id?: UuidWithAggregatesFilter<"messages"> | string
    recipient_id?: UuidWithAggregatesFilter<"messages"> | string
    message_status?: Enummessage_status_enumNullableWithAggregatesFilter<"messages"> | $Enums.message_status_enum | null
    content?: StringWithAggregatesFilter<"messages"> | string
    created_at?: DateTimeNullableWithAggregatesFilter<"messages"> | Date | string | null
  }

  export type nofiticationsCreateInput = {
    notification_id?: string
    sender_name: string
    receiver_name: string
    content: string
    date?: Date | string
    users?: usersCreateNestedManyWithoutNofiticationsInput
  }

  export type nofiticationsUncheckedCreateInput = {
    notification_id?: string
    sender_name: string
    receiver_name: string
    content: string
    date?: Date | string
    users?: usersUncheckedCreateNestedManyWithoutNofiticationsInput
  }

  export type nofiticationsUpdateInput = {
    notification_id?: StringFieldUpdateOperationsInput | string
    sender_name?: StringFieldUpdateOperationsInput | string
    receiver_name?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: usersUpdateManyWithoutNofiticationsNestedInput
  }

  export type nofiticationsUncheckedUpdateInput = {
    notification_id?: StringFieldUpdateOperationsInput | string
    sender_name?: StringFieldUpdateOperationsInput | string
    receiver_name?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: usersUncheckedUpdateManyWithoutNofiticationsNestedInput
  }

  export type nofiticationsCreateManyInput = {
    notification_id?: string
    sender_name: string
    receiver_name: string
    content: string
    date?: Date | string
  }

  export type nofiticationsUpdateManyMutationInput = {
    notification_id?: StringFieldUpdateOperationsInput | string
    sender_name?: StringFieldUpdateOperationsInput | string
    receiver_name?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type nofiticationsUncheckedUpdateManyInput = {
    notification_id?: StringFieldUpdateOperationsInput | string
    sender_name?: StringFieldUpdateOperationsInput | string
    receiver_name?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usersCreateInput = {
    user_id?: string
    bio?: string | null
    email: string
    name: string
    password: string
    gender?: $Enums.gender_enum | null
    created_at?: Date | string | null
    stars?: number
    profile_photo_url?: string | null
    cover_photo_url?: string | null
    user_account_type?: $Enums.account_type
    preferences?: post_categoriesCreateNestedManyWithoutInterested_usersInput
    followers?: usersCreateNestedManyWithoutFollowingsInput
    followings?: usersCreateNestedManyWithoutFollowersInput
    user_posts?: postsCreateNestedManyWithoutAuthorInput
    posts_liked?: postsCreateNestedManyWithoutPost_likersInput
    comments_liked?: commentsCreateNestedManyWithoutComment_likersInput
    messages?: messagesCreateNestedManyWithoutUsersInput
    conversations?: conversationsCreateNestedManyWithoutUsersInput
    user_sessions?: sessionsCreateNestedManyWithoutSession_userInput
    nofitications?: nofiticationsCreateNestedManyWithoutUsersInput
    users_saved_posts?: users_saved_postsCreateNestedManyWithoutUser_savingInput
    comments?: commentsCreateNestedManyWithoutCommentatorInput
  }

  export type usersUncheckedCreateInput = {
    user_id?: string
    bio?: string | null
    email: string
    name: string
    password: string
    gender?: $Enums.gender_enum | null
    created_at?: Date | string | null
    stars?: number
    profile_photo_url?: string | null
    cover_photo_url?: string | null
    user_account_type?: $Enums.account_type
    preferences?: post_categoriesUncheckedCreateNestedManyWithoutInterested_usersInput
    followers?: usersUncheckedCreateNestedManyWithoutFollowingsInput
    followings?: usersUncheckedCreateNestedManyWithoutFollowersInput
    user_posts?: postsUncheckedCreateNestedManyWithoutAuthorInput
    posts_liked?: postsUncheckedCreateNestedManyWithoutPost_likersInput
    comments_liked?: commentsUncheckedCreateNestedManyWithoutComment_likersInput
    messages?: messagesUncheckedCreateNestedManyWithoutUsersInput
    conversations?: conversationsUncheckedCreateNestedManyWithoutUsersInput
    user_sessions?: sessionsUncheckedCreateNestedManyWithoutSession_userInput
    nofitications?: nofiticationsUncheckedCreateNestedManyWithoutUsersInput
    users_saved_posts?: users_saved_postsUncheckedCreateNestedManyWithoutUser_savingInput
    comments?: commentsUncheckedCreateNestedManyWithoutCommentatorInput
  }

  export type usersUpdateInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    gender?: NullableEnumgender_enumFieldUpdateOperationsInput | $Enums.gender_enum | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stars?: IntFieldUpdateOperationsInput | number
    profile_photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    cover_photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    user_account_type?: Enumaccount_typeFieldUpdateOperationsInput | $Enums.account_type
    preferences?: post_categoriesUpdateManyWithoutInterested_usersNestedInput
    followers?: usersUpdateManyWithoutFollowingsNestedInput
    followings?: usersUpdateManyWithoutFollowersNestedInput
    user_posts?: postsUpdateManyWithoutAuthorNestedInput
    posts_liked?: postsUpdateManyWithoutPost_likersNestedInput
    comments_liked?: commentsUpdateManyWithoutComment_likersNestedInput
    messages?: messagesUpdateManyWithoutUsersNestedInput
    conversations?: conversationsUpdateManyWithoutUsersNestedInput
    user_sessions?: sessionsUpdateManyWithoutSession_userNestedInput
    nofitications?: nofiticationsUpdateManyWithoutUsersNestedInput
    users_saved_posts?: users_saved_postsUpdateManyWithoutUser_savingNestedInput
    comments?: commentsUpdateManyWithoutCommentatorNestedInput
  }

  export type usersUncheckedUpdateInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    gender?: NullableEnumgender_enumFieldUpdateOperationsInput | $Enums.gender_enum | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stars?: IntFieldUpdateOperationsInput | number
    profile_photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    cover_photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    user_account_type?: Enumaccount_typeFieldUpdateOperationsInput | $Enums.account_type
    preferences?: post_categoriesUncheckedUpdateManyWithoutInterested_usersNestedInput
    followers?: usersUncheckedUpdateManyWithoutFollowingsNestedInput
    followings?: usersUncheckedUpdateManyWithoutFollowersNestedInput
    user_posts?: postsUncheckedUpdateManyWithoutAuthorNestedInput
    posts_liked?: postsUncheckedUpdateManyWithoutPost_likersNestedInput
    comments_liked?: commentsUncheckedUpdateManyWithoutComment_likersNestedInput
    messages?: messagesUncheckedUpdateManyWithoutUsersNestedInput
    conversations?: conversationsUncheckedUpdateManyWithoutUsersNestedInput
    user_sessions?: sessionsUncheckedUpdateManyWithoutSession_userNestedInput
    nofitications?: nofiticationsUncheckedUpdateManyWithoutUsersNestedInput
    users_saved_posts?: users_saved_postsUncheckedUpdateManyWithoutUser_savingNestedInput
    comments?: commentsUncheckedUpdateManyWithoutCommentatorNestedInput
  }

  export type usersCreateManyInput = {
    user_id?: string
    bio?: string | null
    email: string
    name: string
    password: string
    gender?: $Enums.gender_enum | null
    created_at?: Date | string | null
    stars?: number
    profile_photo_url?: string | null
    cover_photo_url?: string | null
    user_account_type?: $Enums.account_type
  }

  export type usersUpdateManyMutationInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    gender?: NullableEnumgender_enumFieldUpdateOperationsInput | $Enums.gender_enum | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stars?: IntFieldUpdateOperationsInput | number
    profile_photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    cover_photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    user_account_type?: Enumaccount_typeFieldUpdateOperationsInput | $Enums.account_type
  }

  export type usersUncheckedUpdateManyInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    gender?: NullableEnumgender_enumFieldUpdateOperationsInput | $Enums.gender_enum | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stars?: IntFieldUpdateOperationsInput | number
    profile_photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    cover_photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    user_account_type?: Enumaccount_typeFieldUpdateOperationsInput | $Enums.account_type
  }

  export type sessionsCreateInput = {
    session_id?: string
    session_token: string
    ip_addr?: string | null
    user_agent?: string | null
    session_user?: usersCreateNestedOneWithoutUser_sessionsInput
  }

  export type sessionsUncheckedCreateInput = {
    session_id?: string
    session_token: string
    ip_addr?: string | null
    user_agent?: string | null
    session_user_id?: string | null
  }

  export type sessionsUpdateInput = {
    session_id?: StringFieldUpdateOperationsInput | string
    session_token?: StringFieldUpdateOperationsInput | string
    ip_addr?: NullableStringFieldUpdateOperationsInput | string | null
    user_agent?: NullableStringFieldUpdateOperationsInput | string | null
    session_user?: usersUpdateOneWithoutUser_sessionsNestedInput
  }

  export type sessionsUncheckedUpdateInput = {
    session_id?: StringFieldUpdateOperationsInput | string
    session_token?: StringFieldUpdateOperationsInput | string
    ip_addr?: NullableStringFieldUpdateOperationsInput | string | null
    user_agent?: NullableStringFieldUpdateOperationsInput | string | null
    session_user_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type sessionsCreateManyInput = {
    session_id?: string
    session_token: string
    ip_addr?: string | null
    user_agent?: string | null
    session_user_id?: string | null
  }

  export type sessionsUpdateManyMutationInput = {
    session_id?: StringFieldUpdateOperationsInput | string
    session_token?: StringFieldUpdateOperationsInput | string
    ip_addr?: NullableStringFieldUpdateOperationsInput | string | null
    user_agent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type sessionsUncheckedUpdateManyInput = {
    session_id?: StringFieldUpdateOperationsInput | string
    session_token?: StringFieldUpdateOperationsInput | string
    ip_addr?: NullableStringFieldUpdateOperationsInput | string | null
    user_agent?: NullableStringFieldUpdateOperationsInput | string | null
    session_user_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type post_categoriesCreateInput = {
    category_id?: string
    category_value: string
    parent_category?: post_categoriesCreateNestedOneWithoutSub_categoriesInput
    sub_categories?: post_categoriesCreateNestedManyWithoutParent_categoryInput
    posts?: postsCreateNestedManyWithoutPost_categoryInput
    interested_users?: usersCreateNestedManyWithoutPreferencesInput
  }

  export type post_categoriesUncheckedCreateInput = {
    category_id?: string
    category_value: string
    parent_category_id?: string | null
    sub_categories?: post_categoriesUncheckedCreateNestedManyWithoutParent_categoryInput
    posts?: postsUncheckedCreateNestedManyWithoutPost_categoryInput
    interested_users?: usersUncheckedCreateNestedManyWithoutPreferencesInput
  }

  export type post_categoriesUpdateInput = {
    category_id?: StringFieldUpdateOperationsInput | string
    category_value?: StringFieldUpdateOperationsInput | string
    parent_category?: post_categoriesUpdateOneWithoutSub_categoriesNestedInput
    sub_categories?: post_categoriesUpdateManyWithoutParent_categoryNestedInput
    posts?: postsUpdateManyWithoutPost_categoryNestedInput
    interested_users?: usersUpdateManyWithoutPreferencesNestedInput
  }

  export type post_categoriesUncheckedUpdateInput = {
    category_id?: StringFieldUpdateOperationsInput | string
    category_value?: StringFieldUpdateOperationsInput | string
    parent_category_id?: NullableStringFieldUpdateOperationsInput | string | null
    sub_categories?: post_categoriesUncheckedUpdateManyWithoutParent_categoryNestedInput
    posts?: postsUncheckedUpdateManyWithoutPost_categoryNestedInput
    interested_users?: usersUncheckedUpdateManyWithoutPreferencesNestedInput
  }

  export type post_categoriesCreateManyInput = {
    category_id?: string
    category_value: string
    parent_category_id?: string | null
  }

  export type post_categoriesUpdateManyMutationInput = {
    category_id?: StringFieldUpdateOperationsInput | string
    category_value?: StringFieldUpdateOperationsInput | string
  }

  export type post_categoriesUncheckedUpdateManyInput = {
    category_id?: StringFieldUpdateOperationsInput | string
    category_value?: StringFieldUpdateOperationsInput | string
    parent_category_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type postsCreateInput = {
    post_id?: string
    title: string
    description?: string | null
    price?: bigint | number | null
    created_at?: Date | string
    post_category?: post_categoriesCreateNestedOneWithoutPostsInput
    post_likers?: usersCreateNestedManyWithoutPosts_likedInput
    author: usersCreateNestedOneWithoutUser_postsInput
    comments?: commentsCreateNestedManyWithoutCommented_postInput
    medias?: mediasCreateNestedManyWithoutMedia_postInput
    users_saved_posts?: users_saved_postsCreateNestedManyWithoutSaved_postInput
  }

  export type postsUncheckedCreateInput = {
    post_id?: string
    title: string
    description?: string | null
    price?: bigint | number | null
    created_at?: Date | string
    post_category_id?: string | null
    author_id: string
    post_likers?: usersUncheckedCreateNestedManyWithoutPosts_likedInput
    comments?: commentsUncheckedCreateNestedManyWithoutCommented_postInput
    medias?: mediasUncheckedCreateNestedManyWithoutMedia_postInput
    users_saved_posts?: users_saved_postsUncheckedCreateNestedManyWithoutSaved_postInput
  }

  export type postsUpdateInput = {
    post_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    post_category?: post_categoriesUpdateOneWithoutPostsNestedInput
    post_likers?: usersUpdateManyWithoutPosts_likedNestedInput
    author?: usersUpdateOneRequiredWithoutUser_postsNestedInput
    comments?: commentsUpdateManyWithoutCommented_postNestedInput
    medias?: mediasUpdateManyWithoutMedia_postNestedInput
    users_saved_posts?: users_saved_postsUpdateManyWithoutSaved_postNestedInput
  }

  export type postsUncheckedUpdateInput = {
    post_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    post_category_id?: NullableStringFieldUpdateOperationsInput | string | null
    author_id?: StringFieldUpdateOperationsInput | string
    post_likers?: usersUncheckedUpdateManyWithoutPosts_likedNestedInput
    comments?: commentsUncheckedUpdateManyWithoutCommented_postNestedInput
    medias?: mediasUncheckedUpdateManyWithoutMedia_postNestedInput
    users_saved_posts?: users_saved_postsUncheckedUpdateManyWithoutSaved_postNestedInput
  }

  export type postsCreateManyInput = {
    post_id?: string
    title: string
    description?: string | null
    price?: bigint | number | null
    created_at?: Date | string
    post_category_id?: string | null
    author_id: string
  }

  export type postsUpdateManyMutationInput = {
    post_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type postsUncheckedUpdateManyInput = {
    post_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    post_category_id?: NullableStringFieldUpdateOperationsInput | string | null
    author_id?: StringFieldUpdateOperationsInput | string
  }

  export type users_saved_postsCreateInput = {
    post_saving_id?: string
    saved_at?: Date | string
    user_saving?: usersCreateNestedOneWithoutUsers_saved_postsInput
    saved_post?: postsCreateNestedOneWithoutUsers_saved_postsInput
  }

  export type users_saved_postsUncheckedCreateInput = {
    post_saving_id?: string
    saved_at?: Date | string
    user_saving_id?: string | null
    saved_post_id?: string | null
  }

  export type users_saved_postsUpdateInput = {
    post_saving_id?: StringFieldUpdateOperationsInput | string
    saved_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_saving?: usersUpdateOneWithoutUsers_saved_postsNestedInput
    saved_post?: postsUpdateOneWithoutUsers_saved_postsNestedInput
  }

  export type users_saved_postsUncheckedUpdateInput = {
    post_saving_id?: StringFieldUpdateOperationsInput | string
    saved_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_saving_id?: NullableStringFieldUpdateOperationsInput | string | null
    saved_post_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type users_saved_postsCreateManyInput = {
    post_saving_id?: string
    saved_at?: Date | string
    user_saving_id?: string | null
    saved_post_id?: string | null
  }

  export type users_saved_postsUpdateManyMutationInput = {
    post_saving_id?: StringFieldUpdateOperationsInput | string
    saved_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type users_saved_postsUncheckedUpdateManyInput = {
    post_saving_id?: StringFieldUpdateOperationsInput | string
    saved_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_saving_id?: NullableStringFieldUpdateOperationsInput | string | null
    saved_post_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type commentsCreateInput = {
    comment_id?: string
    body: string
    created_at?: Date | string | null
    comment_likers?: usersCreateNestedManyWithoutComments_likedInput
    commentator?: usersCreateNestedOneWithoutCommentsInput
    commented_post?: postsCreateNestedOneWithoutCommentsInput
    parent_coment?: commentsCreateNestedOneWithoutSub_commentsInput
    sub_comments?: commentsCreateNestedManyWithoutParent_comentInput
  }

  export type commentsUncheckedCreateInput = {
    comment_id?: string
    body: string
    created_at?: Date | string | null
    commentator_id?: string | null
    commented_post_id?: string | null
    parent_comment_id?: string | null
    comment_likers?: usersUncheckedCreateNestedManyWithoutComments_likedInput
    sub_comments?: commentsUncheckedCreateNestedManyWithoutParent_comentInput
  }

  export type commentsUpdateInput = {
    comment_id?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comment_likers?: usersUpdateManyWithoutComments_likedNestedInput
    commentator?: usersUpdateOneWithoutCommentsNestedInput
    commented_post?: postsUpdateOneWithoutCommentsNestedInput
    parent_coment?: commentsUpdateOneWithoutSub_commentsNestedInput
    sub_comments?: commentsUpdateManyWithoutParent_comentNestedInput
  }

  export type commentsUncheckedUpdateInput = {
    comment_id?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    commentator_id?: NullableStringFieldUpdateOperationsInput | string | null
    commented_post_id?: NullableStringFieldUpdateOperationsInput | string | null
    parent_comment_id?: NullableStringFieldUpdateOperationsInput | string | null
    comment_likers?: usersUncheckedUpdateManyWithoutComments_likedNestedInput
    sub_comments?: commentsUncheckedUpdateManyWithoutParent_comentNestedInput
  }

  export type commentsCreateManyInput = {
    comment_id?: string
    body: string
    created_at?: Date | string | null
    commentator_id?: string | null
    commented_post_id?: string | null
    parent_comment_id?: string | null
  }

  export type commentsUpdateManyMutationInput = {
    comment_id?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type commentsUncheckedUpdateManyInput = {
    comment_id?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    commentator_id?: NullableStringFieldUpdateOperationsInput | string | null
    commented_post_id?: NullableStringFieldUpdateOperationsInput | string | null
    parent_comment_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type mediasCreateInput = {
    media_id?: string
    fileType: $Enums.file_type_enum
    encoding: string
    mimetype: string
    filename: string
    fileUrl: string
    path: string
    size: bigint | number
    media_post?: postsCreateNestedOneWithoutMediasInput
  }

  export type mediasUncheckedCreateInput = {
    media_id?: string
    fileType: $Enums.file_type_enum
    encoding: string
    mimetype: string
    filename: string
    fileUrl: string
    path: string
    size: bigint | number
    media_post_id?: string | null
  }

  export type mediasUpdateInput = {
    media_id?: StringFieldUpdateOperationsInput | string
    fileType?: Enumfile_type_enumFieldUpdateOperationsInput | $Enums.file_type_enum
    encoding?: StringFieldUpdateOperationsInput | string
    mimetype?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    size?: BigIntFieldUpdateOperationsInput | bigint | number
    media_post?: postsUpdateOneWithoutMediasNestedInput
  }

  export type mediasUncheckedUpdateInput = {
    media_id?: StringFieldUpdateOperationsInput | string
    fileType?: Enumfile_type_enumFieldUpdateOperationsInput | $Enums.file_type_enum
    encoding?: StringFieldUpdateOperationsInput | string
    mimetype?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    size?: BigIntFieldUpdateOperationsInput | bigint | number
    media_post_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type mediasCreateManyInput = {
    media_id?: string
    fileType: $Enums.file_type_enum
    encoding: string
    mimetype: string
    filename: string
    fileUrl: string
    path: string
    size: bigint | number
    media_post_id?: string | null
  }

  export type mediasUpdateManyMutationInput = {
    media_id?: StringFieldUpdateOperationsInput | string
    fileType?: Enumfile_type_enumFieldUpdateOperationsInput | $Enums.file_type_enum
    encoding?: StringFieldUpdateOperationsInput | string
    mimetype?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    size?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type mediasUncheckedUpdateManyInput = {
    media_id?: StringFieldUpdateOperationsInput | string
    fileType?: Enumfile_type_enumFieldUpdateOperationsInput | $Enums.file_type_enum
    encoding?: StringFieldUpdateOperationsInput | string
    mimetype?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    size?: BigIntFieldUpdateOperationsInput | bigint | number
    media_post_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type attachmentsCreateInput = {
    attachment_id?: string
    file_url: string
    file_type?: $Enums.file_type_enum | null
    created_at?: Date | string | null
    messages: messagesCreateNestedOneWithoutAttachmentsInput
  }

  export type attachmentsUncheckedCreateInput = {
    attachment_id?: string
    message_id: string
    file_url: string
    file_type?: $Enums.file_type_enum | null
    created_at?: Date | string | null
  }

  export type attachmentsUpdateInput = {
    attachment_id?: StringFieldUpdateOperationsInput | string
    file_url?: StringFieldUpdateOperationsInput | string
    file_type?: NullableEnumfile_type_enumFieldUpdateOperationsInput | $Enums.file_type_enum | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    messages?: messagesUpdateOneRequiredWithoutAttachmentsNestedInput
  }

  export type attachmentsUncheckedUpdateInput = {
    attachment_id?: StringFieldUpdateOperationsInput | string
    message_id?: StringFieldUpdateOperationsInput | string
    file_url?: StringFieldUpdateOperationsInput | string
    file_type?: NullableEnumfile_type_enumFieldUpdateOperationsInput | $Enums.file_type_enum | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type attachmentsCreateManyInput = {
    attachment_id?: string
    message_id: string
    file_url: string
    file_type?: $Enums.file_type_enum | null
    created_at?: Date | string | null
  }

  export type attachmentsUpdateManyMutationInput = {
    attachment_id?: StringFieldUpdateOperationsInput | string
    file_url?: StringFieldUpdateOperationsInput | string
    file_type?: NullableEnumfile_type_enumFieldUpdateOperationsInput | $Enums.file_type_enum | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type attachmentsUncheckedUpdateManyInput = {
    attachment_id?: StringFieldUpdateOperationsInput | string
    message_id?: StringFieldUpdateOperationsInput | string
    file_url?: StringFieldUpdateOperationsInput | string
    file_type?: NullableEnumfile_type_enumFieldUpdateOperationsInput | $Enums.file_type_enum | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type conversationsCreateInput = {
    conversation_id?: string
    conversation_type?: $Enums.conversation_type_enum | null
    conversation_name?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    product_id: string
    messages?: messagesCreateNestedManyWithoutConversationsInput
    users?: usersCreateNestedManyWithoutConversationsInput
  }

  export type conversationsUncheckedCreateInput = {
    conversation_id?: string
    conversation_type?: $Enums.conversation_type_enum | null
    conversation_name?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    product_id: string
    messages?: messagesUncheckedCreateNestedManyWithoutConversationsInput
    users?: usersUncheckedCreateNestedManyWithoutConversationsInput
  }

  export type conversationsUpdateInput = {
    conversation_id?: StringFieldUpdateOperationsInput | string
    conversation_type?: NullableEnumconversation_type_enumFieldUpdateOperationsInput | $Enums.conversation_type_enum | null
    conversation_name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    product_id?: StringFieldUpdateOperationsInput | string
    messages?: messagesUpdateManyWithoutConversationsNestedInput
    users?: usersUpdateManyWithoutConversationsNestedInput
  }

  export type conversationsUncheckedUpdateInput = {
    conversation_id?: StringFieldUpdateOperationsInput | string
    conversation_type?: NullableEnumconversation_type_enumFieldUpdateOperationsInput | $Enums.conversation_type_enum | null
    conversation_name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    product_id?: StringFieldUpdateOperationsInput | string
    messages?: messagesUncheckedUpdateManyWithoutConversationsNestedInput
    users?: usersUncheckedUpdateManyWithoutConversationsNestedInput
  }

  export type conversationsCreateManyInput = {
    conversation_id?: string
    conversation_type?: $Enums.conversation_type_enum | null
    conversation_name?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    product_id: string
  }

  export type conversationsUpdateManyMutationInput = {
    conversation_id?: StringFieldUpdateOperationsInput | string
    conversation_type?: NullableEnumconversation_type_enumFieldUpdateOperationsInput | $Enums.conversation_type_enum | null
    conversation_name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    product_id?: StringFieldUpdateOperationsInput | string
  }

  export type conversationsUncheckedUpdateManyInput = {
    conversation_id?: StringFieldUpdateOperationsInput | string
    conversation_type?: NullableEnumconversation_type_enumFieldUpdateOperationsInput | $Enums.conversation_type_enum | null
    conversation_name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    product_id?: StringFieldUpdateOperationsInput | string
  }

  export type messagesCreateInput = {
    message_id?: string
    response_id?: string | null
    sender_id: string
    recipient_id: string
    message_status?: $Enums.message_status_enum | null
    content: string
    created_at?: Date | string | null
    attachments?: attachmentsCreateNestedManyWithoutMessagesInput
    conversations: conversationsCreateNestedOneWithoutMessagesInput
    users?: usersCreateNestedManyWithoutMessagesInput
  }

  export type messagesUncheckedCreateInput = {
    message_id?: string
    conversation_id: string
    response_id?: string | null
    sender_id: string
    recipient_id: string
    message_status?: $Enums.message_status_enum | null
    content: string
    created_at?: Date | string | null
    attachments?: attachmentsUncheckedCreateNestedManyWithoutMessagesInput
    users?: usersUncheckedCreateNestedManyWithoutMessagesInput
  }

  export type messagesUpdateInput = {
    message_id?: StringFieldUpdateOperationsInput | string
    response_id?: NullableStringFieldUpdateOperationsInput | string | null
    sender_id?: StringFieldUpdateOperationsInput | string
    recipient_id?: StringFieldUpdateOperationsInput | string
    message_status?: NullableEnummessage_status_enumFieldUpdateOperationsInput | $Enums.message_status_enum | null
    content?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attachments?: attachmentsUpdateManyWithoutMessagesNestedInput
    conversations?: conversationsUpdateOneRequiredWithoutMessagesNestedInput
    users?: usersUpdateManyWithoutMessagesNestedInput
  }

  export type messagesUncheckedUpdateInput = {
    message_id?: StringFieldUpdateOperationsInput | string
    conversation_id?: StringFieldUpdateOperationsInput | string
    response_id?: NullableStringFieldUpdateOperationsInput | string | null
    sender_id?: StringFieldUpdateOperationsInput | string
    recipient_id?: StringFieldUpdateOperationsInput | string
    message_status?: NullableEnummessage_status_enumFieldUpdateOperationsInput | $Enums.message_status_enum | null
    content?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attachments?: attachmentsUncheckedUpdateManyWithoutMessagesNestedInput
    users?: usersUncheckedUpdateManyWithoutMessagesNestedInput
  }

  export type messagesCreateManyInput = {
    message_id?: string
    conversation_id: string
    response_id?: string | null
    sender_id: string
    recipient_id: string
    message_status?: $Enums.message_status_enum | null
    content: string
    created_at?: Date | string | null
  }

  export type messagesUpdateManyMutationInput = {
    message_id?: StringFieldUpdateOperationsInput | string
    response_id?: NullableStringFieldUpdateOperationsInput | string | null
    sender_id?: StringFieldUpdateOperationsInput | string
    recipient_id?: StringFieldUpdateOperationsInput | string
    message_status?: NullableEnummessage_status_enumFieldUpdateOperationsInput | $Enums.message_status_enum | null
    content?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type messagesUncheckedUpdateManyInput = {
    message_id?: StringFieldUpdateOperationsInput | string
    conversation_id?: StringFieldUpdateOperationsInput | string
    response_id?: NullableStringFieldUpdateOperationsInput | string | null
    sender_id?: StringFieldUpdateOperationsInput | string
    recipient_id?: StringFieldUpdateOperationsInput | string
    message_status?: NullableEnummessage_status_enumFieldUpdateOperationsInput | $Enums.message_status_enum | null
    content?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UsersListRelationFilter = {
    every?: usersWhereInput
    some?: usersWhereInput
    none?: usersWhereInput
  }

  export type usersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type nofiticationsCountOrderByAggregateInput = {
    notification_id?: SortOrder
    sender_name?: SortOrder
    receiver_name?: SortOrder
    content?: SortOrder
    date?: SortOrder
  }

  export type nofiticationsMaxOrderByAggregateInput = {
    notification_id?: SortOrder
    sender_name?: SortOrder
    receiver_name?: SortOrder
    content?: SortOrder
    date?: SortOrder
  }

  export type nofiticationsMinOrderByAggregateInput = {
    notification_id?: SortOrder
    sender_name?: SortOrder
    receiver_name?: SortOrder
    content?: SortOrder
    date?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type Enumgender_enumNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.gender_enum | Enumgender_enumFieldRefInput<$PrismaModel> | null
    in?: $Enums.gender_enum[] | ListEnumgender_enumFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.gender_enum[] | ListEnumgender_enumFieldRefInput<$PrismaModel> | null
    not?: NestedEnumgender_enumNullableFilter<$PrismaModel> | $Enums.gender_enum | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type Enumaccount_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.account_type | Enumaccount_typeFieldRefInput<$PrismaModel>
    in?: $Enums.account_type[] | ListEnumaccount_typeFieldRefInput<$PrismaModel>
    notIn?: $Enums.account_type[] | ListEnumaccount_typeFieldRefInput<$PrismaModel>
    not?: NestedEnumaccount_typeFilter<$PrismaModel> | $Enums.account_type
  }

  export type Post_categoriesListRelationFilter = {
    every?: post_categoriesWhereInput
    some?: post_categoriesWhereInput
    none?: post_categoriesWhereInput
  }

  export type PostsListRelationFilter = {
    every?: postsWhereInput
    some?: postsWhereInput
    none?: postsWhereInput
  }

  export type CommentsListRelationFilter = {
    every?: commentsWhereInput
    some?: commentsWhereInput
    none?: commentsWhereInput
  }

  export type MessagesListRelationFilter = {
    every?: messagesWhereInput
    some?: messagesWhereInput
    none?: messagesWhereInput
  }

  export type ConversationsListRelationFilter = {
    every?: conversationsWhereInput
    some?: conversationsWhereInput
    none?: conversationsWhereInput
  }

  export type SessionsListRelationFilter = {
    every?: sessionsWhereInput
    some?: sessionsWhereInput
    none?: sessionsWhereInput
  }

  export type NofiticationsListRelationFilter = {
    every?: nofiticationsWhereInput
    some?: nofiticationsWhereInput
    none?: nofiticationsWhereInput
  }

  export type Users_saved_postsListRelationFilter = {
    every?: users_saved_postsWhereInput
    some?: users_saved_postsWhereInput
    none?: users_saved_postsWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type post_categoriesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type postsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type commentsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type messagesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type conversationsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type sessionsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type nofiticationsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type users_saved_postsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usersCountOrderByAggregateInput = {
    user_id?: SortOrder
    bio?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    gender?: SortOrder
    created_at?: SortOrder
    stars?: SortOrder
    profile_photo_url?: SortOrder
    cover_photo_url?: SortOrder
    user_account_type?: SortOrder
  }

  export type usersAvgOrderByAggregateInput = {
    stars?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    user_id?: SortOrder
    bio?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    gender?: SortOrder
    created_at?: SortOrder
    stars?: SortOrder
    profile_photo_url?: SortOrder
    cover_photo_url?: SortOrder
    user_account_type?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    user_id?: SortOrder
    bio?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    gender?: SortOrder
    created_at?: SortOrder
    stars?: SortOrder
    profile_photo_url?: SortOrder
    cover_photo_url?: SortOrder
    user_account_type?: SortOrder
  }

  export type usersSumOrderByAggregateInput = {
    stars?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type Enumgender_enumNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.gender_enum | Enumgender_enumFieldRefInput<$PrismaModel> | null
    in?: $Enums.gender_enum[] | ListEnumgender_enumFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.gender_enum[] | ListEnumgender_enumFieldRefInput<$PrismaModel> | null
    not?: NestedEnumgender_enumNullableWithAggregatesFilter<$PrismaModel> | $Enums.gender_enum | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumgender_enumNullableFilter<$PrismaModel>
    _max?: NestedEnumgender_enumNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type Enumaccount_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.account_type | Enumaccount_typeFieldRefInput<$PrismaModel>
    in?: $Enums.account_type[] | ListEnumaccount_typeFieldRefInput<$PrismaModel>
    notIn?: $Enums.account_type[] | ListEnumaccount_typeFieldRefInput<$PrismaModel>
    not?: NestedEnumaccount_typeWithAggregatesFilter<$PrismaModel> | $Enums.account_type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumaccount_typeFilter<$PrismaModel>
    _max?: NestedEnumaccount_typeFilter<$PrismaModel>
  }

  export type UuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type UsersNullableScalarRelationFilter = {
    is?: usersWhereInput | null
    isNot?: usersWhereInput | null
  }

  export type sessionsCountOrderByAggregateInput = {
    session_id?: SortOrder
    session_token?: SortOrder
    ip_addr?: SortOrder
    user_agent?: SortOrder
    session_user_id?: SortOrder
  }

  export type sessionsMaxOrderByAggregateInput = {
    session_id?: SortOrder
    session_token?: SortOrder
    ip_addr?: SortOrder
    user_agent?: SortOrder
    session_user_id?: SortOrder
  }

  export type sessionsMinOrderByAggregateInput = {
    session_id?: SortOrder
    session_token?: SortOrder
    ip_addr?: SortOrder
    user_agent?: SortOrder
    session_user_id?: SortOrder
  }

  export type UuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type Post_categoriesNullableScalarRelationFilter = {
    is?: post_categoriesWhereInput | null
    isNot?: post_categoriesWhereInput | null
  }

  export type post_categoriesCountOrderByAggregateInput = {
    category_id?: SortOrder
    category_value?: SortOrder
    parent_category_id?: SortOrder
  }

  export type post_categoriesMaxOrderByAggregateInput = {
    category_id?: SortOrder
    category_value?: SortOrder
    parent_category_id?: SortOrder
  }

  export type post_categoriesMinOrderByAggregateInput = {
    category_id?: SortOrder
    category_value?: SortOrder
    parent_category_id?: SortOrder
  }

  export type BigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type UsersScalarRelationFilter = {
    is?: usersWhereInput
    isNot?: usersWhereInput
  }

  export type MediasListRelationFilter = {
    every?: mediasWhereInput
    some?: mediasWhereInput
    none?: mediasWhereInput
  }

  export type mediasOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type postsCountOrderByAggregateInput = {
    post_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    price?: SortOrder
    created_at?: SortOrder
    post_category_id?: SortOrder
    author_id?: SortOrder
  }

  export type postsAvgOrderByAggregateInput = {
    price?: SortOrder
  }

  export type postsMaxOrderByAggregateInput = {
    post_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    price?: SortOrder
    created_at?: SortOrder
    post_category_id?: SortOrder
    author_id?: SortOrder
  }

  export type postsMinOrderByAggregateInput = {
    post_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    price?: SortOrder
    created_at?: SortOrder
    post_category_id?: SortOrder
    author_id?: SortOrder
  }

  export type postsSumOrderByAggregateInput = {
    price?: SortOrder
  }

  export type BigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type PostsNullableScalarRelationFilter = {
    is?: postsWhereInput | null
    isNot?: postsWhereInput | null
  }

  export type users_saved_postsCountOrderByAggregateInput = {
    post_saving_id?: SortOrder
    saved_at?: SortOrder
    user_saving_id?: SortOrder
    saved_post_id?: SortOrder
  }

  export type users_saved_postsMaxOrderByAggregateInput = {
    post_saving_id?: SortOrder
    saved_at?: SortOrder
    user_saving_id?: SortOrder
    saved_post_id?: SortOrder
  }

  export type users_saved_postsMinOrderByAggregateInput = {
    post_saving_id?: SortOrder
    saved_at?: SortOrder
    user_saving_id?: SortOrder
    saved_post_id?: SortOrder
  }

  export type CommentsNullableScalarRelationFilter = {
    is?: commentsWhereInput | null
    isNot?: commentsWhereInput | null
  }

  export type commentsCountOrderByAggregateInput = {
    comment_id?: SortOrder
    body?: SortOrder
    created_at?: SortOrder
    commentator_id?: SortOrder
    commented_post_id?: SortOrder
    parent_comment_id?: SortOrder
  }

  export type commentsMaxOrderByAggregateInput = {
    comment_id?: SortOrder
    body?: SortOrder
    created_at?: SortOrder
    commentator_id?: SortOrder
    commented_post_id?: SortOrder
    parent_comment_id?: SortOrder
  }

  export type commentsMinOrderByAggregateInput = {
    comment_id?: SortOrder
    body?: SortOrder
    created_at?: SortOrder
    commentator_id?: SortOrder
    commented_post_id?: SortOrder
    parent_comment_id?: SortOrder
  }

  export type Enumfile_type_enumFilter<$PrismaModel = never> = {
    equals?: $Enums.file_type_enum | Enumfile_type_enumFieldRefInput<$PrismaModel>
    in?: $Enums.file_type_enum[] | ListEnumfile_type_enumFieldRefInput<$PrismaModel>
    notIn?: $Enums.file_type_enum[] | ListEnumfile_type_enumFieldRefInput<$PrismaModel>
    not?: NestedEnumfile_type_enumFilter<$PrismaModel> | $Enums.file_type_enum
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type mediasCountOrderByAggregateInput = {
    media_id?: SortOrder
    fileType?: SortOrder
    encoding?: SortOrder
    mimetype?: SortOrder
    filename?: SortOrder
    fileUrl?: SortOrder
    path?: SortOrder
    size?: SortOrder
    media_post_id?: SortOrder
  }

  export type mediasAvgOrderByAggregateInput = {
    size?: SortOrder
  }

  export type mediasMaxOrderByAggregateInput = {
    media_id?: SortOrder
    fileType?: SortOrder
    encoding?: SortOrder
    mimetype?: SortOrder
    filename?: SortOrder
    fileUrl?: SortOrder
    path?: SortOrder
    size?: SortOrder
    media_post_id?: SortOrder
  }

  export type mediasMinOrderByAggregateInput = {
    media_id?: SortOrder
    fileType?: SortOrder
    encoding?: SortOrder
    mimetype?: SortOrder
    filename?: SortOrder
    fileUrl?: SortOrder
    path?: SortOrder
    size?: SortOrder
    media_post_id?: SortOrder
  }

  export type mediasSumOrderByAggregateInput = {
    size?: SortOrder
  }

  export type Enumfile_type_enumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.file_type_enum | Enumfile_type_enumFieldRefInput<$PrismaModel>
    in?: $Enums.file_type_enum[] | ListEnumfile_type_enumFieldRefInput<$PrismaModel>
    notIn?: $Enums.file_type_enum[] | ListEnumfile_type_enumFieldRefInput<$PrismaModel>
    not?: NestedEnumfile_type_enumWithAggregatesFilter<$PrismaModel> | $Enums.file_type_enum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumfile_type_enumFilter<$PrismaModel>
    _max?: NestedEnumfile_type_enumFilter<$PrismaModel>
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type Enumfile_type_enumNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.file_type_enum | Enumfile_type_enumFieldRefInput<$PrismaModel> | null
    in?: $Enums.file_type_enum[] | ListEnumfile_type_enumFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.file_type_enum[] | ListEnumfile_type_enumFieldRefInput<$PrismaModel> | null
    not?: NestedEnumfile_type_enumNullableFilter<$PrismaModel> | $Enums.file_type_enum | null
  }

  export type MessagesScalarRelationFilter = {
    is?: messagesWhereInput
    isNot?: messagesWhereInput
  }

  export type attachmentsCountOrderByAggregateInput = {
    attachment_id?: SortOrder
    message_id?: SortOrder
    file_url?: SortOrder
    file_type?: SortOrder
    created_at?: SortOrder
  }

  export type attachmentsMaxOrderByAggregateInput = {
    attachment_id?: SortOrder
    message_id?: SortOrder
    file_url?: SortOrder
    file_type?: SortOrder
    created_at?: SortOrder
  }

  export type attachmentsMinOrderByAggregateInput = {
    attachment_id?: SortOrder
    message_id?: SortOrder
    file_url?: SortOrder
    file_type?: SortOrder
    created_at?: SortOrder
  }

  export type Enumfile_type_enumNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.file_type_enum | Enumfile_type_enumFieldRefInput<$PrismaModel> | null
    in?: $Enums.file_type_enum[] | ListEnumfile_type_enumFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.file_type_enum[] | ListEnumfile_type_enumFieldRefInput<$PrismaModel> | null
    not?: NestedEnumfile_type_enumNullableWithAggregatesFilter<$PrismaModel> | $Enums.file_type_enum | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumfile_type_enumNullableFilter<$PrismaModel>
    _max?: NestedEnumfile_type_enumNullableFilter<$PrismaModel>
  }

  export type Enumconversation_type_enumNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.conversation_type_enum | Enumconversation_type_enumFieldRefInput<$PrismaModel> | null
    in?: $Enums.conversation_type_enum[] | ListEnumconversation_type_enumFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.conversation_type_enum[] | ListEnumconversation_type_enumFieldRefInput<$PrismaModel> | null
    not?: NestedEnumconversation_type_enumNullableFilter<$PrismaModel> | $Enums.conversation_type_enum | null
  }

  export type conversationsCountOrderByAggregateInput = {
    conversation_id?: SortOrder
    conversation_type?: SortOrder
    conversation_name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    product_id?: SortOrder
  }

  export type conversationsMaxOrderByAggregateInput = {
    conversation_id?: SortOrder
    conversation_type?: SortOrder
    conversation_name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    product_id?: SortOrder
  }

  export type conversationsMinOrderByAggregateInput = {
    conversation_id?: SortOrder
    conversation_type?: SortOrder
    conversation_name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    product_id?: SortOrder
  }

  export type Enumconversation_type_enumNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.conversation_type_enum | Enumconversation_type_enumFieldRefInput<$PrismaModel> | null
    in?: $Enums.conversation_type_enum[] | ListEnumconversation_type_enumFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.conversation_type_enum[] | ListEnumconversation_type_enumFieldRefInput<$PrismaModel> | null
    not?: NestedEnumconversation_type_enumNullableWithAggregatesFilter<$PrismaModel> | $Enums.conversation_type_enum | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumconversation_type_enumNullableFilter<$PrismaModel>
    _max?: NestedEnumconversation_type_enumNullableFilter<$PrismaModel>
  }

  export type Enummessage_status_enumNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.message_status_enum | Enummessage_status_enumFieldRefInput<$PrismaModel> | null
    in?: $Enums.message_status_enum[] | ListEnummessage_status_enumFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.message_status_enum[] | ListEnummessage_status_enumFieldRefInput<$PrismaModel> | null
    not?: NestedEnummessage_status_enumNullableFilter<$PrismaModel> | $Enums.message_status_enum | null
  }

  export type AttachmentsListRelationFilter = {
    every?: attachmentsWhereInput
    some?: attachmentsWhereInput
    none?: attachmentsWhereInput
  }

  export type ConversationsScalarRelationFilter = {
    is?: conversationsWhereInput
    isNot?: conversationsWhereInput
  }

  export type attachmentsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type messagesCountOrderByAggregateInput = {
    message_id?: SortOrder
    conversation_id?: SortOrder
    response_id?: SortOrder
    sender_id?: SortOrder
    recipient_id?: SortOrder
    message_status?: SortOrder
    content?: SortOrder
    created_at?: SortOrder
  }

  export type messagesMaxOrderByAggregateInput = {
    message_id?: SortOrder
    conversation_id?: SortOrder
    response_id?: SortOrder
    sender_id?: SortOrder
    recipient_id?: SortOrder
    message_status?: SortOrder
    content?: SortOrder
    created_at?: SortOrder
  }

  export type messagesMinOrderByAggregateInput = {
    message_id?: SortOrder
    conversation_id?: SortOrder
    response_id?: SortOrder
    sender_id?: SortOrder
    recipient_id?: SortOrder
    message_status?: SortOrder
    content?: SortOrder
    created_at?: SortOrder
  }

  export type Enummessage_status_enumNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.message_status_enum | Enummessage_status_enumFieldRefInput<$PrismaModel> | null
    in?: $Enums.message_status_enum[] | ListEnummessage_status_enumFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.message_status_enum[] | ListEnummessage_status_enumFieldRefInput<$PrismaModel> | null
    not?: NestedEnummessage_status_enumNullableWithAggregatesFilter<$PrismaModel> | $Enums.message_status_enum | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnummessage_status_enumNullableFilter<$PrismaModel>
    _max?: NestedEnummessage_status_enumNullableFilter<$PrismaModel>
  }

  export type usersCreateNestedManyWithoutNofiticationsInput = {
    create?: XOR<usersCreateWithoutNofiticationsInput, usersUncheckedCreateWithoutNofiticationsInput> | usersCreateWithoutNofiticationsInput[] | usersUncheckedCreateWithoutNofiticationsInput[]
    connectOrCreate?: usersCreateOrConnectWithoutNofiticationsInput | usersCreateOrConnectWithoutNofiticationsInput[]
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
  }

  export type usersUncheckedCreateNestedManyWithoutNofiticationsInput = {
    create?: XOR<usersCreateWithoutNofiticationsInput, usersUncheckedCreateWithoutNofiticationsInput> | usersCreateWithoutNofiticationsInput[] | usersUncheckedCreateWithoutNofiticationsInput[]
    connectOrCreate?: usersCreateOrConnectWithoutNofiticationsInput | usersCreateOrConnectWithoutNofiticationsInput[]
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type usersUpdateManyWithoutNofiticationsNestedInput = {
    create?: XOR<usersCreateWithoutNofiticationsInput, usersUncheckedCreateWithoutNofiticationsInput> | usersCreateWithoutNofiticationsInput[] | usersUncheckedCreateWithoutNofiticationsInput[]
    connectOrCreate?: usersCreateOrConnectWithoutNofiticationsInput | usersCreateOrConnectWithoutNofiticationsInput[]
    upsert?: usersUpsertWithWhereUniqueWithoutNofiticationsInput | usersUpsertWithWhereUniqueWithoutNofiticationsInput[]
    set?: usersWhereUniqueInput | usersWhereUniqueInput[]
    disconnect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    delete?: usersWhereUniqueInput | usersWhereUniqueInput[]
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    update?: usersUpdateWithWhereUniqueWithoutNofiticationsInput | usersUpdateWithWhereUniqueWithoutNofiticationsInput[]
    updateMany?: usersUpdateManyWithWhereWithoutNofiticationsInput | usersUpdateManyWithWhereWithoutNofiticationsInput[]
    deleteMany?: usersScalarWhereInput | usersScalarWhereInput[]
  }

  export type usersUncheckedUpdateManyWithoutNofiticationsNestedInput = {
    create?: XOR<usersCreateWithoutNofiticationsInput, usersUncheckedCreateWithoutNofiticationsInput> | usersCreateWithoutNofiticationsInput[] | usersUncheckedCreateWithoutNofiticationsInput[]
    connectOrCreate?: usersCreateOrConnectWithoutNofiticationsInput | usersCreateOrConnectWithoutNofiticationsInput[]
    upsert?: usersUpsertWithWhereUniqueWithoutNofiticationsInput | usersUpsertWithWhereUniqueWithoutNofiticationsInput[]
    set?: usersWhereUniqueInput | usersWhereUniqueInput[]
    disconnect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    delete?: usersWhereUniqueInput | usersWhereUniqueInput[]
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    update?: usersUpdateWithWhereUniqueWithoutNofiticationsInput | usersUpdateWithWhereUniqueWithoutNofiticationsInput[]
    updateMany?: usersUpdateManyWithWhereWithoutNofiticationsInput | usersUpdateManyWithWhereWithoutNofiticationsInput[]
    deleteMany?: usersScalarWhereInput | usersScalarWhereInput[]
  }

  export type post_categoriesCreateNestedManyWithoutInterested_usersInput = {
    create?: XOR<post_categoriesCreateWithoutInterested_usersInput, post_categoriesUncheckedCreateWithoutInterested_usersInput> | post_categoriesCreateWithoutInterested_usersInput[] | post_categoriesUncheckedCreateWithoutInterested_usersInput[]
    connectOrCreate?: post_categoriesCreateOrConnectWithoutInterested_usersInput | post_categoriesCreateOrConnectWithoutInterested_usersInput[]
    connect?: post_categoriesWhereUniqueInput | post_categoriesWhereUniqueInput[]
  }

  export type usersCreateNestedManyWithoutFollowingsInput = {
    create?: XOR<usersCreateWithoutFollowingsInput, usersUncheckedCreateWithoutFollowingsInput> | usersCreateWithoutFollowingsInput[] | usersUncheckedCreateWithoutFollowingsInput[]
    connectOrCreate?: usersCreateOrConnectWithoutFollowingsInput | usersCreateOrConnectWithoutFollowingsInput[]
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
  }

  export type usersCreateNestedManyWithoutFollowersInput = {
    create?: XOR<usersCreateWithoutFollowersInput, usersUncheckedCreateWithoutFollowersInput> | usersCreateWithoutFollowersInput[] | usersUncheckedCreateWithoutFollowersInput[]
    connectOrCreate?: usersCreateOrConnectWithoutFollowersInput | usersCreateOrConnectWithoutFollowersInput[]
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
  }

  export type postsCreateNestedManyWithoutAuthorInput = {
    create?: XOR<postsCreateWithoutAuthorInput, postsUncheckedCreateWithoutAuthorInput> | postsCreateWithoutAuthorInput[] | postsUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: postsCreateOrConnectWithoutAuthorInput | postsCreateOrConnectWithoutAuthorInput[]
    createMany?: postsCreateManyAuthorInputEnvelope
    connect?: postsWhereUniqueInput | postsWhereUniqueInput[]
  }

  export type postsCreateNestedManyWithoutPost_likersInput = {
    create?: XOR<postsCreateWithoutPost_likersInput, postsUncheckedCreateWithoutPost_likersInput> | postsCreateWithoutPost_likersInput[] | postsUncheckedCreateWithoutPost_likersInput[]
    connectOrCreate?: postsCreateOrConnectWithoutPost_likersInput | postsCreateOrConnectWithoutPost_likersInput[]
    connect?: postsWhereUniqueInput | postsWhereUniqueInput[]
  }

  export type commentsCreateNestedManyWithoutComment_likersInput = {
    create?: XOR<commentsCreateWithoutComment_likersInput, commentsUncheckedCreateWithoutComment_likersInput> | commentsCreateWithoutComment_likersInput[] | commentsUncheckedCreateWithoutComment_likersInput[]
    connectOrCreate?: commentsCreateOrConnectWithoutComment_likersInput | commentsCreateOrConnectWithoutComment_likersInput[]
    connect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
  }

  export type messagesCreateNestedManyWithoutUsersInput = {
    create?: XOR<messagesCreateWithoutUsersInput, messagesUncheckedCreateWithoutUsersInput> | messagesCreateWithoutUsersInput[] | messagesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: messagesCreateOrConnectWithoutUsersInput | messagesCreateOrConnectWithoutUsersInput[]
    connect?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
  }

  export type conversationsCreateNestedManyWithoutUsersInput = {
    create?: XOR<conversationsCreateWithoutUsersInput, conversationsUncheckedCreateWithoutUsersInput> | conversationsCreateWithoutUsersInput[] | conversationsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: conversationsCreateOrConnectWithoutUsersInput | conversationsCreateOrConnectWithoutUsersInput[]
    connect?: conversationsWhereUniqueInput | conversationsWhereUniqueInput[]
  }

  export type sessionsCreateNestedManyWithoutSession_userInput = {
    create?: XOR<sessionsCreateWithoutSession_userInput, sessionsUncheckedCreateWithoutSession_userInput> | sessionsCreateWithoutSession_userInput[] | sessionsUncheckedCreateWithoutSession_userInput[]
    connectOrCreate?: sessionsCreateOrConnectWithoutSession_userInput | sessionsCreateOrConnectWithoutSession_userInput[]
    createMany?: sessionsCreateManySession_userInputEnvelope
    connect?: sessionsWhereUniqueInput | sessionsWhereUniqueInput[]
  }

  export type nofiticationsCreateNestedManyWithoutUsersInput = {
    create?: XOR<nofiticationsCreateWithoutUsersInput, nofiticationsUncheckedCreateWithoutUsersInput> | nofiticationsCreateWithoutUsersInput[] | nofiticationsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: nofiticationsCreateOrConnectWithoutUsersInput | nofiticationsCreateOrConnectWithoutUsersInput[]
    connect?: nofiticationsWhereUniqueInput | nofiticationsWhereUniqueInput[]
  }

  export type users_saved_postsCreateNestedManyWithoutUser_savingInput = {
    create?: XOR<users_saved_postsCreateWithoutUser_savingInput, users_saved_postsUncheckedCreateWithoutUser_savingInput> | users_saved_postsCreateWithoutUser_savingInput[] | users_saved_postsUncheckedCreateWithoutUser_savingInput[]
    connectOrCreate?: users_saved_postsCreateOrConnectWithoutUser_savingInput | users_saved_postsCreateOrConnectWithoutUser_savingInput[]
    createMany?: users_saved_postsCreateManyUser_savingInputEnvelope
    connect?: users_saved_postsWhereUniqueInput | users_saved_postsWhereUniqueInput[]
  }

  export type commentsCreateNestedManyWithoutCommentatorInput = {
    create?: XOR<commentsCreateWithoutCommentatorInput, commentsUncheckedCreateWithoutCommentatorInput> | commentsCreateWithoutCommentatorInput[] | commentsUncheckedCreateWithoutCommentatorInput[]
    connectOrCreate?: commentsCreateOrConnectWithoutCommentatorInput | commentsCreateOrConnectWithoutCommentatorInput[]
    createMany?: commentsCreateManyCommentatorInputEnvelope
    connect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
  }

  export type post_categoriesUncheckedCreateNestedManyWithoutInterested_usersInput = {
    create?: XOR<post_categoriesCreateWithoutInterested_usersInput, post_categoriesUncheckedCreateWithoutInterested_usersInput> | post_categoriesCreateWithoutInterested_usersInput[] | post_categoriesUncheckedCreateWithoutInterested_usersInput[]
    connectOrCreate?: post_categoriesCreateOrConnectWithoutInterested_usersInput | post_categoriesCreateOrConnectWithoutInterested_usersInput[]
    connect?: post_categoriesWhereUniqueInput | post_categoriesWhereUniqueInput[]
  }

  export type usersUncheckedCreateNestedManyWithoutFollowingsInput = {
    create?: XOR<usersCreateWithoutFollowingsInput, usersUncheckedCreateWithoutFollowingsInput> | usersCreateWithoutFollowingsInput[] | usersUncheckedCreateWithoutFollowingsInput[]
    connectOrCreate?: usersCreateOrConnectWithoutFollowingsInput | usersCreateOrConnectWithoutFollowingsInput[]
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
  }

  export type usersUncheckedCreateNestedManyWithoutFollowersInput = {
    create?: XOR<usersCreateWithoutFollowersInput, usersUncheckedCreateWithoutFollowersInput> | usersCreateWithoutFollowersInput[] | usersUncheckedCreateWithoutFollowersInput[]
    connectOrCreate?: usersCreateOrConnectWithoutFollowersInput | usersCreateOrConnectWithoutFollowersInput[]
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
  }

  export type postsUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<postsCreateWithoutAuthorInput, postsUncheckedCreateWithoutAuthorInput> | postsCreateWithoutAuthorInput[] | postsUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: postsCreateOrConnectWithoutAuthorInput | postsCreateOrConnectWithoutAuthorInput[]
    createMany?: postsCreateManyAuthorInputEnvelope
    connect?: postsWhereUniqueInput | postsWhereUniqueInput[]
  }

  export type postsUncheckedCreateNestedManyWithoutPost_likersInput = {
    create?: XOR<postsCreateWithoutPost_likersInput, postsUncheckedCreateWithoutPost_likersInput> | postsCreateWithoutPost_likersInput[] | postsUncheckedCreateWithoutPost_likersInput[]
    connectOrCreate?: postsCreateOrConnectWithoutPost_likersInput | postsCreateOrConnectWithoutPost_likersInput[]
    connect?: postsWhereUniqueInput | postsWhereUniqueInput[]
  }

  export type commentsUncheckedCreateNestedManyWithoutComment_likersInput = {
    create?: XOR<commentsCreateWithoutComment_likersInput, commentsUncheckedCreateWithoutComment_likersInput> | commentsCreateWithoutComment_likersInput[] | commentsUncheckedCreateWithoutComment_likersInput[]
    connectOrCreate?: commentsCreateOrConnectWithoutComment_likersInput | commentsCreateOrConnectWithoutComment_likersInput[]
    connect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
  }

  export type messagesUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<messagesCreateWithoutUsersInput, messagesUncheckedCreateWithoutUsersInput> | messagesCreateWithoutUsersInput[] | messagesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: messagesCreateOrConnectWithoutUsersInput | messagesCreateOrConnectWithoutUsersInput[]
    connect?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
  }

  export type conversationsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<conversationsCreateWithoutUsersInput, conversationsUncheckedCreateWithoutUsersInput> | conversationsCreateWithoutUsersInput[] | conversationsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: conversationsCreateOrConnectWithoutUsersInput | conversationsCreateOrConnectWithoutUsersInput[]
    connect?: conversationsWhereUniqueInput | conversationsWhereUniqueInput[]
  }

  export type sessionsUncheckedCreateNestedManyWithoutSession_userInput = {
    create?: XOR<sessionsCreateWithoutSession_userInput, sessionsUncheckedCreateWithoutSession_userInput> | sessionsCreateWithoutSession_userInput[] | sessionsUncheckedCreateWithoutSession_userInput[]
    connectOrCreate?: sessionsCreateOrConnectWithoutSession_userInput | sessionsCreateOrConnectWithoutSession_userInput[]
    createMany?: sessionsCreateManySession_userInputEnvelope
    connect?: sessionsWhereUniqueInput | sessionsWhereUniqueInput[]
  }

  export type nofiticationsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<nofiticationsCreateWithoutUsersInput, nofiticationsUncheckedCreateWithoutUsersInput> | nofiticationsCreateWithoutUsersInput[] | nofiticationsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: nofiticationsCreateOrConnectWithoutUsersInput | nofiticationsCreateOrConnectWithoutUsersInput[]
    connect?: nofiticationsWhereUniqueInput | nofiticationsWhereUniqueInput[]
  }

  export type users_saved_postsUncheckedCreateNestedManyWithoutUser_savingInput = {
    create?: XOR<users_saved_postsCreateWithoutUser_savingInput, users_saved_postsUncheckedCreateWithoutUser_savingInput> | users_saved_postsCreateWithoutUser_savingInput[] | users_saved_postsUncheckedCreateWithoutUser_savingInput[]
    connectOrCreate?: users_saved_postsCreateOrConnectWithoutUser_savingInput | users_saved_postsCreateOrConnectWithoutUser_savingInput[]
    createMany?: users_saved_postsCreateManyUser_savingInputEnvelope
    connect?: users_saved_postsWhereUniqueInput | users_saved_postsWhereUniqueInput[]
  }

  export type commentsUncheckedCreateNestedManyWithoutCommentatorInput = {
    create?: XOR<commentsCreateWithoutCommentatorInput, commentsUncheckedCreateWithoutCommentatorInput> | commentsCreateWithoutCommentatorInput[] | commentsUncheckedCreateWithoutCommentatorInput[]
    connectOrCreate?: commentsCreateOrConnectWithoutCommentatorInput | commentsCreateOrConnectWithoutCommentatorInput[]
    createMany?: commentsCreateManyCommentatorInputEnvelope
    connect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableEnumgender_enumFieldUpdateOperationsInput = {
    set?: $Enums.gender_enum | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type Enumaccount_typeFieldUpdateOperationsInput = {
    set?: $Enums.account_type
  }

  export type post_categoriesUpdateManyWithoutInterested_usersNestedInput = {
    create?: XOR<post_categoriesCreateWithoutInterested_usersInput, post_categoriesUncheckedCreateWithoutInterested_usersInput> | post_categoriesCreateWithoutInterested_usersInput[] | post_categoriesUncheckedCreateWithoutInterested_usersInput[]
    connectOrCreate?: post_categoriesCreateOrConnectWithoutInterested_usersInput | post_categoriesCreateOrConnectWithoutInterested_usersInput[]
    upsert?: post_categoriesUpsertWithWhereUniqueWithoutInterested_usersInput | post_categoriesUpsertWithWhereUniqueWithoutInterested_usersInput[]
    set?: post_categoriesWhereUniqueInput | post_categoriesWhereUniqueInput[]
    disconnect?: post_categoriesWhereUniqueInput | post_categoriesWhereUniqueInput[]
    delete?: post_categoriesWhereUniqueInput | post_categoriesWhereUniqueInput[]
    connect?: post_categoriesWhereUniqueInput | post_categoriesWhereUniqueInput[]
    update?: post_categoriesUpdateWithWhereUniqueWithoutInterested_usersInput | post_categoriesUpdateWithWhereUniqueWithoutInterested_usersInput[]
    updateMany?: post_categoriesUpdateManyWithWhereWithoutInterested_usersInput | post_categoriesUpdateManyWithWhereWithoutInterested_usersInput[]
    deleteMany?: post_categoriesScalarWhereInput | post_categoriesScalarWhereInput[]
  }

  export type usersUpdateManyWithoutFollowingsNestedInput = {
    create?: XOR<usersCreateWithoutFollowingsInput, usersUncheckedCreateWithoutFollowingsInput> | usersCreateWithoutFollowingsInput[] | usersUncheckedCreateWithoutFollowingsInput[]
    connectOrCreate?: usersCreateOrConnectWithoutFollowingsInput | usersCreateOrConnectWithoutFollowingsInput[]
    upsert?: usersUpsertWithWhereUniqueWithoutFollowingsInput | usersUpsertWithWhereUniqueWithoutFollowingsInput[]
    set?: usersWhereUniqueInput | usersWhereUniqueInput[]
    disconnect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    delete?: usersWhereUniqueInput | usersWhereUniqueInput[]
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    update?: usersUpdateWithWhereUniqueWithoutFollowingsInput | usersUpdateWithWhereUniqueWithoutFollowingsInput[]
    updateMany?: usersUpdateManyWithWhereWithoutFollowingsInput | usersUpdateManyWithWhereWithoutFollowingsInput[]
    deleteMany?: usersScalarWhereInput | usersScalarWhereInput[]
  }

  export type usersUpdateManyWithoutFollowersNestedInput = {
    create?: XOR<usersCreateWithoutFollowersInput, usersUncheckedCreateWithoutFollowersInput> | usersCreateWithoutFollowersInput[] | usersUncheckedCreateWithoutFollowersInput[]
    connectOrCreate?: usersCreateOrConnectWithoutFollowersInput | usersCreateOrConnectWithoutFollowersInput[]
    upsert?: usersUpsertWithWhereUniqueWithoutFollowersInput | usersUpsertWithWhereUniqueWithoutFollowersInput[]
    set?: usersWhereUniqueInput | usersWhereUniqueInput[]
    disconnect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    delete?: usersWhereUniqueInput | usersWhereUniqueInput[]
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    update?: usersUpdateWithWhereUniqueWithoutFollowersInput | usersUpdateWithWhereUniqueWithoutFollowersInput[]
    updateMany?: usersUpdateManyWithWhereWithoutFollowersInput | usersUpdateManyWithWhereWithoutFollowersInput[]
    deleteMany?: usersScalarWhereInput | usersScalarWhereInput[]
  }

  export type postsUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<postsCreateWithoutAuthorInput, postsUncheckedCreateWithoutAuthorInput> | postsCreateWithoutAuthorInput[] | postsUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: postsCreateOrConnectWithoutAuthorInput | postsCreateOrConnectWithoutAuthorInput[]
    upsert?: postsUpsertWithWhereUniqueWithoutAuthorInput | postsUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: postsCreateManyAuthorInputEnvelope
    set?: postsWhereUniqueInput | postsWhereUniqueInput[]
    disconnect?: postsWhereUniqueInput | postsWhereUniqueInput[]
    delete?: postsWhereUniqueInput | postsWhereUniqueInput[]
    connect?: postsWhereUniqueInput | postsWhereUniqueInput[]
    update?: postsUpdateWithWhereUniqueWithoutAuthorInput | postsUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: postsUpdateManyWithWhereWithoutAuthorInput | postsUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: postsScalarWhereInput | postsScalarWhereInput[]
  }

  export type postsUpdateManyWithoutPost_likersNestedInput = {
    create?: XOR<postsCreateWithoutPost_likersInput, postsUncheckedCreateWithoutPost_likersInput> | postsCreateWithoutPost_likersInput[] | postsUncheckedCreateWithoutPost_likersInput[]
    connectOrCreate?: postsCreateOrConnectWithoutPost_likersInput | postsCreateOrConnectWithoutPost_likersInput[]
    upsert?: postsUpsertWithWhereUniqueWithoutPost_likersInput | postsUpsertWithWhereUniqueWithoutPost_likersInput[]
    set?: postsWhereUniqueInput | postsWhereUniqueInput[]
    disconnect?: postsWhereUniqueInput | postsWhereUniqueInput[]
    delete?: postsWhereUniqueInput | postsWhereUniqueInput[]
    connect?: postsWhereUniqueInput | postsWhereUniqueInput[]
    update?: postsUpdateWithWhereUniqueWithoutPost_likersInput | postsUpdateWithWhereUniqueWithoutPost_likersInput[]
    updateMany?: postsUpdateManyWithWhereWithoutPost_likersInput | postsUpdateManyWithWhereWithoutPost_likersInput[]
    deleteMany?: postsScalarWhereInput | postsScalarWhereInput[]
  }

  export type commentsUpdateManyWithoutComment_likersNestedInput = {
    create?: XOR<commentsCreateWithoutComment_likersInput, commentsUncheckedCreateWithoutComment_likersInput> | commentsCreateWithoutComment_likersInput[] | commentsUncheckedCreateWithoutComment_likersInput[]
    connectOrCreate?: commentsCreateOrConnectWithoutComment_likersInput | commentsCreateOrConnectWithoutComment_likersInput[]
    upsert?: commentsUpsertWithWhereUniqueWithoutComment_likersInput | commentsUpsertWithWhereUniqueWithoutComment_likersInput[]
    set?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    disconnect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    delete?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    connect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    update?: commentsUpdateWithWhereUniqueWithoutComment_likersInput | commentsUpdateWithWhereUniqueWithoutComment_likersInput[]
    updateMany?: commentsUpdateManyWithWhereWithoutComment_likersInput | commentsUpdateManyWithWhereWithoutComment_likersInput[]
    deleteMany?: commentsScalarWhereInput | commentsScalarWhereInput[]
  }

  export type messagesUpdateManyWithoutUsersNestedInput = {
    create?: XOR<messagesCreateWithoutUsersInput, messagesUncheckedCreateWithoutUsersInput> | messagesCreateWithoutUsersInput[] | messagesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: messagesCreateOrConnectWithoutUsersInput | messagesCreateOrConnectWithoutUsersInput[]
    upsert?: messagesUpsertWithWhereUniqueWithoutUsersInput | messagesUpsertWithWhereUniqueWithoutUsersInput[]
    set?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    disconnect?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    delete?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    connect?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    update?: messagesUpdateWithWhereUniqueWithoutUsersInput | messagesUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: messagesUpdateManyWithWhereWithoutUsersInput | messagesUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: messagesScalarWhereInput | messagesScalarWhereInput[]
  }

  export type conversationsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<conversationsCreateWithoutUsersInput, conversationsUncheckedCreateWithoutUsersInput> | conversationsCreateWithoutUsersInput[] | conversationsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: conversationsCreateOrConnectWithoutUsersInput | conversationsCreateOrConnectWithoutUsersInput[]
    upsert?: conversationsUpsertWithWhereUniqueWithoutUsersInput | conversationsUpsertWithWhereUniqueWithoutUsersInput[]
    set?: conversationsWhereUniqueInput | conversationsWhereUniqueInput[]
    disconnect?: conversationsWhereUniqueInput | conversationsWhereUniqueInput[]
    delete?: conversationsWhereUniqueInput | conversationsWhereUniqueInput[]
    connect?: conversationsWhereUniqueInput | conversationsWhereUniqueInput[]
    update?: conversationsUpdateWithWhereUniqueWithoutUsersInput | conversationsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: conversationsUpdateManyWithWhereWithoutUsersInput | conversationsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: conversationsScalarWhereInput | conversationsScalarWhereInput[]
  }

  export type sessionsUpdateManyWithoutSession_userNestedInput = {
    create?: XOR<sessionsCreateWithoutSession_userInput, sessionsUncheckedCreateWithoutSession_userInput> | sessionsCreateWithoutSession_userInput[] | sessionsUncheckedCreateWithoutSession_userInput[]
    connectOrCreate?: sessionsCreateOrConnectWithoutSession_userInput | sessionsCreateOrConnectWithoutSession_userInput[]
    upsert?: sessionsUpsertWithWhereUniqueWithoutSession_userInput | sessionsUpsertWithWhereUniqueWithoutSession_userInput[]
    createMany?: sessionsCreateManySession_userInputEnvelope
    set?: sessionsWhereUniqueInput | sessionsWhereUniqueInput[]
    disconnect?: sessionsWhereUniqueInput | sessionsWhereUniqueInput[]
    delete?: sessionsWhereUniqueInput | sessionsWhereUniqueInput[]
    connect?: sessionsWhereUniqueInput | sessionsWhereUniqueInput[]
    update?: sessionsUpdateWithWhereUniqueWithoutSession_userInput | sessionsUpdateWithWhereUniqueWithoutSession_userInput[]
    updateMany?: sessionsUpdateManyWithWhereWithoutSession_userInput | sessionsUpdateManyWithWhereWithoutSession_userInput[]
    deleteMany?: sessionsScalarWhereInput | sessionsScalarWhereInput[]
  }

  export type nofiticationsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<nofiticationsCreateWithoutUsersInput, nofiticationsUncheckedCreateWithoutUsersInput> | nofiticationsCreateWithoutUsersInput[] | nofiticationsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: nofiticationsCreateOrConnectWithoutUsersInput | nofiticationsCreateOrConnectWithoutUsersInput[]
    upsert?: nofiticationsUpsertWithWhereUniqueWithoutUsersInput | nofiticationsUpsertWithWhereUniqueWithoutUsersInput[]
    set?: nofiticationsWhereUniqueInput | nofiticationsWhereUniqueInput[]
    disconnect?: nofiticationsWhereUniqueInput | nofiticationsWhereUniqueInput[]
    delete?: nofiticationsWhereUniqueInput | nofiticationsWhereUniqueInput[]
    connect?: nofiticationsWhereUniqueInput | nofiticationsWhereUniqueInput[]
    update?: nofiticationsUpdateWithWhereUniqueWithoutUsersInput | nofiticationsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: nofiticationsUpdateManyWithWhereWithoutUsersInput | nofiticationsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: nofiticationsScalarWhereInput | nofiticationsScalarWhereInput[]
  }

  export type users_saved_postsUpdateManyWithoutUser_savingNestedInput = {
    create?: XOR<users_saved_postsCreateWithoutUser_savingInput, users_saved_postsUncheckedCreateWithoutUser_savingInput> | users_saved_postsCreateWithoutUser_savingInput[] | users_saved_postsUncheckedCreateWithoutUser_savingInput[]
    connectOrCreate?: users_saved_postsCreateOrConnectWithoutUser_savingInput | users_saved_postsCreateOrConnectWithoutUser_savingInput[]
    upsert?: users_saved_postsUpsertWithWhereUniqueWithoutUser_savingInput | users_saved_postsUpsertWithWhereUniqueWithoutUser_savingInput[]
    createMany?: users_saved_postsCreateManyUser_savingInputEnvelope
    set?: users_saved_postsWhereUniqueInput | users_saved_postsWhereUniqueInput[]
    disconnect?: users_saved_postsWhereUniqueInput | users_saved_postsWhereUniqueInput[]
    delete?: users_saved_postsWhereUniqueInput | users_saved_postsWhereUniqueInput[]
    connect?: users_saved_postsWhereUniqueInput | users_saved_postsWhereUniqueInput[]
    update?: users_saved_postsUpdateWithWhereUniqueWithoutUser_savingInput | users_saved_postsUpdateWithWhereUniqueWithoutUser_savingInput[]
    updateMany?: users_saved_postsUpdateManyWithWhereWithoutUser_savingInput | users_saved_postsUpdateManyWithWhereWithoutUser_savingInput[]
    deleteMany?: users_saved_postsScalarWhereInput | users_saved_postsScalarWhereInput[]
  }

  export type commentsUpdateManyWithoutCommentatorNestedInput = {
    create?: XOR<commentsCreateWithoutCommentatorInput, commentsUncheckedCreateWithoutCommentatorInput> | commentsCreateWithoutCommentatorInput[] | commentsUncheckedCreateWithoutCommentatorInput[]
    connectOrCreate?: commentsCreateOrConnectWithoutCommentatorInput | commentsCreateOrConnectWithoutCommentatorInput[]
    upsert?: commentsUpsertWithWhereUniqueWithoutCommentatorInput | commentsUpsertWithWhereUniqueWithoutCommentatorInput[]
    createMany?: commentsCreateManyCommentatorInputEnvelope
    set?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    disconnect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    delete?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    connect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    update?: commentsUpdateWithWhereUniqueWithoutCommentatorInput | commentsUpdateWithWhereUniqueWithoutCommentatorInput[]
    updateMany?: commentsUpdateManyWithWhereWithoutCommentatorInput | commentsUpdateManyWithWhereWithoutCommentatorInput[]
    deleteMany?: commentsScalarWhereInput | commentsScalarWhereInput[]
  }

  export type post_categoriesUncheckedUpdateManyWithoutInterested_usersNestedInput = {
    create?: XOR<post_categoriesCreateWithoutInterested_usersInput, post_categoriesUncheckedCreateWithoutInterested_usersInput> | post_categoriesCreateWithoutInterested_usersInput[] | post_categoriesUncheckedCreateWithoutInterested_usersInput[]
    connectOrCreate?: post_categoriesCreateOrConnectWithoutInterested_usersInput | post_categoriesCreateOrConnectWithoutInterested_usersInput[]
    upsert?: post_categoriesUpsertWithWhereUniqueWithoutInterested_usersInput | post_categoriesUpsertWithWhereUniqueWithoutInterested_usersInput[]
    set?: post_categoriesWhereUniqueInput | post_categoriesWhereUniqueInput[]
    disconnect?: post_categoriesWhereUniqueInput | post_categoriesWhereUniqueInput[]
    delete?: post_categoriesWhereUniqueInput | post_categoriesWhereUniqueInput[]
    connect?: post_categoriesWhereUniqueInput | post_categoriesWhereUniqueInput[]
    update?: post_categoriesUpdateWithWhereUniqueWithoutInterested_usersInput | post_categoriesUpdateWithWhereUniqueWithoutInterested_usersInput[]
    updateMany?: post_categoriesUpdateManyWithWhereWithoutInterested_usersInput | post_categoriesUpdateManyWithWhereWithoutInterested_usersInput[]
    deleteMany?: post_categoriesScalarWhereInput | post_categoriesScalarWhereInput[]
  }

  export type usersUncheckedUpdateManyWithoutFollowingsNestedInput = {
    create?: XOR<usersCreateWithoutFollowingsInput, usersUncheckedCreateWithoutFollowingsInput> | usersCreateWithoutFollowingsInput[] | usersUncheckedCreateWithoutFollowingsInput[]
    connectOrCreate?: usersCreateOrConnectWithoutFollowingsInput | usersCreateOrConnectWithoutFollowingsInput[]
    upsert?: usersUpsertWithWhereUniqueWithoutFollowingsInput | usersUpsertWithWhereUniqueWithoutFollowingsInput[]
    set?: usersWhereUniqueInput | usersWhereUniqueInput[]
    disconnect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    delete?: usersWhereUniqueInput | usersWhereUniqueInput[]
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    update?: usersUpdateWithWhereUniqueWithoutFollowingsInput | usersUpdateWithWhereUniqueWithoutFollowingsInput[]
    updateMany?: usersUpdateManyWithWhereWithoutFollowingsInput | usersUpdateManyWithWhereWithoutFollowingsInput[]
    deleteMany?: usersScalarWhereInput | usersScalarWhereInput[]
  }

  export type usersUncheckedUpdateManyWithoutFollowersNestedInput = {
    create?: XOR<usersCreateWithoutFollowersInput, usersUncheckedCreateWithoutFollowersInput> | usersCreateWithoutFollowersInput[] | usersUncheckedCreateWithoutFollowersInput[]
    connectOrCreate?: usersCreateOrConnectWithoutFollowersInput | usersCreateOrConnectWithoutFollowersInput[]
    upsert?: usersUpsertWithWhereUniqueWithoutFollowersInput | usersUpsertWithWhereUniqueWithoutFollowersInput[]
    set?: usersWhereUniqueInput | usersWhereUniqueInput[]
    disconnect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    delete?: usersWhereUniqueInput | usersWhereUniqueInput[]
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    update?: usersUpdateWithWhereUniqueWithoutFollowersInput | usersUpdateWithWhereUniqueWithoutFollowersInput[]
    updateMany?: usersUpdateManyWithWhereWithoutFollowersInput | usersUpdateManyWithWhereWithoutFollowersInput[]
    deleteMany?: usersScalarWhereInput | usersScalarWhereInput[]
  }

  export type postsUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<postsCreateWithoutAuthorInput, postsUncheckedCreateWithoutAuthorInput> | postsCreateWithoutAuthorInput[] | postsUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: postsCreateOrConnectWithoutAuthorInput | postsCreateOrConnectWithoutAuthorInput[]
    upsert?: postsUpsertWithWhereUniqueWithoutAuthorInput | postsUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: postsCreateManyAuthorInputEnvelope
    set?: postsWhereUniqueInput | postsWhereUniqueInput[]
    disconnect?: postsWhereUniqueInput | postsWhereUniqueInput[]
    delete?: postsWhereUniqueInput | postsWhereUniqueInput[]
    connect?: postsWhereUniqueInput | postsWhereUniqueInput[]
    update?: postsUpdateWithWhereUniqueWithoutAuthorInput | postsUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: postsUpdateManyWithWhereWithoutAuthorInput | postsUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: postsScalarWhereInput | postsScalarWhereInput[]
  }

  export type postsUncheckedUpdateManyWithoutPost_likersNestedInput = {
    create?: XOR<postsCreateWithoutPost_likersInput, postsUncheckedCreateWithoutPost_likersInput> | postsCreateWithoutPost_likersInput[] | postsUncheckedCreateWithoutPost_likersInput[]
    connectOrCreate?: postsCreateOrConnectWithoutPost_likersInput | postsCreateOrConnectWithoutPost_likersInput[]
    upsert?: postsUpsertWithWhereUniqueWithoutPost_likersInput | postsUpsertWithWhereUniqueWithoutPost_likersInput[]
    set?: postsWhereUniqueInput | postsWhereUniqueInput[]
    disconnect?: postsWhereUniqueInput | postsWhereUniqueInput[]
    delete?: postsWhereUniqueInput | postsWhereUniqueInput[]
    connect?: postsWhereUniqueInput | postsWhereUniqueInput[]
    update?: postsUpdateWithWhereUniqueWithoutPost_likersInput | postsUpdateWithWhereUniqueWithoutPost_likersInput[]
    updateMany?: postsUpdateManyWithWhereWithoutPost_likersInput | postsUpdateManyWithWhereWithoutPost_likersInput[]
    deleteMany?: postsScalarWhereInput | postsScalarWhereInput[]
  }

  export type commentsUncheckedUpdateManyWithoutComment_likersNestedInput = {
    create?: XOR<commentsCreateWithoutComment_likersInput, commentsUncheckedCreateWithoutComment_likersInput> | commentsCreateWithoutComment_likersInput[] | commentsUncheckedCreateWithoutComment_likersInput[]
    connectOrCreate?: commentsCreateOrConnectWithoutComment_likersInput | commentsCreateOrConnectWithoutComment_likersInput[]
    upsert?: commentsUpsertWithWhereUniqueWithoutComment_likersInput | commentsUpsertWithWhereUniqueWithoutComment_likersInput[]
    set?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    disconnect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    delete?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    connect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    update?: commentsUpdateWithWhereUniqueWithoutComment_likersInput | commentsUpdateWithWhereUniqueWithoutComment_likersInput[]
    updateMany?: commentsUpdateManyWithWhereWithoutComment_likersInput | commentsUpdateManyWithWhereWithoutComment_likersInput[]
    deleteMany?: commentsScalarWhereInput | commentsScalarWhereInput[]
  }

  export type messagesUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<messagesCreateWithoutUsersInput, messagesUncheckedCreateWithoutUsersInput> | messagesCreateWithoutUsersInput[] | messagesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: messagesCreateOrConnectWithoutUsersInput | messagesCreateOrConnectWithoutUsersInput[]
    upsert?: messagesUpsertWithWhereUniqueWithoutUsersInput | messagesUpsertWithWhereUniqueWithoutUsersInput[]
    set?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    disconnect?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    delete?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    connect?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    update?: messagesUpdateWithWhereUniqueWithoutUsersInput | messagesUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: messagesUpdateManyWithWhereWithoutUsersInput | messagesUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: messagesScalarWhereInput | messagesScalarWhereInput[]
  }

  export type conversationsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<conversationsCreateWithoutUsersInput, conversationsUncheckedCreateWithoutUsersInput> | conversationsCreateWithoutUsersInput[] | conversationsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: conversationsCreateOrConnectWithoutUsersInput | conversationsCreateOrConnectWithoutUsersInput[]
    upsert?: conversationsUpsertWithWhereUniqueWithoutUsersInput | conversationsUpsertWithWhereUniqueWithoutUsersInput[]
    set?: conversationsWhereUniqueInput | conversationsWhereUniqueInput[]
    disconnect?: conversationsWhereUniqueInput | conversationsWhereUniqueInput[]
    delete?: conversationsWhereUniqueInput | conversationsWhereUniqueInput[]
    connect?: conversationsWhereUniqueInput | conversationsWhereUniqueInput[]
    update?: conversationsUpdateWithWhereUniqueWithoutUsersInput | conversationsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: conversationsUpdateManyWithWhereWithoutUsersInput | conversationsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: conversationsScalarWhereInput | conversationsScalarWhereInput[]
  }

  export type sessionsUncheckedUpdateManyWithoutSession_userNestedInput = {
    create?: XOR<sessionsCreateWithoutSession_userInput, sessionsUncheckedCreateWithoutSession_userInput> | sessionsCreateWithoutSession_userInput[] | sessionsUncheckedCreateWithoutSession_userInput[]
    connectOrCreate?: sessionsCreateOrConnectWithoutSession_userInput | sessionsCreateOrConnectWithoutSession_userInput[]
    upsert?: sessionsUpsertWithWhereUniqueWithoutSession_userInput | sessionsUpsertWithWhereUniqueWithoutSession_userInput[]
    createMany?: sessionsCreateManySession_userInputEnvelope
    set?: sessionsWhereUniqueInput | sessionsWhereUniqueInput[]
    disconnect?: sessionsWhereUniqueInput | sessionsWhereUniqueInput[]
    delete?: sessionsWhereUniqueInput | sessionsWhereUniqueInput[]
    connect?: sessionsWhereUniqueInput | sessionsWhereUniqueInput[]
    update?: sessionsUpdateWithWhereUniqueWithoutSession_userInput | sessionsUpdateWithWhereUniqueWithoutSession_userInput[]
    updateMany?: sessionsUpdateManyWithWhereWithoutSession_userInput | sessionsUpdateManyWithWhereWithoutSession_userInput[]
    deleteMany?: sessionsScalarWhereInput | sessionsScalarWhereInput[]
  }

  export type nofiticationsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<nofiticationsCreateWithoutUsersInput, nofiticationsUncheckedCreateWithoutUsersInput> | nofiticationsCreateWithoutUsersInput[] | nofiticationsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: nofiticationsCreateOrConnectWithoutUsersInput | nofiticationsCreateOrConnectWithoutUsersInput[]
    upsert?: nofiticationsUpsertWithWhereUniqueWithoutUsersInput | nofiticationsUpsertWithWhereUniqueWithoutUsersInput[]
    set?: nofiticationsWhereUniqueInput | nofiticationsWhereUniqueInput[]
    disconnect?: nofiticationsWhereUniqueInput | nofiticationsWhereUniqueInput[]
    delete?: nofiticationsWhereUniqueInput | nofiticationsWhereUniqueInput[]
    connect?: nofiticationsWhereUniqueInput | nofiticationsWhereUniqueInput[]
    update?: nofiticationsUpdateWithWhereUniqueWithoutUsersInput | nofiticationsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: nofiticationsUpdateManyWithWhereWithoutUsersInput | nofiticationsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: nofiticationsScalarWhereInput | nofiticationsScalarWhereInput[]
  }

  export type users_saved_postsUncheckedUpdateManyWithoutUser_savingNestedInput = {
    create?: XOR<users_saved_postsCreateWithoutUser_savingInput, users_saved_postsUncheckedCreateWithoutUser_savingInput> | users_saved_postsCreateWithoutUser_savingInput[] | users_saved_postsUncheckedCreateWithoutUser_savingInput[]
    connectOrCreate?: users_saved_postsCreateOrConnectWithoutUser_savingInput | users_saved_postsCreateOrConnectWithoutUser_savingInput[]
    upsert?: users_saved_postsUpsertWithWhereUniqueWithoutUser_savingInput | users_saved_postsUpsertWithWhereUniqueWithoutUser_savingInput[]
    createMany?: users_saved_postsCreateManyUser_savingInputEnvelope
    set?: users_saved_postsWhereUniqueInput | users_saved_postsWhereUniqueInput[]
    disconnect?: users_saved_postsWhereUniqueInput | users_saved_postsWhereUniqueInput[]
    delete?: users_saved_postsWhereUniqueInput | users_saved_postsWhereUniqueInput[]
    connect?: users_saved_postsWhereUniqueInput | users_saved_postsWhereUniqueInput[]
    update?: users_saved_postsUpdateWithWhereUniqueWithoutUser_savingInput | users_saved_postsUpdateWithWhereUniqueWithoutUser_savingInput[]
    updateMany?: users_saved_postsUpdateManyWithWhereWithoutUser_savingInput | users_saved_postsUpdateManyWithWhereWithoutUser_savingInput[]
    deleteMany?: users_saved_postsScalarWhereInput | users_saved_postsScalarWhereInput[]
  }

  export type commentsUncheckedUpdateManyWithoutCommentatorNestedInput = {
    create?: XOR<commentsCreateWithoutCommentatorInput, commentsUncheckedCreateWithoutCommentatorInput> | commentsCreateWithoutCommentatorInput[] | commentsUncheckedCreateWithoutCommentatorInput[]
    connectOrCreate?: commentsCreateOrConnectWithoutCommentatorInput | commentsCreateOrConnectWithoutCommentatorInput[]
    upsert?: commentsUpsertWithWhereUniqueWithoutCommentatorInput | commentsUpsertWithWhereUniqueWithoutCommentatorInput[]
    createMany?: commentsCreateManyCommentatorInputEnvelope
    set?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    disconnect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    delete?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    connect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    update?: commentsUpdateWithWhereUniqueWithoutCommentatorInput | commentsUpdateWithWhereUniqueWithoutCommentatorInput[]
    updateMany?: commentsUpdateManyWithWhereWithoutCommentatorInput | commentsUpdateManyWithWhereWithoutCommentatorInput[]
    deleteMany?: commentsScalarWhereInput | commentsScalarWhereInput[]
  }

  export type usersCreateNestedOneWithoutUser_sessionsInput = {
    create?: XOR<usersCreateWithoutUser_sessionsInput, usersUncheckedCreateWithoutUser_sessionsInput>
    connectOrCreate?: usersCreateOrConnectWithoutUser_sessionsInput
    connect?: usersWhereUniqueInput
  }

  export type usersUpdateOneWithoutUser_sessionsNestedInput = {
    create?: XOR<usersCreateWithoutUser_sessionsInput, usersUncheckedCreateWithoutUser_sessionsInput>
    connectOrCreate?: usersCreateOrConnectWithoutUser_sessionsInput
    upsert?: usersUpsertWithoutUser_sessionsInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutUser_sessionsInput, usersUpdateWithoutUser_sessionsInput>, usersUncheckedUpdateWithoutUser_sessionsInput>
  }

  export type post_categoriesCreateNestedOneWithoutSub_categoriesInput = {
    create?: XOR<post_categoriesCreateWithoutSub_categoriesInput, post_categoriesUncheckedCreateWithoutSub_categoriesInput>
    connectOrCreate?: post_categoriesCreateOrConnectWithoutSub_categoriesInput
    connect?: post_categoriesWhereUniqueInput
  }

  export type post_categoriesCreateNestedManyWithoutParent_categoryInput = {
    create?: XOR<post_categoriesCreateWithoutParent_categoryInput, post_categoriesUncheckedCreateWithoutParent_categoryInput> | post_categoriesCreateWithoutParent_categoryInput[] | post_categoriesUncheckedCreateWithoutParent_categoryInput[]
    connectOrCreate?: post_categoriesCreateOrConnectWithoutParent_categoryInput | post_categoriesCreateOrConnectWithoutParent_categoryInput[]
    createMany?: post_categoriesCreateManyParent_categoryInputEnvelope
    connect?: post_categoriesWhereUniqueInput | post_categoriesWhereUniqueInput[]
  }

  export type postsCreateNestedManyWithoutPost_categoryInput = {
    create?: XOR<postsCreateWithoutPost_categoryInput, postsUncheckedCreateWithoutPost_categoryInput> | postsCreateWithoutPost_categoryInput[] | postsUncheckedCreateWithoutPost_categoryInput[]
    connectOrCreate?: postsCreateOrConnectWithoutPost_categoryInput | postsCreateOrConnectWithoutPost_categoryInput[]
    createMany?: postsCreateManyPost_categoryInputEnvelope
    connect?: postsWhereUniqueInput | postsWhereUniqueInput[]
  }

  export type usersCreateNestedManyWithoutPreferencesInput = {
    create?: XOR<usersCreateWithoutPreferencesInput, usersUncheckedCreateWithoutPreferencesInput> | usersCreateWithoutPreferencesInput[] | usersUncheckedCreateWithoutPreferencesInput[]
    connectOrCreate?: usersCreateOrConnectWithoutPreferencesInput | usersCreateOrConnectWithoutPreferencesInput[]
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
  }

  export type post_categoriesUncheckedCreateNestedManyWithoutParent_categoryInput = {
    create?: XOR<post_categoriesCreateWithoutParent_categoryInput, post_categoriesUncheckedCreateWithoutParent_categoryInput> | post_categoriesCreateWithoutParent_categoryInput[] | post_categoriesUncheckedCreateWithoutParent_categoryInput[]
    connectOrCreate?: post_categoriesCreateOrConnectWithoutParent_categoryInput | post_categoriesCreateOrConnectWithoutParent_categoryInput[]
    createMany?: post_categoriesCreateManyParent_categoryInputEnvelope
    connect?: post_categoriesWhereUniqueInput | post_categoriesWhereUniqueInput[]
  }

  export type postsUncheckedCreateNestedManyWithoutPost_categoryInput = {
    create?: XOR<postsCreateWithoutPost_categoryInput, postsUncheckedCreateWithoutPost_categoryInput> | postsCreateWithoutPost_categoryInput[] | postsUncheckedCreateWithoutPost_categoryInput[]
    connectOrCreate?: postsCreateOrConnectWithoutPost_categoryInput | postsCreateOrConnectWithoutPost_categoryInput[]
    createMany?: postsCreateManyPost_categoryInputEnvelope
    connect?: postsWhereUniqueInput | postsWhereUniqueInput[]
  }

  export type usersUncheckedCreateNestedManyWithoutPreferencesInput = {
    create?: XOR<usersCreateWithoutPreferencesInput, usersUncheckedCreateWithoutPreferencesInput> | usersCreateWithoutPreferencesInput[] | usersUncheckedCreateWithoutPreferencesInput[]
    connectOrCreate?: usersCreateOrConnectWithoutPreferencesInput | usersCreateOrConnectWithoutPreferencesInput[]
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
  }

  export type post_categoriesUpdateOneWithoutSub_categoriesNestedInput = {
    create?: XOR<post_categoriesCreateWithoutSub_categoriesInput, post_categoriesUncheckedCreateWithoutSub_categoriesInput>
    connectOrCreate?: post_categoriesCreateOrConnectWithoutSub_categoriesInput
    upsert?: post_categoriesUpsertWithoutSub_categoriesInput
    disconnect?: post_categoriesWhereInput | boolean
    delete?: post_categoriesWhereInput | boolean
    connect?: post_categoriesWhereUniqueInput
    update?: XOR<XOR<post_categoriesUpdateToOneWithWhereWithoutSub_categoriesInput, post_categoriesUpdateWithoutSub_categoriesInput>, post_categoriesUncheckedUpdateWithoutSub_categoriesInput>
  }

  export type post_categoriesUpdateManyWithoutParent_categoryNestedInput = {
    create?: XOR<post_categoriesCreateWithoutParent_categoryInput, post_categoriesUncheckedCreateWithoutParent_categoryInput> | post_categoriesCreateWithoutParent_categoryInput[] | post_categoriesUncheckedCreateWithoutParent_categoryInput[]
    connectOrCreate?: post_categoriesCreateOrConnectWithoutParent_categoryInput | post_categoriesCreateOrConnectWithoutParent_categoryInput[]
    upsert?: post_categoriesUpsertWithWhereUniqueWithoutParent_categoryInput | post_categoriesUpsertWithWhereUniqueWithoutParent_categoryInput[]
    createMany?: post_categoriesCreateManyParent_categoryInputEnvelope
    set?: post_categoriesWhereUniqueInput | post_categoriesWhereUniqueInput[]
    disconnect?: post_categoriesWhereUniqueInput | post_categoriesWhereUniqueInput[]
    delete?: post_categoriesWhereUniqueInput | post_categoriesWhereUniqueInput[]
    connect?: post_categoriesWhereUniqueInput | post_categoriesWhereUniqueInput[]
    update?: post_categoriesUpdateWithWhereUniqueWithoutParent_categoryInput | post_categoriesUpdateWithWhereUniqueWithoutParent_categoryInput[]
    updateMany?: post_categoriesUpdateManyWithWhereWithoutParent_categoryInput | post_categoriesUpdateManyWithWhereWithoutParent_categoryInput[]
    deleteMany?: post_categoriesScalarWhereInput | post_categoriesScalarWhereInput[]
  }

  export type postsUpdateManyWithoutPost_categoryNestedInput = {
    create?: XOR<postsCreateWithoutPost_categoryInput, postsUncheckedCreateWithoutPost_categoryInput> | postsCreateWithoutPost_categoryInput[] | postsUncheckedCreateWithoutPost_categoryInput[]
    connectOrCreate?: postsCreateOrConnectWithoutPost_categoryInput | postsCreateOrConnectWithoutPost_categoryInput[]
    upsert?: postsUpsertWithWhereUniqueWithoutPost_categoryInput | postsUpsertWithWhereUniqueWithoutPost_categoryInput[]
    createMany?: postsCreateManyPost_categoryInputEnvelope
    set?: postsWhereUniqueInput | postsWhereUniqueInput[]
    disconnect?: postsWhereUniqueInput | postsWhereUniqueInput[]
    delete?: postsWhereUniqueInput | postsWhereUniqueInput[]
    connect?: postsWhereUniqueInput | postsWhereUniqueInput[]
    update?: postsUpdateWithWhereUniqueWithoutPost_categoryInput | postsUpdateWithWhereUniqueWithoutPost_categoryInput[]
    updateMany?: postsUpdateManyWithWhereWithoutPost_categoryInput | postsUpdateManyWithWhereWithoutPost_categoryInput[]
    deleteMany?: postsScalarWhereInput | postsScalarWhereInput[]
  }

  export type usersUpdateManyWithoutPreferencesNestedInput = {
    create?: XOR<usersCreateWithoutPreferencesInput, usersUncheckedCreateWithoutPreferencesInput> | usersCreateWithoutPreferencesInput[] | usersUncheckedCreateWithoutPreferencesInput[]
    connectOrCreate?: usersCreateOrConnectWithoutPreferencesInput | usersCreateOrConnectWithoutPreferencesInput[]
    upsert?: usersUpsertWithWhereUniqueWithoutPreferencesInput | usersUpsertWithWhereUniqueWithoutPreferencesInput[]
    set?: usersWhereUniqueInput | usersWhereUniqueInput[]
    disconnect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    delete?: usersWhereUniqueInput | usersWhereUniqueInput[]
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    update?: usersUpdateWithWhereUniqueWithoutPreferencesInput | usersUpdateWithWhereUniqueWithoutPreferencesInput[]
    updateMany?: usersUpdateManyWithWhereWithoutPreferencesInput | usersUpdateManyWithWhereWithoutPreferencesInput[]
    deleteMany?: usersScalarWhereInput | usersScalarWhereInput[]
  }

  export type post_categoriesUncheckedUpdateManyWithoutParent_categoryNestedInput = {
    create?: XOR<post_categoriesCreateWithoutParent_categoryInput, post_categoriesUncheckedCreateWithoutParent_categoryInput> | post_categoriesCreateWithoutParent_categoryInput[] | post_categoriesUncheckedCreateWithoutParent_categoryInput[]
    connectOrCreate?: post_categoriesCreateOrConnectWithoutParent_categoryInput | post_categoriesCreateOrConnectWithoutParent_categoryInput[]
    upsert?: post_categoriesUpsertWithWhereUniqueWithoutParent_categoryInput | post_categoriesUpsertWithWhereUniqueWithoutParent_categoryInput[]
    createMany?: post_categoriesCreateManyParent_categoryInputEnvelope
    set?: post_categoriesWhereUniqueInput | post_categoriesWhereUniqueInput[]
    disconnect?: post_categoriesWhereUniqueInput | post_categoriesWhereUniqueInput[]
    delete?: post_categoriesWhereUniqueInput | post_categoriesWhereUniqueInput[]
    connect?: post_categoriesWhereUniqueInput | post_categoriesWhereUniqueInput[]
    update?: post_categoriesUpdateWithWhereUniqueWithoutParent_categoryInput | post_categoriesUpdateWithWhereUniqueWithoutParent_categoryInput[]
    updateMany?: post_categoriesUpdateManyWithWhereWithoutParent_categoryInput | post_categoriesUpdateManyWithWhereWithoutParent_categoryInput[]
    deleteMany?: post_categoriesScalarWhereInput | post_categoriesScalarWhereInput[]
  }

  export type postsUncheckedUpdateManyWithoutPost_categoryNestedInput = {
    create?: XOR<postsCreateWithoutPost_categoryInput, postsUncheckedCreateWithoutPost_categoryInput> | postsCreateWithoutPost_categoryInput[] | postsUncheckedCreateWithoutPost_categoryInput[]
    connectOrCreate?: postsCreateOrConnectWithoutPost_categoryInput | postsCreateOrConnectWithoutPost_categoryInput[]
    upsert?: postsUpsertWithWhereUniqueWithoutPost_categoryInput | postsUpsertWithWhereUniqueWithoutPost_categoryInput[]
    createMany?: postsCreateManyPost_categoryInputEnvelope
    set?: postsWhereUniqueInput | postsWhereUniqueInput[]
    disconnect?: postsWhereUniqueInput | postsWhereUniqueInput[]
    delete?: postsWhereUniqueInput | postsWhereUniqueInput[]
    connect?: postsWhereUniqueInput | postsWhereUniqueInput[]
    update?: postsUpdateWithWhereUniqueWithoutPost_categoryInput | postsUpdateWithWhereUniqueWithoutPost_categoryInput[]
    updateMany?: postsUpdateManyWithWhereWithoutPost_categoryInput | postsUpdateManyWithWhereWithoutPost_categoryInput[]
    deleteMany?: postsScalarWhereInput | postsScalarWhereInput[]
  }

  export type usersUncheckedUpdateManyWithoutPreferencesNestedInput = {
    create?: XOR<usersCreateWithoutPreferencesInput, usersUncheckedCreateWithoutPreferencesInput> | usersCreateWithoutPreferencesInput[] | usersUncheckedCreateWithoutPreferencesInput[]
    connectOrCreate?: usersCreateOrConnectWithoutPreferencesInput | usersCreateOrConnectWithoutPreferencesInput[]
    upsert?: usersUpsertWithWhereUniqueWithoutPreferencesInput | usersUpsertWithWhereUniqueWithoutPreferencesInput[]
    set?: usersWhereUniqueInput | usersWhereUniqueInput[]
    disconnect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    delete?: usersWhereUniqueInput | usersWhereUniqueInput[]
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    update?: usersUpdateWithWhereUniqueWithoutPreferencesInput | usersUpdateWithWhereUniqueWithoutPreferencesInput[]
    updateMany?: usersUpdateManyWithWhereWithoutPreferencesInput | usersUpdateManyWithWhereWithoutPreferencesInput[]
    deleteMany?: usersScalarWhereInput | usersScalarWhereInput[]
  }

  export type post_categoriesCreateNestedOneWithoutPostsInput = {
    create?: XOR<post_categoriesCreateWithoutPostsInput, post_categoriesUncheckedCreateWithoutPostsInput>
    connectOrCreate?: post_categoriesCreateOrConnectWithoutPostsInput
    connect?: post_categoriesWhereUniqueInput
  }

  export type usersCreateNestedManyWithoutPosts_likedInput = {
    create?: XOR<usersCreateWithoutPosts_likedInput, usersUncheckedCreateWithoutPosts_likedInput> | usersCreateWithoutPosts_likedInput[] | usersUncheckedCreateWithoutPosts_likedInput[]
    connectOrCreate?: usersCreateOrConnectWithoutPosts_likedInput | usersCreateOrConnectWithoutPosts_likedInput[]
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
  }

  export type usersCreateNestedOneWithoutUser_postsInput = {
    create?: XOR<usersCreateWithoutUser_postsInput, usersUncheckedCreateWithoutUser_postsInput>
    connectOrCreate?: usersCreateOrConnectWithoutUser_postsInput
    connect?: usersWhereUniqueInput
  }

  export type commentsCreateNestedManyWithoutCommented_postInput = {
    create?: XOR<commentsCreateWithoutCommented_postInput, commentsUncheckedCreateWithoutCommented_postInput> | commentsCreateWithoutCommented_postInput[] | commentsUncheckedCreateWithoutCommented_postInput[]
    connectOrCreate?: commentsCreateOrConnectWithoutCommented_postInput | commentsCreateOrConnectWithoutCommented_postInput[]
    createMany?: commentsCreateManyCommented_postInputEnvelope
    connect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
  }

  export type mediasCreateNestedManyWithoutMedia_postInput = {
    create?: XOR<mediasCreateWithoutMedia_postInput, mediasUncheckedCreateWithoutMedia_postInput> | mediasCreateWithoutMedia_postInput[] | mediasUncheckedCreateWithoutMedia_postInput[]
    connectOrCreate?: mediasCreateOrConnectWithoutMedia_postInput | mediasCreateOrConnectWithoutMedia_postInput[]
    createMany?: mediasCreateManyMedia_postInputEnvelope
    connect?: mediasWhereUniqueInput | mediasWhereUniqueInput[]
  }

  export type users_saved_postsCreateNestedManyWithoutSaved_postInput = {
    create?: XOR<users_saved_postsCreateWithoutSaved_postInput, users_saved_postsUncheckedCreateWithoutSaved_postInput> | users_saved_postsCreateWithoutSaved_postInput[] | users_saved_postsUncheckedCreateWithoutSaved_postInput[]
    connectOrCreate?: users_saved_postsCreateOrConnectWithoutSaved_postInput | users_saved_postsCreateOrConnectWithoutSaved_postInput[]
    createMany?: users_saved_postsCreateManySaved_postInputEnvelope
    connect?: users_saved_postsWhereUniqueInput | users_saved_postsWhereUniqueInput[]
  }

  export type usersUncheckedCreateNestedManyWithoutPosts_likedInput = {
    create?: XOR<usersCreateWithoutPosts_likedInput, usersUncheckedCreateWithoutPosts_likedInput> | usersCreateWithoutPosts_likedInput[] | usersUncheckedCreateWithoutPosts_likedInput[]
    connectOrCreate?: usersCreateOrConnectWithoutPosts_likedInput | usersCreateOrConnectWithoutPosts_likedInput[]
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
  }

  export type commentsUncheckedCreateNestedManyWithoutCommented_postInput = {
    create?: XOR<commentsCreateWithoutCommented_postInput, commentsUncheckedCreateWithoutCommented_postInput> | commentsCreateWithoutCommented_postInput[] | commentsUncheckedCreateWithoutCommented_postInput[]
    connectOrCreate?: commentsCreateOrConnectWithoutCommented_postInput | commentsCreateOrConnectWithoutCommented_postInput[]
    createMany?: commentsCreateManyCommented_postInputEnvelope
    connect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
  }

  export type mediasUncheckedCreateNestedManyWithoutMedia_postInput = {
    create?: XOR<mediasCreateWithoutMedia_postInput, mediasUncheckedCreateWithoutMedia_postInput> | mediasCreateWithoutMedia_postInput[] | mediasUncheckedCreateWithoutMedia_postInput[]
    connectOrCreate?: mediasCreateOrConnectWithoutMedia_postInput | mediasCreateOrConnectWithoutMedia_postInput[]
    createMany?: mediasCreateManyMedia_postInputEnvelope
    connect?: mediasWhereUniqueInput | mediasWhereUniqueInput[]
  }

  export type users_saved_postsUncheckedCreateNestedManyWithoutSaved_postInput = {
    create?: XOR<users_saved_postsCreateWithoutSaved_postInput, users_saved_postsUncheckedCreateWithoutSaved_postInput> | users_saved_postsCreateWithoutSaved_postInput[] | users_saved_postsUncheckedCreateWithoutSaved_postInput[]
    connectOrCreate?: users_saved_postsCreateOrConnectWithoutSaved_postInput | users_saved_postsCreateOrConnectWithoutSaved_postInput[]
    createMany?: users_saved_postsCreateManySaved_postInputEnvelope
    connect?: users_saved_postsWhereUniqueInput | users_saved_postsWhereUniqueInput[]
  }

  export type NullableBigIntFieldUpdateOperationsInput = {
    set?: bigint | number | null
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type post_categoriesUpdateOneWithoutPostsNestedInput = {
    create?: XOR<post_categoriesCreateWithoutPostsInput, post_categoriesUncheckedCreateWithoutPostsInput>
    connectOrCreate?: post_categoriesCreateOrConnectWithoutPostsInput
    upsert?: post_categoriesUpsertWithoutPostsInput
    disconnect?: post_categoriesWhereInput | boolean
    delete?: post_categoriesWhereInput | boolean
    connect?: post_categoriesWhereUniqueInput
    update?: XOR<XOR<post_categoriesUpdateToOneWithWhereWithoutPostsInput, post_categoriesUpdateWithoutPostsInput>, post_categoriesUncheckedUpdateWithoutPostsInput>
  }

  export type usersUpdateManyWithoutPosts_likedNestedInput = {
    create?: XOR<usersCreateWithoutPosts_likedInput, usersUncheckedCreateWithoutPosts_likedInput> | usersCreateWithoutPosts_likedInput[] | usersUncheckedCreateWithoutPosts_likedInput[]
    connectOrCreate?: usersCreateOrConnectWithoutPosts_likedInput | usersCreateOrConnectWithoutPosts_likedInput[]
    upsert?: usersUpsertWithWhereUniqueWithoutPosts_likedInput | usersUpsertWithWhereUniqueWithoutPosts_likedInput[]
    set?: usersWhereUniqueInput | usersWhereUniqueInput[]
    disconnect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    delete?: usersWhereUniqueInput | usersWhereUniqueInput[]
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    update?: usersUpdateWithWhereUniqueWithoutPosts_likedInput | usersUpdateWithWhereUniqueWithoutPosts_likedInput[]
    updateMany?: usersUpdateManyWithWhereWithoutPosts_likedInput | usersUpdateManyWithWhereWithoutPosts_likedInput[]
    deleteMany?: usersScalarWhereInput | usersScalarWhereInput[]
  }

  export type usersUpdateOneRequiredWithoutUser_postsNestedInput = {
    create?: XOR<usersCreateWithoutUser_postsInput, usersUncheckedCreateWithoutUser_postsInput>
    connectOrCreate?: usersCreateOrConnectWithoutUser_postsInput
    upsert?: usersUpsertWithoutUser_postsInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutUser_postsInput, usersUpdateWithoutUser_postsInput>, usersUncheckedUpdateWithoutUser_postsInput>
  }

  export type commentsUpdateManyWithoutCommented_postNestedInput = {
    create?: XOR<commentsCreateWithoutCommented_postInput, commentsUncheckedCreateWithoutCommented_postInput> | commentsCreateWithoutCommented_postInput[] | commentsUncheckedCreateWithoutCommented_postInput[]
    connectOrCreate?: commentsCreateOrConnectWithoutCommented_postInput | commentsCreateOrConnectWithoutCommented_postInput[]
    upsert?: commentsUpsertWithWhereUniqueWithoutCommented_postInput | commentsUpsertWithWhereUniqueWithoutCommented_postInput[]
    createMany?: commentsCreateManyCommented_postInputEnvelope
    set?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    disconnect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    delete?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    connect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    update?: commentsUpdateWithWhereUniqueWithoutCommented_postInput | commentsUpdateWithWhereUniqueWithoutCommented_postInput[]
    updateMany?: commentsUpdateManyWithWhereWithoutCommented_postInput | commentsUpdateManyWithWhereWithoutCommented_postInput[]
    deleteMany?: commentsScalarWhereInput | commentsScalarWhereInput[]
  }

  export type mediasUpdateManyWithoutMedia_postNestedInput = {
    create?: XOR<mediasCreateWithoutMedia_postInput, mediasUncheckedCreateWithoutMedia_postInput> | mediasCreateWithoutMedia_postInput[] | mediasUncheckedCreateWithoutMedia_postInput[]
    connectOrCreate?: mediasCreateOrConnectWithoutMedia_postInput | mediasCreateOrConnectWithoutMedia_postInput[]
    upsert?: mediasUpsertWithWhereUniqueWithoutMedia_postInput | mediasUpsertWithWhereUniqueWithoutMedia_postInput[]
    createMany?: mediasCreateManyMedia_postInputEnvelope
    set?: mediasWhereUniqueInput | mediasWhereUniqueInput[]
    disconnect?: mediasWhereUniqueInput | mediasWhereUniqueInput[]
    delete?: mediasWhereUniqueInput | mediasWhereUniqueInput[]
    connect?: mediasWhereUniqueInput | mediasWhereUniqueInput[]
    update?: mediasUpdateWithWhereUniqueWithoutMedia_postInput | mediasUpdateWithWhereUniqueWithoutMedia_postInput[]
    updateMany?: mediasUpdateManyWithWhereWithoutMedia_postInput | mediasUpdateManyWithWhereWithoutMedia_postInput[]
    deleteMany?: mediasScalarWhereInput | mediasScalarWhereInput[]
  }

  export type users_saved_postsUpdateManyWithoutSaved_postNestedInput = {
    create?: XOR<users_saved_postsCreateWithoutSaved_postInput, users_saved_postsUncheckedCreateWithoutSaved_postInput> | users_saved_postsCreateWithoutSaved_postInput[] | users_saved_postsUncheckedCreateWithoutSaved_postInput[]
    connectOrCreate?: users_saved_postsCreateOrConnectWithoutSaved_postInput | users_saved_postsCreateOrConnectWithoutSaved_postInput[]
    upsert?: users_saved_postsUpsertWithWhereUniqueWithoutSaved_postInput | users_saved_postsUpsertWithWhereUniqueWithoutSaved_postInput[]
    createMany?: users_saved_postsCreateManySaved_postInputEnvelope
    set?: users_saved_postsWhereUniqueInput | users_saved_postsWhereUniqueInput[]
    disconnect?: users_saved_postsWhereUniqueInput | users_saved_postsWhereUniqueInput[]
    delete?: users_saved_postsWhereUniqueInput | users_saved_postsWhereUniqueInput[]
    connect?: users_saved_postsWhereUniqueInput | users_saved_postsWhereUniqueInput[]
    update?: users_saved_postsUpdateWithWhereUniqueWithoutSaved_postInput | users_saved_postsUpdateWithWhereUniqueWithoutSaved_postInput[]
    updateMany?: users_saved_postsUpdateManyWithWhereWithoutSaved_postInput | users_saved_postsUpdateManyWithWhereWithoutSaved_postInput[]
    deleteMany?: users_saved_postsScalarWhereInput | users_saved_postsScalarWhereInput[]
  }

  export type usersUncheckedUpdateManyWithoutPosts_likedNestedInput = {
    create?: XOR<usersCreateWithoutPosts_likedInput, usersUncheckedCreateWithoutPosts_likedInput> | usersCreateWithoutPosts_likedInput[] | usersUncheckedCreateWithoutPosts_likedInput[]
    connectOrCreate?: usersCreateOrConnectWithoutPosts_likedInput | usersCreateOrConnectWithoutPosts_likedInput[]
    upsert?: usersUpsertWithWhereUniqueWithoutPosts_likedInput | usersUpsertWithWhereUniqueWithoutPosts_likedInput[]
    set?: usersWhereUniqueInput | usersWhereUniqueInput[]
    disconnect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    delete?: usersWhereUniqueInput | usersWhereUniqueInput[]
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    update?: usersUpdateWithWhereUniqueWithoutPosts_likedInput | usersUpdateWithWhereUniqueWithoutPosts_likedInput[]
    updateMany?: usersUpdateManyWithWhereWithoutPosts_likedInput | usersUpdateManyWithWhereWithoutPosts_likedInput[]
    deleteMany?: usersScalarWhereInput | usersScalarWhereInput[]
  }

  export type commentsUncheckedUpdateManyWithoutCommented_postNestedInput = {
    create?: XOR<commentsCreateWithoutCommented_postInput, commentsUncheckedCreateWithoutCommented_postInput> | commentsCreateWithoutCommented_postInput[] | commentsUncheckedCreateWithoutCommented_postInput[]
    connectOrCreate?: commentsCreateOrConnectWithoutCommented_postInput | commentsCreateOrConnectWithoutCommented_postInput[]
    upsert?: commentsUpsertWithWhereUniqueWithoutCommented_postInput | commentsUpsertWithWhereUniqueWithoutCommented_postInput[]
    createMany?: commentsCreateManyCommented_postInputEnvelope
    set?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    disconnect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    delete?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    connect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    update?: commentsUpdateWithWhereUniqueWithoutCommented_postInput | commentsUpdateWithWhereUniqueWithoutCommented_postInput[]
    updateMany?: commentsUpdateManyWithWhereWithoutCommented_postInput | commentsUpdateManyWithWhereWithoutCommented_postInput[]
    deleteMany?: commentsScalarWhereInput | commentsScalarWhereInput[]
  }

  export type mediasUncheckedUpdateManyWithoutMedia_postNestedInput = {
    create?: XOR<mediasCreateWithoutMedia_postInput, mediasUncheckedCreateWithoutMedia_postInput> | mediasCreateWithoutMedia_postInput[] | mediasUncheckedCreateWithoutMedia_postInput[]
    connectOrCreate?: mediasCreateOrConnectWithoutMedia_postInput | mediasCreateOrConnectWithoutMedia_postInput[]
    upsert?: mediasUpsertWithWhereUniqueWithoutMedia_postInput | mediasUpsertWithWhereUniqueWithoutMedia_postInput[]
    createMany?: mediasCreateManyMedia_postInputEnvelope
    set?: mediasWhereUniqueInput | mediasWhereUniqueInput[]
    disconnect?: mediasWhereUniqueInput | mediasWhereUniqueInput[]
    delete?: mediasWhereUniqueInput | mediasWhereUniqueInput[]
    connect?: mediasWhereUniqueInput | mediasWhereUniqueInput[]
    update?: mediasUpdateWithWhereUniqueWithoutMedia_postInput | mediasUpdateWithWhereUniqueWithoutMedia_postInput[]
    updateMany?: mediasUpdateManyWithWhereWithoutMedia_postInput | mediasUpdateManyWithWhereWithoutMedia_postInput[]
    deleteMany?: mediasScalarWhereInput | mediasScalarWhereInput[]
  }

  export type users_saved_postsUncheckedUpdateManyWithoutSaved_postNestedInput = {
    create?: XOR<users_saved_postsCreateWithoutSaved_postInput, users_saved_postsUncheckedCreateWithoutSaved_postInput> | users_saved_postsCreateWithoutSaved_postInput[] | users_saved_postsUncheckedCreateWithoutSaved_postInput[]
    connectOrCreate?: users_saved_postsCreateOrConnectWithoutSaved_postInput | users_saved_postsCreateOrConnectWithoutSaved_postInput[]
    upsert?: users_saved_postsUpsertWithWhereUniqueWithoutSaved_postInput | users_saved_postsUpsertWithWhereUniqueWithoutSaved_postInput[]
    createMany?: users_saved_postsCreateManySaved_postInputEnvelope
    set?: users_saved_postsWhereUniqueInput | users_saved_postsWhereUniqueInput[]
    disconnect?: users_saved_postsWhereUniqueInput | users_saved_postsWhereUniqueInput[]
    delete?: users_saved_postsWhereUniqueInput | users_saved_postsWhereUniqueInput[]
    connect?: users_saved_postsWhereUniqueInput | users_saved_postsWhereUniqueInput[]
    update?: users_saved_postsUpdateWithWhereUniqueWithoutSaved_postInput | users_saved_postsUpdateWithWhereUniqueWithoutSaved_postInput[]
    updateMany?: users_saved_postsUpdateManyWithWhereWithoutSaved_postInput | users_saved_postsUpdateManyWithWhereWithoutSaved_postInput[]
    deleteMany?: users_saved_postsScalarWhereInput | users_saved_postsScalarWhereInput[]
  }

  export type usersCreateNestedOneWithoutUsers_saved_postsInput = {
    create?: XOR<usersCreateWithoutUsers_saved_postsInput, usersUncheckedCreateWithoutUsers_saved_postsInput>
    connectOrCreate?: usersCreateOrConnectWithoutUsers_saved_postsInput
    connect?: usersWhereUniqueInput
  }

  export type postsCreateNestedOneWithoutUsers_saved_postsInput = {
    create?: XOR<postsCreateWithoutUsers_saved_postsInput, postsUncheckedCreateWithoutUsers_saved_postsInput>
    connectOrCreate?: postsCreateOrConnectWithoutUsers_saved_postsInput
    connect?: postsWhereUniqueInput
  }

  export type usersUpdateOneWithoutUsers_saved_postsNestedInput = {
    create?: XOR<usersCreateWithoutUsers_saved_postsInput, usersUncheckedCreateWithoutUsers_saved_postsInput>
    connectOrCreate?: usersCreateOrConnectWithoutUsers_saved_postsInput
    upsert?: usersUpsertWithoutUsers_saved_postsInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutUsers_saved_postsInput, usersUpdateWithoutUsers_saved_postsInput>, usersUncheckedUpdateWithoutUsers_saved_postsInput>
  }

  export type postsUpdateOneWithoutUsers_saved_postsNestedInput = {
    create?: XOR<postsCreateWithoutUsers_saved_postsInput, postsUncheckedCreateWithoutUsers_saved_postsInput>
    connectOrCreate?: postsCreateOrConnectWithoutUsers_saved_postsInput
    upsert?: postsUpsertWithoutUsers_saved_postsInput
    disconnect?: postsWhereInput | boolean
    delete?: postsWhereInput | boolean
    connect?: postsWhereUniqueInput
    update?: XOR<XOR<postsUpdateToOneWithWhereWithoutUsers_saved_postsInput, postsUpdateWithoutUsers_saved_postsInput>, postsUncheckedUpdateWithoutUsers_saved_postsInput>
  }

  export type usersCreateNestedManyWithoutComments_likedInput = {
    create?: XOR<usersCreateWithoutComments_likedInput, usersUncheckedCreateWithoutComments_likedInput> | usersCreateWithoutComments_likedInput[] | usersUncheckedCreateWithoutComments_likedInput[]
    connectOrCreate?: usersCreateOrConnectWithoutComments_likedInput | usersCreateOrConnectWithoutComments_likedInput[]
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
  }

  export type usersCreateNestedOneWithoutCommentsInput = {
    create?: XOR<usersCreateWithoutCommentsInput, usersUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: usersCreateOrConnectWithoutCommentsInput
    connect?: usersWhereUniqueInput
  }

  export type postsCreateNestedOneWithoutCommentsInput = {
    create?: XOR<postsCreateWithoutCommentsInput, postsUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: postsCreateOrConnectWithoutCommentsInput
    connect?: postsWhereUniqueInput
  }

  export type commentsCreateNestedOneWithoutSub_commentsInput = {
    create?: XOR<commentsCreateWithoutSub_commentsInput, commentsUncheckedCreateWithoutSub_commentsInput>
    connectOrCreate?: commentsCreateOrConnectWithoutSub_commentsInput
    connect?: commentsWhereUniqueInput
  }

  export type commentsCreateNestedManyWithoutParent_comentInput = {
    create?: XOR<commentsCreateWithoutParent_comentInput, commentsUncheckedCreateWithoutParent_comentInput> | commentsCreateWithoutParent_comentInput[] | commentsUncheckedCreateWithoutParent_comentInput[]
    connectOrCreate?: commentsCreateOrConnectWithoutParent_comentInput | commentsCreateOrConnectWithoutParent_comentInput[]
    createMany?: commentsCreateManyParent_comentInputEnvelope
    connect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
  }

  export type usersUncheckedCreateNestedManyWithoutComments_likedInput = {
    create?: XOR<usersCreateWithoutComments_likedInput, usersUncheckedCreateWithoutComments_likedInput> | usersCreateWithoutComments_likedInput[] | usersUncheckedCreateWithoutComments_likedInput[]
    connectOrCreate?: usersCreateOrConnectWithoutComments_likedInput | usersCreateOrConnectWithoutComments_likedInput[]
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
  }

  export type commentsUncheckedCreateNestedManyWithoutParent_comentInput = {
    create?: XOR<commentsCreateWithoutParent_comentInput, commentsUncheckedCreateWithoutParent_comentInput> | commentsCreateWithoutParent_comentInput[] | commentsUncheckedCreateWithoutParent_comentInput[]
    connectOrCreate?: commentsCreateOrConnectWithoutParent_comentInput | commentsCreateOrConnectWithoutParent_comentInput[]
    createMany?: commentsCreateManyParent_comentInputEnvelope
    connect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
  }

  export type usersUpdateManyWithoutComments_likedNestedInput = {
    create?: XOR<usersCreateWithoutComments_likedInput, usersUncheckedCreateWithoutComments_likedInput> | usersCreateWithoutComments_likedInput[] | usersUncheckedCreateWithoutComments_likedInput[]
    connectOrCreate?: usersCreateOrConnectWithoutComments_likedInput | usersCreateOrConnectWithoutComments_likedInput[]
    upsert?: usersUpsertWithWhereUniqueWithoutComments_likedInput | usersUpsertWithWhereUniqueWithoutComments_likedInput[]
    set?: usersWhereUniqueInput | usersWhereUniqueInput[]
    disconnect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    delete?: usersWhereUniqueInput | usersWhereUniqueInput[]
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    update?: usersUpdateWithWhereUniqueWithoutComments_likedInput | usersUpdateWithWhereUniqueWithoutComments_likedInput[]
    updateMany?: usersUpdateManyWithWhereWithoutComments_likedInput | usersUpdateManyWithWhereWithoutComments_likedInput[]
    deleteMany?: usersScalarWhereInput | usersScalarWhereInput[]
  }

  export type usersUpdateOneWithoutCommentsNestedInput = {
    create?: XOR<usersCreateWithoutCommentsInput, usersUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: usersCreateOrConnectWithoutCommentsInput
    upsert?: usersUpsertWithoutCommentsInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutCommentsInput, usersUpdateWithoutCommentsInput>, usersUncheckedUpdateWithoutCommentsInput>
  }

  export type postsUpdateOneWithoutCommentsNestedInput = {
    create?: XOR<postsCreateWithoutCommentsInput, postsUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: postsCreateOrConnectWithoutCommentsInput
    upsert?: postsUpsertWithoutCommentsInput
    disconnect?: postsWhereInput | boolean
    delete?: postsWhereInput | boolean
    connect?: postsWhereUniqueInput
    update?: XOR<XOR<postsUpdateToOneWithWhereWithoutCommentsInput, postsUpdateWithoutCommentsInput>, postsUncheckedUpdateWithoutCommentsInput>
  }

  export type commentsUpdateOneWithoutSub_commentsNestedInput = {
    create?: XOR<commentsCreateWithoutSub_commentsInput, commentsUncheckedCreateWithoutSub_commentsInput>
    connectOrCreate?: commentsCreateOrConnectWithoutSub_commentsInput
    upsert?: commentsUpsertWithoutSub_commentsInput
    disconnect?: commentsWhereInput | boolean
    delete?: commentsWhereInput | boolean
    connect?: commentsWhereUniqueInput
    update?: XOR<XOR<commentsUpdateToOneWithWhereWithoutSub_commentsInput, commentsUpdateWithoutSub_commentsInput>, commentsUncheckedUpdateWithoutSub_commentsInput>
  }

  export type commentsUpdateManyWithoutParent_comentNestedInput = {
    create?: XOR<commentsCreateWithoutParent_comentInput, commentsUncheckedCreateWithoutParent_comentInput> | commentsCreateWithoutParent_comentInput[] | commentsUncheckedCreateWithoutParent_comentInput[]
    connectOrCreate?: commentsCreateOrConnectWithoutParent_comentInput | commentsCreateOrConnectWithoutParent_comentInput[]
    upsert?: commentsUpsertWithWhereUniqueWithoutParent_comentInput | commentsUpsertWithWhereUniqueWithoutParent_comentInput[]
    createMany?: commentsCreateManyParent_comentInputEnvelope
    set?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    disconnect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    delete?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    connect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    update?: commentsUpdateWithWhereUniqueWithoutParent_comentInput | commentsUpdateWithWhereUniqueWithoutParent_comentInput[]
    updateMany?: commentsUpdateManyWithWhereWithoutParent_comentInput | commentsUpdateManyWithWhereWithoutParent_comentInput[]
    deleteMany?: commentsScalarWhereInput | commentsScalarWhereInput[]
  }

  export type usersUncheckedUpdateManyWithoutComments_likedNestedInput = {
    create?: XOR<usersCreateWithoutComments_likedInput, usersUncheckedCreateWithoutComments_likedInput> | usersCreateWithoutComments_likedInput[] | usersUncheckedCreateWithoutComments_likedInput[]
    connectOrCreate?: usersCreateOrConnectWithoutComments_likedInput | usersCreateOrConnectWithoutComments_likedInput[]
    upsert?: usersUpsertWithWhereUniqueWithoutComments_likedInput | usersUpsertWithWhereUniqueWithoutComments_likedInput[]
    set?: usersWhereUniqueInput | usersWhereUniqueInput[]
    disconnect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    delete?: usersWhereUniqueInput | usersWhereUniqueInput[]
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    update?: usersUpdateWithWhereUniqueWithoutComments_likedInput | usersUpdateWithWhereUniqueWithoutComments_likedInput[]
    updateMany?: usersUpdateManyWithWhereWithoutComments_likedInput | usersUpdateManyWithWhereWithoutComments_likedInput[]
    deleteMany?: usersScalarWhereInput | usersScalarWhereInput[]
  }

  export type commentsUncheckedUpdateManyWithoutParent_comentNestedInput = {
    create?: XOR<commentsCreateWithoutParent_comentInput, commentsUncheckedCreateWithoutParent_comentInput> | commentsCreateWithoutParent_comentInput[] | commentsUncheckedCreateWithoutParent_comentInput[]
    connectOrCreate?: commentsCreateOrConnectWithoutParent_comentInput | commentsCreateOrConnectWithoutParent_comentInput[]
    upsert?: commentsUpsertWithWhereUniqueWithoutParent_comentInput | commentsUpsertWithWhereUniqueWithoutParent_comentInput[]
    createMany?: commentsCreateManyParent_comentInputEnvelope
    set?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    disconnect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    delete?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    connect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    update?: commentsUpdateWithWhereUniqueWithoutParent_comentInput | commentsUpdateWithWhereUniqueWithoutParent_comentInput[]
    updateMany?: commentsUpdateManyWithWhereWithoutParent_comentInput | commentsUpdateManyWithWhereWithoutParent_comentInput[]
    deleteMany?: commentsScalarWhereInput | commentsScalarWhereInput[]
  }

  export type postsCreateNestedOneWithoutMediasInput = {
    create?: XOR<postsCreateWithoutMediasInput, postsUncheckedCreateWithoutMediasInput>
    connectOrCreate?: postsCreateOrConnectWithoutMediasInput
    connect?: postsWhereUniqueInput
  }

  export type Enumfile_type_enumFieldUpdateOperationsInput = {
    set?: $Enums.file_type_enum
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type postsUpdateOneWithoutMediasNestedInput = {
    create?: XOR<postsCreateWithoutMediasInput, postsUncheckedCreateWithoutMediasInput>
    connectOrCreate?: postsCreateOrConnectWithoutMediasInput
    upsert?: postsUpsertWithoutMediasInput
    disconnect?: postsWhereInput | boolean
    delete?: postsWhereInput | boolean
    connect?: postsWhereUniqueInput
    update?: XOR<XOR<postsUpdateToOneWithWhereWithoutMediasInput, postsUpdateWithoutMediasInput>, postsUncheckedUpdateWithoutMediasInput>
  }

  export type messagesCreateNestedOneWithoutAttachmentsInput = {
    create?: XOR<messagesCreateWithoutAttachmentsInput, messagesUncheckedCreateWithoutAttachmentsInput>
    connectOrCreate?: messagesCreateOrConnectWithoutAttachmentsInput
    connect?: messagesWhereUniqueInput
  }

  export type NullableEnumfile_type_enumFieldUpdateOperationsInput = {
    set?: $Enums.file_type_enum | null
  }

  export type messagesUpdateOneRequiredWithoutAttachmentsNestedInput = {
    create?: XOR<messagesCreateWithoutAttachmentsInput, messagesUncheckedCreateWithoutAttachmentsInput>
    connectOrCreate?: messagesCreateOrConnectWithoutAttachmentsInput
    upsert?: messagesUpsertWithoutAttachmentsInput
    connect?: messagesWhereUniqueInput
    update?: XOR<XOR<messagesUpdateToOneWithWhereWithoutAttachmentsInput, messagesUpdateWithoutAttachmentsInput>, messagesUncheckedUpdateWithoutAttachmentsInput>
  }

  export type messagesCreateNestedManyWithoutConversationsInput = {
    create?: XOR<messagesCreateWithoutConversationsInput, messagesUncheckedCreateWithoutConversationsInput> | messagesCreateWithoutConversationsInput[] | messagesUncheckedCreateWithoutConversationsInput[]
    connectOrCreate?: messagesCreateOrConnectWithoutConversationsInput | messagesCreateOrConnectWithoutConversationsInput[]
    createMany?: messagesCreateManyConversationsInputEnvelope
    connect?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
  }

  export type usersCreateNestedManyWithoutConversationsInput = {
    create?: XOR<usersCreateWithoutConversationsInput, usersUncheckedCreateWithoutConversationsInput> | usersCreateWithoutConversationsInput[] | usersUncheckedCreateWithoutConversationsInput[]
    connectOrCreate?: usersCreateOrConnectWithoutConversationsInput | usersCreateOrConnectWithoutConversationsInput[]
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
  }

  export type messagesUncheckedCreateNestedManyWithoutConversationsInput = {
    create?: XOR<messagesCreateWithoutConversationsInput, messagesUncheckedCreateWithoutConversationsInput> | messagesCreateWithoutConversationsInput[] | messagesUncheckedCreateWithoutConversationsInput[]
    connectOrCreate?: messagesCreateOrConnectWithoutConversationsInput | messagesCreateOrConnectWithoutConversationsInput[]
    createMany?: messagesCreateManyConversationsInputEnvelope
    connect?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
  }

  export type usersUncheckedCreateNestedManyWithoutConversationsInput = {
    create?: XOR<usersCreateWithoutConversationsInput, usersUncheckedCreateWithoutConversationsInput> | usersCreateWithoutConversationsInput[] | usersUncheckedCreateWithoutConversationsInput[]
    connectOrCreate?: usersCreateOrConnectWithoutConversationsInput | usersCreateOrConnectWithoutConversationsInput[]
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
  }

  export type NullableEnumconversation_type_enumFieldUpdateOperationsInput = {
    set?: $Enums.conversation_type_enum | null
  }

  export type messagesUpdateManyWithoutConversationsNestedInput = {
    create?: XOR<messagesCreateWithoutConversationsInput, messagesUncheckedCreateWithoutConversationsInput> | messagesCreateWithoutConversationsInput[] | messagesUncheckedCreateWithoutConversationsInput[]
    connectOrCreate?: messagesCreateOrConnectWithoutConversationsInput | messagesCreateOrConnectWithoutConversationsInput[]
    upsert?: messagesUpsertWithWhereUniqueWithoutConversationsInput | messagesUpsertWithWhereUniqueWithoutConversationsInput[]
    createMany?: messagesCreateManyConversationsInputEnvelope
    set?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    disconnect?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    delete?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    connect?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    update?: messagesUpdateWithWhereUniqueWithoutConversationsInput | messagesUpdateWithWhereUniqueWithoutConversationsInput[]
    updateMany?: messagesUpdateManyWithWhereWithoutConversationsInput | messagesUpdateManyWithWhereWithoutConversationsInput[]
    deleteMany?: messagesScalarWhereInput | messagesScalarWhereInput[]
  }

  export type usersUpdateManyWithoutConversationsNestedInput = {
    create?: XOR<usersCreateWithoutConversationsInput, usersUncheckedCreateWithoutConversationsInput> | usersCreateWithoutConversationsInput[] | usersUncheckedCreateWithoutConversationsInput[]
    connectOrCreate?: usersCreateOrConnectWithoutConversationsInput | usersCreateOrConnectWithoutConversationsInput[]
    upsert?: usersUpsertWithWhereUniqueWithoutConversationsInput | usersUpsertWithWhereUniqueWithoutConversationsInput[]
    set?: usersWhereUniqueInput | usersWhereUniqueInput[]
    disconnect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    delete?: usersWhereUniqueInput | usersWhereUniqueInput[]
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    update?: usersUpdateWithWhereUniqueWithoutConversationsInput | usersUpdateWithWhereUniqueWithoutConversationsInput[]
    updateMany?: usersUpdateManyWithWhereWithoutConversationsInput | usersUpdateManyWithWhereWithoutConversationsInput[]
    deleteMany?: usersScalarWhereInput | usersScalarWhereInput[]
  }

  export type messagesUncheckedUpdateManyWithoutConversationsNestedInput = {
    create?: XOR<messagesCreateWithoutConversationsInput, messagesUncheckedCreateWithoutConversationsInput> | messagesCreateWithoutConversationsInput[] | messagesUncheckedCreateWithoutConversationsInput[]
    connectOrCreate?: messagesCreateOrConnectWithoutConversationsInput | messagesCreateOrConnectWithoutConversationsInput[]
    upsert?: messagesUpsertWithWhereUniqueWithoutConversationsInput | messagesUpsertWithWhereUniqueWithoutConversationsInput[]
    createMany?: messagesCreateManyConversationsInputEnvelope
    set?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    disconnect?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    delete?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    connect?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    update?: messagesUpdateWithWhereUniqueWithoutConversationsInput | messagesUpdateWithWhereUniqueWithoutConversationsInput[]
    updateMany?: messagesUpdateManyWithWhereWithoutConversationsInput | messagesUpdateManyWithWhereWithoutConversationsInput[]
    deleteMany?: messagesScalarWhereInput | messagesScalarWhereInput[]
  }

  export type usersUncheckedUpdateManyWithoutConversationsNestedInput = {
    create?: XOR<usersCreateWithoutConversationsInput, usersUncheckedCreateWithoutConversationsInput> | usersCreateWithoutConversationsInput[] | usersUncheckedCreateWithoutConversationsInput[]
    connectOrCreate?: usersCreateOrConnectWithoutConversationsInput | usersCreateOrConnectWithoutConversationsInput[]
    upsert?: usersUpsertWithWhereUniqueWithoutConversationsInput | usersUpsertWithWhereUniqueWithoutConversationsInput[]
    set?: usersWhereUniqueInput | usersWhereUniqueInput[]
    disconnect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    delete?: usersWhereUniqueInput | usersWhereUniqueInput[]
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    update?: usersUpdateWithWhereUniqueWithoutConversationsInput | usersUpdateWithWhereUniqueWithoutConversationsInput[]
    updateMany?: usersUpdateManyWithWhereWithoutConversationsInput | usersUpdateManyWithWhereWithoutConversationsInput[]
    deleteMany?: usersScalarWhereInput | usersScalarWhereInput[]
  }

  export type attachmentsCreateNestedManyWithoutMessagesInput = {
    create?: XOR<attachmentsCreateWithoutMessagesInput, attachmentsUncheckedCreateWithoutMessagesInput> | attachmentsCreateWithoutMessagesInput[] | attachmentsUncheckedCreateWithoutMessagesInput[]
    connectOrCreate?: attachmentsCreateOrConnectWithoutMessagesInput | attachmentsCreateOrConnectWithoutMessagesInput[]
    createMany?: attachmentsCreateManyMessagesInputEnvelope
    connect?: attachmentsWhereUniqueInput | attachmentsWhereUniqueInput[]
  }

  export type conversationsCreateNestedOneWithoutMessagesInput = {
    create?: XOR<conversationsCreateWithoutMessagesInput, conversationsUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: conversationsCreateOrConnectWithoutMessagesInput
    connect?: conversationsWhereUniqueInput
  }

  export type usersCreateNestedManyWithoutMessagesInput = {
    create?: XOR<usersCreateWithoutMessagesInput, usersUncheckedCreateWithoutMessagesInput> | usersCreateWithoutMessagesInput[] | usersUncheckedCreateWithoutMessagesInput[]
    connectOrCreate?: usersCreateOrConnectWithoutMessagesInput | usersCreateOrConnectWithoutMessagesInput[]
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
  }

  export type attachmentsUncheckedCreateNestedManyWithoutMessagesInput = {
    create?: XOR<attachmentsCreateWithoutMessagesInput, attachmentsUncheckedCreateWithoutMessagesInput> | attachmentsCreateWithoutMessagesInput[] | attachmentsUncheckedCreateWithoutMessagesInput[]
    connectOrCreate?: attachmentsCreateOrConnectWithoutMessagesInput | attachmentsCreateOrConnectWithoutMessagesInput[]
    createMany?: attachmentsCreateManyMessagesInputEnvelope
    connect?: attachmentsWhereUniqueInput | attachmentsWhereUniqueInput[]
  }

  export type usersUncheckedCreateNestedManyWithoutMessagesInput = {
    create?: XOR<usersCreateWithoutMessagesInput, usersUncheckedCreateWithoutMessagesInput> | usersCreateWithoutMessagesInput[] | usersUncheckedCreateWithoutMessagesInput[]
    connectOrCreate?: usersCreateOrConnectWithoutMessagesInput | usersCreateOrConnectWithoutMessagesInput[]
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
  }

  export type NullableEnummessage_status_enumFieldUpdateOperationsInput = {
    set?: $Enums.message_status_enum | null
  }

  export type attachmentsUpdateManyWithoutMessagesNestedInput = {
    create?: XOR<attachmentsCreateWithoutMessagesInput, attachmentsUncheckedCreateWithoutMessagesInput> | attachmentsCreateWithoutMessagesInput[] | attachmentsUncheckedCreateWithoutMessagesInput[]
    connectOrCreate?: attachmentsCreateOrConnectWithoutMessagesInput | attachmentsCreateOrConnectWithoutMessagesInput[]
    upsert?: attachmentsUpsertWithWhereUniqueWithoutMessagesInput | attachmentsUpsertWithWhereUniqueWithoutMessagesInput[]
    createMany?: attachmentsCreateManyMessagesInputEnvelope
    set?: attachmentsWhereUniqueInput | attachmentsWhereUniqueInput[]
    disconnect?: attachmentsWhereUniqueInput | attachmentsWhereUniqueInput[]
    delete?: attachmentsWhereUniqueInput | attachmentsWhereUniqueInput[]
    connect?: attachmentsWhereUniqueInput | attachmentsWhereUniqueInput[]
    update?: attachmentsUpdateWithWhereUniqueWithoutMessagesInput | attachmentsUpdateWithWhereUniqueWithoutMessagesInput[]
    updateMany?: attachmentsUpdateManyWithWhereWithoutMessagesInput | attachmentsUpdateManyWithWhereWithoutMessagesInput[]
    deleteMany?: attachmentsScalarWhereInput | attachmentsScalarWhereInput[]
  }

  export type conversationsUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<conversationsCreateWithoutMessagesInput, conversationsUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: conversationsCreateOrConnectWithoutMessagesInput
    upsert?: conversationsUpsertWithoutMessagesInput
    connect?: conversationsWhereUniqueInput
    update?: XOR<XOR<conversationsUpdateToOneWithWhereWithoutMessagesInput, conversationsUpdateWithoutMessagesInput>, conversationsUncheckedUpdateWithoutMessagesInput>
  }

  export type usersUpdateManyWithoutMessagesNestedInput = {
    create?: XOR<usersCreateWithoutMessagesInput, usersUncheckedCreateWithoutMessagesInput> | usersCreateWithoutMessagesInput[] | usersUncheckedCreateWithoutMessagesInput[]
    connectOrCreate?: usersCreateOrConnectWithoutMessagesInput | usersCreateOrConnectWithoutMessagesInput[]
    upsert?: usersUpsertWithWhereUniqueWithoutMessagesInput | usersUpsertWithWhereUniqueWithoutMessagesInput[]
    set?: usersWhereUniqueInput | usersWhereUniqueInput[]
    disconnect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    delete?: usersWhereUniqueInput | usersWhereUniqueInput[]
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    update?: usersUpdateWithWhereUniqueWithoutMessagesInput | usersUpdateWithWhereUniqueWithoutMessagesInput[]
    updateMany?: usersUpdateManyWithWhereWithoutMessagesInput | usersUpdateManyWithWhereWithoutMessagesInput[]
    deleteMany?: usersScalarWhereInput | usersScalarWhereInput[]
  }

  export type attachmentsUncheckedUpdateManyWithoutMessagesNestedInput = {
    create?: XOR<attachmentsCreateWithoutMessagesInput, attachmentsUncheckedCreateWithoutMessagesInput> | attachmentsCreateWithoutMessagesInput[] | attachmentsUncheckedCreateWithoutMessagesInput[]
    connectOrCreate?: attachmentsCreateOrConnectWithoutMessagesInput | attachmentsCreateOrConnectWithoutMessagesInput[]
    upsert?: attachmentsUpsertWithWhereUniqueWithoutMessagesInput | attachmentsUpsertWithWhereUniqueWithoutMessagesInput[]
    createMany?: attachmentsCreateManyMessagesInputEnvelope
    set?: attachmentsWhereUniqueInput | attachmentsWhereUniqueInput[]
    disconnect?: attachmentsWhereUniqueInput | attachmentsWhereUniqueInput[]
    delete?: attachmentsWhereUniqueInput | attachmentsWhereUniqueInput[]
    connect?: attachmentsWhereUniqueInput | attachmentsWhereUniqueInput[]
    update?: attachmentsUpdateWithWhereUniqueWithoutMessagesInput | attachmentsUpdateWithWhereUniqueWithoutMessagesInput[]
    updateMany?: attachmentsUpdateManyWithWhereWithoutMessagesInput | attachmentsUpdateManyWithWhereWithoutMessagesInput[]
    deleteMany?: attachmentsScalarWhereInput | attachmentsScalarWhereInput[]
  }

  export type usersUncheckedUpdateManyWithoutMessagesNestedInput = {
    create?: XOR<usersCreateWithoutMessagesInput, usersUncheckedCreateWithoutMessagesInput> | usersCreateWithoutMessagesInput[] | usersUncheckedCreateWithoutMessagesInput[]
    connectOrCreate?: usersCreateOrConnectWithoutMessagesInput | usersCreateOrConnectWithoutMessagesInput[]
    upsert?: usersUpsertWithWhereUniqueWithoutMessagesInput | usersUpsertWithWhereUniqueWithoutMessagesInput[]
    set?: usersWhereUniqueInput | usersWhereUniqueInput[]
    disconnect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    delete?: usersWhereUniqueInput | usersWhereUniqueInput[]
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    update?: usersUpdateWithWhereUniqueWithoutMessagesInput | usersUpdateWithWhereUniqueWithoutMessagesInput[]
    updateMany?: usersUpdateManyWithWhereWithoutMessagesInput | usersUpdateManyWithWhereWithoutMessagesInput[]
    deleteMany?: usersScalarWhereInput | usersScalarWhereInput[]
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumgender_enumNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.gender_enum | Enumgender_enumFieldRefInput<$PrismaModel> | null
    in?: $Enums.gender_enum[] | ListEnumgender_enumFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.gender_enum[] | ListEnumgender_enumFieldRefInput<$PrismaModel> | null
    not?: NestedEnumgender_enumNullableFilter<$PrismaModel> | $Enums.gender_enum | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumaccount_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.account_type | Enumaccount_typeFieldRefInput<$PrismaModel>
    in?: $Enums.account_type[] | ListEnumaccount_typeFieldRefInput<$PrismaModel>
    notIn?: $Enums.account_type[] | ListEnumaccount_typeFieldRefInput<$PrismaModel>
    not?: NestedEnumaccount_typeFilter<$PrismaModel> | $Enums.account_type
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumgender_enumNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.gender_enum | Enumgender_enumFieldRefInput<$PrismaModel> | null
    in?: $Enums.gender_enum[] | ListEnumgender_enumFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.gender_enum[] | ListEnumgender_enumFieldRefInput<$PrismaModel> | null
    not?: NestedEnumgender_enumNullableWithAggregatesFilter<$PrismaModel> | $Enums.gender_enum | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumgender_enumNullableFilter<$PrismaModel>
    _max?: NestedEnumgender_enumNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumaccount_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.account_type | Enumaccount_typeFieldRefInput<$PrismaModel>
    in?: $Enums.account_type[] | ListEnumaccount_typeFieldRefInput<$PrismaModel>
    notIn?: $Enums.account_type[] | ListEnumaccount_typeFieldRefInput<$PrismaModel>
    not?: NestedEnumaccount_typeWithAggregatesFilter<$PrismaModel> | $Enums.account_type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumaccount_typeFilter<$PrismaModel>
    _max?: NestedEnumaccount_typeFilter<$PrismaModel>
  }

  export type NestedUuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type NestedUuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedBigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type NestedBigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumfile_type_enumFilter<$PrismaModel = never> = {
    equals?: $Enums.file_type_enum | Enumfile_type_enumFieldRefInput<$PrismaModel>
    in?: $Enums.file_type_enum[] | ListEnumfile_type_enumFieldRefInput<$PrismaModel>
    notIn?: $Enums.file_type_enum[] | ListEnumfile_type_enumFieldRefInput<$PrismaModel>
    not?: NestedEnumfile_type_enumFilter<$PrismaModel> | $Enums.file_type_enum
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedEnumfile_type_enumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.file_type_enum | Enumfile_type_enumFieldRefInput<$PrismaModel>
    in?: $Enums.file_type_enum[] | ListEnumfile_type_enumFieldRefInput<$PrismaModel>
    notIn?: $Enums.file_type_enum[] | ListEnumfile_type_enumFieldRefInput<$PrismaModel>
    not?: NestedEnumfile_type_enumWithAggregatesFilter<$PrismaModel> | $Enums.file_type_enum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumfile_type_enumFilter<$PrismaModel>
    _max?: NestedEnumfile_type_enumFilter<$PrismaModel>
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type NestedEnumfile_type_enumNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.file_type_enum | Enumfile_type_enumFieldRefInput<$PrismaModel> | null
    in?: $Enums.file_type_enum[] | ListEnumfile_type_enumFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.file_type_enum[] | ListEnumfile_type_enumFieldRefInput<$PrismaModel> | null
    not?: NestedEnumfile_type_enumNullableFilter<$PrismaModel> | $Enums.file_type_enum | null
  }

  export type NestedEnumfile_type_enumNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.file_type_enum | Enumfile_type_enumFieldRefInput<$PrismaModel> | null
    in?: $Enums.file_type_enum[] | ListEnumfile_type_enumFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.file_type_enum[] | ListEnumfile_type_enumFieldRefInput<$PrismaModel> | null
    not?: NestedEnumfile_type_enumNullableWithAggregatesFilter<$PrismaModel> | $Enums.file_type_enum | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumfile_type_enumNullableFilter<$PrismaModel>
    _max?: NestedEnumfile_type_enumNullableFilter<$PrismaModel>
  }

  export type NestedEnumconversation_type_enumNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.conversation_type_enum | Enumconversation_type_enumFieldRefInput<$PrismaModel> | null
    in?: $Enums.conversation_type_enum[] | ListEnumconversation_type_enumFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.conversation_type_enum[] | ListEnumconversation_type_enumFieldRefInput<$PrismaModel> | null
    not?: NestedEnumconversation_type_enumNullableFilter<$PrismaModel> | $Enums.conversation_type_enum | null
  }

  export type NestedEnumconversation_type_enumNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.conversation_type_enum | Enumconversation_type_enumFieldRefInput<$PrismaModel> | null
    in?: $Enums.conversation_type_enum[] | ListEnumconversation_type_enumFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.conversation_type_enum[] | ListEnumconversation_type_enumFieldRefInput<$PrismaModel> | null
    not?: NestedEnumconversation_type_enumNullableWithAggregatesFilter<$PrismaModel> | $Enums.conversation_type_enum | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumconversation_type_enumNullableFilter<$PrismaModel>
    _max?: NestedEnumconversation_type_enumNullableFilter<$PrismaModel>
  }

  export type NestedEnummessage_status_enumNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.message_status_enum | Enummessage_status_enumFieldRefInput<$PrismaModel> | null
    in?: $Enums.message_status_enum[] | ListEnummessage_status_enumFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.message_status_enum[] | ListEnummessage_status_enumFieldRefInput<$PrismaModel> | null
    not?: NestedEnummessage_status_enumNullableFilter<$PrismaModel> | $Enums.message_status_enum | null
  }

  export type NestedEnummessage_status_enumNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.message_status_enum | Enummessage_status_enumFieldRefInput<$PrismaModel> | null
    in?: $Enums.message_status_enum[] | ListEnummessage_status_enumFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.message_status_enum[] | ListEnummessage_status_enumFieldRefInput<$PrismaModel> | null
    not?: NestedEnummessage_status_enumNullableWithAggregatesFilter<$PrismaModel> | $Enums.message_status_enum | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnummessage_status_enumNullableFilter<$PrismaModel>
    _max?: NestedEnummessage_status_enumNullableFilter<$PrismaModel>
  }

  export type usersCreateWithoutNofiticationsInput = {
    user_id?: string
    bio?: string | null
    email: string
    name: string
    password: string
    gender?: $Enums.gender_enum | null
    created_at?: Date | string | null
    stars?: number
    profile_photo_url?: string | null
    cover_photo_url?: string | null
    user_account_type?: $Enums.account_type
    preferences?: post_categoriesCreateNestedManyWithoutInterested_usersInput
    followers?: usersCreateNestedManyWithoutFollowingsInput
    followings?: usersCreateNestedManyWithoutFollowersInput
    user_posts?: postsCreateNestedManyWithoutAuthorInput
    posts_liked?: postsCreateNestedManyWithoutPost_likersInput
    comments_liked?: commentsCreateNestedManyWithoutComment_likersInput
    messages?: messagesCreateNestedManyWithoutUsersInput
    conversations?: conversationsCreateNestedManyWithoutUsersInput
    user_sessions?: sessionsCreateNestedManyWithoutSession_userInput
    users_saved_posts?: users_saved_postsCreateNestedManyWithoutUser_savingInput
    comments?: commentsCreateNestedManyWithoutCommentatorInput
  }

  export type usersUncheckedCreateWithoutNofiticationsInput = {
    user_id?: string
    bio?: string | null
    email: string
    name: string
    password: string
    gender?: $Enums.gender_enum | null
    created_at?: Date | string | null
    stars?: number
    profile_photo_url?: string | null
    cover_photo_url?: string | null
    user_account_type?: $Enums.account_type
    preferences?: post_categoriesUncheckedCreateNestedManyWithoutInterested_usersInput
    followers?: usersUncheckedCreateNestedManyWithoutFollowingsInput
    followings?: usersUncheckedCreateNestedManyWithoutFollowersInput
    user_posts?: postsUncheckedCreateNestedManyWithoutAuthorInput
    posts_liked?: postsUncheckedCreateNestedManyWithoutPost_likersInput
    comments_liked?: commentsUncheckedCreateNestedManyWithoutComment_likersInput
    messages?: messagesUncheckedCreateNestedManyWithoutUsersInput
    conversations?: conversationsUncheckedCreateNestedManyWithoutUsersInput
    user_sessions?: sessionsUncheckedCreateNestedManyWithoutSession_userInput
    users_saved_posts?: users_saved_postsUncheckedCreateNestedManyWithoutUser_savingInput
    comments?: commentsUncheckedCreateNestedManyWithoutCommentatorInput
  }

  export type usersCreateOrConnectWithoutNofiticationsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutNofiticationsInput, usersUncheckedCreateWithoutNofiticationsInput>
  }

  export type usersUpsertWithWhereUniqueWithoutNofiticationsInput = {
    where: usersWhereUniqueInput
    update: XOR<usersUpdateWithoutNofiticationsInput, usersUncheckedUpdateWithoutNofiticationsInput>
    create: XOR<usersCreateWithoutNofiticationsInput, usersUncheckedCreateWithoutNofiticationsInput>
  }

  export type usersUpdateWithWhereUniqueWithoutNofiticationsInput = {
    where: usersWhereUniqueInput
    data: XOR<usersUpdateWithoutNofiticationsInput, usersUncheckedUpdateWithoutNofiticationsInput>
  }

  export type usersUpdateManyWithWhereWithoutNofiticationsInput = {
    where: usersScalarWhereInput
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyWithoutNofiticationsInput>
  }

  export type usersScalarWhereInput = {
    AND?: usersScalarWhereInput | usersScalarWhereInput[]
    OR?: usersScalarWhereInput[]
    NOT?: usersScalarWhereInput | usersScalarWhereInput[]
    user_id?: UuidFilter<"users"> | string
    bio?: StringNullableFilter<"users"> | string | null
    email?: StringFilter<"users"> | string
    name?: StringFilter<"users"> | string
    password?: StringFilter<"users"> | string
    gender?: Enumgender_enumNullableFilter<"users"> | $Enums.gender_enum | null
    created_at?: DateTimeNullableFilter<"users"> | Date | string | null
    stars?: IntFilter<"users"> | number
    profile_photo_url?: StringNullableFilter<"users"> | string | null
    cover_photo_url?: StringNullableFilter<"users"> | string | null
    user_account_type?: Enumaccount_typeFilter<"users"> | $Enums.account_type
  }

  export type post_categoriesCreateWithoutInterested_usersInput = {
    category_id?: string
    category_value: string
    parent_category?: post_categoriesCreateNestedOneWithoutSub_categoriesInput
    sub_categories?: post_categoriesCreateNestedManyWithoutParent_categoryInput
    posts?: postsCreateNestedManyWithoutPost_categoryInput
  }

  export type post_categoriesUncheckedCreateWithoutInterested_usersInput = {
    category_id?: string
    category_value: string
    parent_category_id?: string | null
    sub_categories?: post_categoriesUncheckedCreateNestedManyWithoutParent_categoryInput
    posts?: postsUncheckedCreateNestedManyWithoutPost_categoryInput
  }

  export type post_categoriesCreateOrConnectWithoutInterested_usersInput = {
    where: post_categoriesWhereUniqueInput
    create: XOR<post_categoriesCreateWithoutInterested_usersInput, post_categoriesUncheckedCreateWithoutInterested_usersInput>
  }

  export type usersCreateWithoutFollowingsInput = {
    user_id?: string
    bio?: string | null
    email: string
    name: string
    password: string
    gender?: $Enums.gender_enum | null
    created_at?: Date | string | null
    stars?: number
    profile_photo_url?: string | null
    cover_photo_url?: string | null
    user_account_type?: $Enums.account_type
    preferences?: post_categoriesCreateNestedManyWithoutInterested_usersInput
    followers?: usersCreateNestedManyWithoutFollowingsInput
    user_posts?: postsCreateNestedManyWithoutAuthorInput
    posts_liked?: postsCreateNestedManyWithoutPost_likersInput
    comments_liked?: commentsCreateNestedManyWithoutComment_likersInput
    messages?: messagesCreateNestedManyWithoutUsersInput
    conversations?: conversationsCreateNestedManyWithoutUsersInput
    user_sessions?: sessionsCreateNestedManyWithoutSession_userInput
    nofitications?: nofiticationsCreateNestedManyWithoutUsersInput
    users_saved_posts?: users_saved_postsCreateNestedManyWithoutUser_savingInput
    comments?: commentsCreateNestedManyWithoutCommentatorInput
  }

  export type usersUncheckedCreateWithoutFollowingsInput = {
    user_id?: string
    bio?: string | null
    email: string
    name: string
    password: string
    gender?: $Enums.gender_enum | null
    created_at?: Date | string | null
    stars?: number
    profile_photo_url?: string | null
    cover_photo_url?: string | null
    user_account_type?: $Enums.account_type
    preferences?: post_categoriesUncheckedCreateNestedManyWithoutInterested_usersInput
    followers?: usersUncheckedCreateNestedManyWithoutFollowingsInput
    user_posts?: postsUncheckedCreateNestedManyWithoutAuthorInput
    posts_liked?: postsUncheckedCreateNestedManyWithoutPost_likersInput
    comments_liked?: commentsUncheckedCreateNestedManyWithoutComment_likersInput
    messages?: messagesUncheckedCreateNestedManyWithoutUsersInput
    conversations?: conversationsUncheckedCreateNestedManyWithoutUsersInput
    user_sessions?: sessionsUncheckedCreateNestedManyWithoutSession_userInput
    nofitications?: nofiticationsUncheckedCreateNestedManyWithoutUsersInput
    users_saved_posts?: users_saved_postsUncheckedCreateNestedManyWithoutUser_savingInput
    comments?: commentsUncheckedCreateNestedManyWithoutCommentatorInput
  }

  export type usersCreateOrConnectWithoutFollowingsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutFollowingsInput, usersUncheckedCreateWithoutFollowingsInput>
  }

  export type usersCreateWithoutFollowersInput = {
    user_id?: string
    bio?: string | null
    email: string
    name: string
    password: string
    gender?: $Enums.gender_enum | null
    created_at?: Date | string | null
    stars?: number
    profile_photo_url?: string | null
    cover_photo_url?: string | null
    user_account_type?: $Enums.account_type
    preferences?: post_categoriesCreateNestedManyWithoutInterested_usersInput
    followings?: usersCreateNestedManyWithoutFollowersInput
    user_posts?: postsCreateNestedManyWithoutAuthorInput
    posts_liked?: postsCreateNestedManyWithoutPost_likersInput
    comments_liked?: commentsCreateNestedManyWithoutComment_likersInput
    messages?: messagesCreateNestedManyWithoutUsersInput
    conversations?: conversationsCreateNestedManyWithoutUsersInput
    user_sessions?: sessionsCreateNestedManyWithoutSession_userInput
    nofitications?: nofiticationsCreateNestedManyWithoutUsersInput
    users_saved_posts?: users_saved_postsCreateNestedManyWithoutUser_savingInput
    comments?: commentsCreateNestedManyWithoutCommentatorInput
  }

  export type usersUncheckedCreateWithoutFollowersInput = {
    user_id?: string
    bio?: string | null
    email: string
    name: string
    password: string
    gender?: $Enums.gender_enum | null
    created_at?: Date | string | null
    stars?: number
    profile_photo_url?: string | null
    cover_photo_url?: string | null
    user_account_type?: $Enums.account_type
    preferences?: post_categoriesUncheckedCreateNestedManyWithoutInterested_usersInput
    followings?: usersUncheckedCreateNestedManyWithoutFollowersInput
    user_posts?: postsUncheckedCreateNestedManyWithoutAuthorInput
    posts_liked?: postsUncheckedCreateNestedManyWithoutPost_likersInput
    comments_liked?: commentsUncheckedCreateNestedManyWithoutComment_likersInput
    messages?: messagesUncheckedCreateNestedManyWithoutUsersInput
    conversations?: conversationsUncheckedCreateNestedManyWithoutUsersInput
    user_sessions?: sessionsUncheckedCreateNestedManyWithoutSession_userInput
    nofitications?: nofiticationsUncheckedCreateNestedManyWithoutUsersInput
    users_saved_posts?: users_saved_postsUncheckedCreateNestedManyWithoutUser_savingInput
    comments?: commentsUncheckedCreateNestedManyWithoutCommentatorInput
  }

  export type usersCreateOrConnectWithoutFollowersInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutFollowersInput, usersUncheckedCreateWithoutFollowersInput>
  }

  export type postsCreateWithoutAuthorInput = {
    post_id?: string
    title: string
    description?: string | null
    price?: bigint | number | null
    created_at?: Date | string
    post_category?: post_categoriesCreateNestedOneWithoutPostsInput
    post_likers?: usersCreateNestedManyWithoutPosts_likedInput
    comments?: commentsCreateNestedManyWithoutCommented_postInput
    medias?: mediasCreateNestedManyWithoutMedia_postInput
    users_saved_posts?: users_saved_postsCreateNestedManyWithoutSaved_postInput
  }

  export type postsUncheckedCreateWithoutAuthorInput = {
    post_id?: string
    title: string
    description?: string | null
    price?: bigint | number | null
    created_at?: Date | string
    post_category_id?: string | null
    post_likers?: usersUncheckedCreateNestedManyWithoutPosts_likedInput
    comments?: commentsUncheckedCreateNestedManyWithoutCommented_postInput
    medias?: mediasUncheckedCreateNestedManyWithoutMedia_postInput
    users_saved_posts?: users_saved_postsUncheckedCreateNestedManyWithoutSaved_postInput
  }

  export type postsCreateOrConnectWithoutAuthorInput = {
    where: postsWhereUniqueInput
    create: XOR<postsCreateWithoutAuthorInput, postsUncheckedCreateWithoutAuthorInput>
  }

  export type postsCreateManyAuthorInputEnvelope = {
    data: postsCreateManyAuthorInput | postsCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type postsCreateWithoutPost_likersInput = {
    post_id?: string
    title: string
    description?: string | null
    price?: bigint | number | null
    created_at?: Date | string
    post_category?: post_categoriesCreateNestedOneWithoutPostsInput
    author: usersCreateNestedOneWithoutUser_postsInput
    comments?: commentsCreateNestedManyWithoutCommented_postInput
    medias?: mediasCreateNestedManyWithoutMedia_postInput
    users_saved_posts?: users_saved_postsCreateNestedManyWithoutSaved_postInput
  }

  export type postsUncheckedCreateWithoutPost_likersInput = {
    post_id?: string
    title: string
    description?: string | null
    price?: bigint | number | null
    created_at?: Date | string
    post_category_id?: string | null
    author_id: string
    comments?: commentsUncheckedCreateNestedManyWithoutCommented_postInput
    medias?: mediasUncheckedCreateNestedManyWithoutMedia_postInput
    users_saved_posts?: users_saved_postsUncheckedCreateNestedManyWithoutSaved_postInput
  }

  export type postsCreateOrConnectWithoutPost_likersInput = {
    where: postsWhereUniqueInput
    create: XOR<postsCreateWithoutPost_likersInput, postsUncheckedCreateWithoutPost_likersInput>
  }

  export type commentsCreateWithoutComment_likersInput = {
    comment_id?: string
    body: string
    created_at?: Date | string | null
    commentator?: usersCreateNestedOneWithoutCommentsInput
    commented_post?: postsCreateNestedOneWithoutCommentsInput
    parent_coment?: commentsCreateNestedOneWithoutSub_commentsInput
    sub_comments?: commentsCreateNestedManyWithoutParent_comentInput
  }

  export type commentsUncheckedCreateWithoutComment_likersInput = {
    comment_id?: string
    body: string
    created_at?: Date | string | null
    commentator_id?: string | null
    commented_post_id?: string | null
    parent_comment_id?: string | null
    sub_comments?: commentsUncheckedCreateNestedManyWithoutParent_comentInput
  }

  export type commentsCreateOrConnectWithoutComment_likersInput = {
    where: commentsWhereUniqueInput
    create: XOR<commentsCreateWithoutComment_likersInput, commentsUncheckedCreateWithoutComment_likersInput>
  }

  export type messagesCreateWithoutUsersInput = {
    message_id?: string
    response_id?: string | null
    sender_id: string
    recipient_id: string
    message_status?: $Enums.message_status_enum | null
    content: string
    created_at?: Date | string | null
    attachments?: attachmentsCreateNestedManyWithoutMessagesInput
    conversations: conversationsCreateNestedOneWithoutMessagesInput
  }

  export type messagesUncheckedCreateWithoutUsersInput = {
    message_id?: string
    conversation_id: string
    response_id?: string | null
    sender_id: string
    recipient_id: string
    message_status?: $Enums.message_status_enum | null
    content: string
    created_at?: Date | string | null
    attachments?: attachmentsUncheckedCreateNestedManyWithoutMessagesInput
  }

  export type messagesCreateOrConnectWithoutUsersInput = {
    where: messagesWhereUniqueInput
    create: XOR<messagesCreateWithoutUsersInput, messagesUncheckedCreateWithoutUsersInput>
  }

  export type conversationsCreateWithoutUsersInput = {
    conversation_id?: string
    conversation_type?: $Enums.conversation_type_enum | null
    conversation_name?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    product_id: string
    messages?: messagesCreateNestedManyWithoutConversationsInput
  }

  export type conversationsUncheckedCreateWithoutUsersInput = {
    conversation_id?: string
    conversation_type?: $Enums.conversation_type_enum | null
    conversation_name?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    product_id: string
    messages?: messagesUncheckedCreateNestedManyWithoutConversationsInput
  }

  export type conversationsCreateOrConnectWithoutUsersInput = {
    where: conversationsWhereUniqueInput
    create: XOR<conversationsCreateWithoutUsersInput, conversationsUncheckedCreateWithoutUsersInput>
  }

  export type sessionsCreateWithoutSession_userInput = {
    session_id?: string
    session_token: string
    ip_addr?: string | null
    user_agent?: string | null
  }

  export type sessionsUncheckedCreateWithoutSession_userInput = {
    session_id?: string
    session_token: string
    ip_addr?: string | null
    user_agent?: string | null
  }

  export type sessionsCreateOrConnectWithoutSession_userInput = {
    where: sessionsWhereUniqueInput
    create: XOR<sessionsCreateWithoutSession_userInput, sessionsUncheckedCreateWithoutSession_userInput>
  }

  export type sessionsCreateManySession_userInputEnvelope = {
    data: sessionsCreateManySession_userInput | sessionsCreateManySession_userInput[]
    skipDuplicates?: boolean
  }

  export type nofiticationsCreateWithoutUsersInput = {
    notification_id?: string
    sender_name: string
    receiver_name: string
    content: string
    date?: Date | string
  }

  export type nofiticationsUncheckedCreateWithoutUsersInput = {
    notification_id?: string
    sender_name: string
    receiver_name: string
    content: string
    date?: Date | string
  }

  export type nofiticationsCreateOrConnectWithoutUsersInput = {
    where: nofiticationsWhereUniqueInput
    create: XOR<nofiticationsCreateWithoutUsersInput, nofiticationsUncheckedCreateWithoutUsersInput>
  }

  export type users_saved_postsCreateWithoutUser_savingInput = {
    post_saving_id?: string
    saved_at?: Date | string
    saved_post?: postsCreateNestedOneWithoutUsers_saved_postsInput
  }

  export type users_saved_postsUncheckedCreateWithoutUser_savingInput = {
    post_saving_id?: string
    saved_at?: Date | string
    saved_post_id?: string | null
  }

  export type users_saved_postsCreateOrConnectWithoutUser_savingInput = {
    where: users_saved_postsWhereUniqueInput
    create: XOR<users_saved_postsCreateWithoutUser_savingInput, users_saved_postsUncheckedCreateWithoutUser_savingInput>
  }

  export type users_saved_postsCreateManyUser_savingInputEnvelope = {
    data: users_saved_postsCreateManyUser_savingInput | users_saved_postsCreateManyUser_savingInput[]
    skipDuplicates?: boolean
  }

  export type commentsCreateWithoutCommentatorInput = {
    comment_id?: string
    body: string
    created_at?: Date | string | null
    comment_likers?: usersCreateNestedManyWithoutComments_likedInput
    commented_post?: postsCreateNestedOneWithoutCommentsInput
    parent_coment?: commentsCreateNestedOneWithoutSub_commentsInput
    sub_comments?: commentsCreateNestedManyWithoutParent_comentInput
  }

  export type commentsUncheckedCreateWithoutCommentatorInput = {
    comment_id?: string
    body: string
    created_at?: Date | string | null
    commented_post_id?: string | null
    parent_comment_id?: string | null
    comment_likers?: usersUncheckedCreateNestedManyWithoutComments_likedInput
    sub_comments?: commentsUncheckedCreateNestedManyWithoutParent_comentInput
  }

  export type commentsCreateOrConnectWithoutCommentatorInput = {
    where: commentsWhereUniqueInput
    create: XOR<commentsCreateWithoutCommentatorInput, commentsUncheckedCreateWithoutCommentatorInput>
  }

  export type commentsCreateManyCommentatorInputEnvelope = {
    data: commentsCreateManyCommentatorInput | commentsCreateManyCommentatorInput[]
    skipDuplicates?: boolean
  }

  export type post_categoriesUpsertWithWhereUniqueWithoutInterested_usersInput = {
    where: post_categoriesWhereUniqueInput
    update: XOR<post_categoriesUpdateWithoutInterested_usersInput, post_categoriesUncheckedUpdateWithoutInterested_usersInput>
    create: XOR<post_categoriesCreateWithoutInterested_usersInput, post_categoriesUncheckedCreateWithoutInterested_usersInput>
  }

  export type post_categoriesUpdateWithWhereUniqueWithoutInterested_usersInput = {
    where: post_categoriesWhereUniqueInput
    data: XOR<post_categoriesUpdateWithoutInterested_usersInput, post_categoriesUncheckedUpdateWithoutInterested_usersInput>
  }

  export type post_categoriesUpdateManyWithWhereWithoutInterested_usersInput = {
    where: post_categoriesScalarWhereInput
    data: XOR<post_categoriesUpdateManyMutationInput, post_categoriesUncheckedUpdateManyWithoutInterested_usersInput>
  }

  export type post_categoriesScalarWhereInput = {
    AND?: post_categoriesScalarWhereInput | post_categoriesScalarWhereInput[]
    OR?: post_categoriesScalarWhereInput[]
    NOT?: post_categoriesScalarWhereInput | post_categoriesScalarWhereInput[]
    category_id?: UuidFilter<"post_categories"> | string
    category_value?: StringFilter<"post_categories"> | string
    parent_category_id?: UuidNullableFilter<"post_categories"> | string | null
  }

  export type usersUpsertWithWhereUniqueWithoutFollowingsInput = {
    where: usersWhereUniqueInput
    update: XOR<usersUpdateWithoutFollowingsInput, usersUncheckedUpdateWithoutFollowingsInput>
    create: XOR<usersCreateWithoutFollowingsInput, usersUncheckedCreateWithoutFollowingsInput>
  }

  export type usersUpdateWithWhereUniqueWithoutFollowingsInput = {
    where: usersWhereUniqueInput
    data: XOR<usersUpdateWithoutFollowingsInput, usersUncheckedUpdateWithoutFollowingsInput>
  }

  export type usersUpdateManyWithWhereWithoutFollowingsInput = {
    where: usersScalarWhereInput
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyWithoutFollowingsInput>
  }

  export type usersUpsertWithWhereUniqueWithoutFollowersInput = {
    where: usersWhereUniqueInput
    update: XOR<usersUpdateWithoutFollowersInput, usersUncheckedUpdateWithoutFollowersInput>
    create: XOR<usersCreateWithoutFollowersInput, usersUncheckedCreateWithoutFollowersInput>
  }

  export type usersUpdateWithWhereUniqueWithoutFollowersInput = {
    where: usersWhereUniqueInput
    data: XOR<usersUpdateWithoutFollowersInput, usersUncheckedUpdateWithoutFollowersInput>
  }

  export type usersUpdateManyWithWhereWithoutFollowersInput = {
    where: usersScalarWhereInput
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyWithoutFollowersInput>
  }

  export type postsUpsertWithWhereUniqueWithoutAuthorInput = {
    where: postsWhereUniqueInput
    update: XOR<postsUpdateWithoutAuthorInput, postsUncheckedUpdateWithoutAuthorInput>
    create: XOR<postsCreateWithoutAuthorInput, postsUncheckedCreateWithoutAuthorInput>
  }

  export type postsUpdateWithWhereUniqueWithoutAuthorInput = {
    where: postsWhereUniqueInput
    data: XOR<postsUpdateWithoutAuthorInput, postsUncheckedUpdateWithoutAuthorInput>
  }

  export type postsUpdateManyWithWhereWithoutAuthorInput = {
    where: postsScalarWhereInput
    data: XOR<postsUpdateManyMutationInput, postsUncheckedUpdateManyWithoutAuthorInput>
  }

  export type postsScalarWhereInput = {
    AND?: postsScalarWhereInput | postsScalarWhereInput[]
    OR?: postsScalarWhereInput[]
    NOT?: postsScalarWhereInput | postsScalarWhereInput[]
    post_id?: UuidFilter<"posts"> | string
    title?: StringFilter<"posts"> | string
    description?: StringNullableFilter<"posts"> | string | null
    price?: BigIntNullableFilter<"posts"> | bigint | number | null
    created_at?: DateTimeFilter<"posts"> | Date | string
    post_category_id?: UuidNullableFilter<"posts"> | string | null
    author_id?: UuidFilter<"posts"> | string
  }

  export type postsUpsertWithWhereUniqueWithoutPost_likersInput = {
    where: postsWhereUniqueInput
    update: XOR<postsUpdateWithoutPost_likersInput, postsUncheckedUpdateWithoutPost_likersInput>
    create: XOR<postsCreateWithoutPost_likersInput, postsUncheckedCreateWithoutPost_likersInput>
  }

  export type postsUpdateWithWhereUniqueWithoutPost_likersInput = {
    where: postsWhereUniqueInput
    data: XOR<postsUpdateWithoutPost_likersInput, postsUncheckedUpdateWithoutPost_likersInput>
  }

  export type postsUpdateManyWithWhereWithoutPost_likersInput = {
    where: postsScalarWhereInput
    data: XOR<postsUpdateManyMutationInput, postsUncheckedUpdateManyWithoutPost_likersInput>
  }

  export type commentsUpsertWithWhereUniqueWithoutComment_likersInput = {
    where: commentsWhereUniqueInput
    update: XOR<commentsUpdateWithoutComment_likersInput, commentsUncheckedUpdateWithoutComment_likersInput>
    create: XOR<commentsCreateWithoutComment_likersInput, commentsUncheckedCreateWithoutComment_likersInput>
  }

  export type commentsUpdateWithWhereUniqueWithoutComment_likersInput = {
    where: commentsWhereUniqueInput
    data: XOR<commentsUpdateWithoutComment_likersInput, commentsUncheckedUpdateWithoutComment_likersInput>
  }

  export type commentsUpdateManyWithWhereWithoutComment_likersInput = {
    where: commentsScalarWhereInput
    data: XOR<commentsUpdateManyMutationInput, commentsUncheckedUpdateManyWithoutComment_likersInput>
  }

  export type commentsScalarWhereInput = {
    AND?: commentsScalarWhereInput | commentsScalarWhereInput[]
    OR?: commentsScalarWhereInput[]
    NOT?: commentsScalarWhereInput | commentsScalarWhereInput[]
    comment_id?: UuidFilter<"comments"> | string
    body?: StringFilter<"comments"> | string
    created_at?: DateTimeNullableFilter<"comments"> | Date | string | null
    commentator_id?: UuidNullableFilter<"comments"> | string | null
    commented_post_id?: UuidNullableFilter<"comments"> | string | null
    parent_comment_id?: UuidNullableFilter<"comments"> | string | null
  }

  export type messagesUpsertWithWhereUniqueWithoutUsersInput = {
    where: messagesWhereUniqueInput
    update: XOR<messagesUpdateWithoutUsersInput, messagesUncheckedUpdateWithoutUsersInput>
    create: XOR<messagesCreateWithoutUsersInput, messagesUncheckedCreateWithoutUsersInput>
  }

  export type messagesUpdateWithWhereUniqueWithoutUsersInput = {
    where: messagesWhereUniqueInput
    data: XOR<messagesUpdateWithoutUsersInput, messagesUncheckedUpdateWithoutUsersInput>
  }

  export type messagesUpdateManyWithWhereWithoutUsersInput = {
    where: messagesScalarWhereInput
    data: XOR<messagesUpdateManyMutationInput, messagesUncheckedUpdateManyWithoutUsersInput>
  }

  export type messagesScalarWhereInput = {
    AND?: messagesScalarWhereInput | messagesScalarWhereInput[]
    OR?: messagesScalarWhereInput[]
    NOT?: messagesScalarWhereInput | messagesScalarWhereInput[]
    message_id?: UuidFilter<"messages"> | string
    conversation_id?: UuidFilter<"messages"> | string
    response_id?: UuidNullableFilter<"messages"> | string | null
    sender_id?: UuidFilter<"messages"> | string
    recipient_id?: UuidFilter<"messages"> | string
    message_status?: Enummessage_status_enumNullableFilter<"messages"> | $Enums.message_status_enum | null
    content?: StringFilter<"messages"> | string
    created_at?: DateTimeNullableFilter<"messages"> | Date | string | null
  }

  export type conversationsUpsertWithWhereUniqueWithoutUsersInput = {
    where: conversationsWhereUniqueInput
    update: XOR<conversationsUpdateWithoutUsersInput, conversationsUncheckedUpdateWithoutUsersInput>
    create: XOR<conversationsCreateWithoutUsersInput, conversationsUncheckedCreateWithoutUsersInput>
  }

  export type conversationsUpdateWithWhereUniqueWithoutUsersInput = {
    where: conversationsWhereUniqueInput
    data: XOR<conversationsUpdateWithoutUsersInput, conversationsUncheckedUpdateWithoutUsersInput>
  }

  export type conversationsUpdateManyWithWhereWithoutUsersInput = {
    where: conversationsScalarWhereInput
    data: XOR<conversationsUpdateManyMutationInput, conversationsUncheckedUpdateManyWithoutUsersInput>
  }

  export type conversationsScalarWhereInput = {
    AND?: conversationsScalarWhereInput | conversationsScalarWhereInput[]
    OR?: conversationsScalarWhereInput[]
    NOT?: conversationsScalarWhereInput | conversationsScalarWhereInput[]
    conversation_id?: UuidFilter<"conversations"> | string
    conversation_type?: Enumconversation_type_enumNullableFilter<"conversations"> | $Enums.conversation_type_enum | null
    conversation_name?: StringNullableFilter<"conversations"> | string | null
    created_at?: DateTimeNullableFilter<"conversations"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"conversations"> | Date | string | null
    product_id?: UuidFilter<"conversations"> | string
  }

  export type sessionsUpsertWithWhereUniqueWithoutSession_userInput = {
    where: sessionsWhereUniqueInput
    update: XOR<sessionsUpdateWithoutSession_userInput, sessionsUncheckedUpdateWithoutSession_userInput>
    create: XOR<sessionsCreateWithoutSession_userInput, sessionsUncheckedCreateWithoutSession_userInput>
  }

  export type sessionsUpdateWithWhereUniqueWithoutSession_userInput = {
    where: sessionsWhereUniqueInput
    data: XOR<sessionsUpdateWithoutSession_userInput, sessionsUncheckedUpdateWithoutSession_userInput>
  }

  export type sessionsUpdateManyWithWhereWithoutSession_userInput = {
    where: sessionsScalarWhereInput
    data: XOR<sessionsUpdateManyMutationInput, sessionsUncheckedUpdateManyWithoutSession_userInput>
  }

  export type sessionsScalarWhereInput = {
    AND?: sessionsScalarWhereInput | sessionsScalarWhereInput[]
    OR?: sessionsScalarWhereInput[]
    NOT?: sessionsScalarWhereInput | sessionsScalarWhereInput[]
    session_id?: UuidFilter<"sessions"> | string
    session_token?: StringFilter<"sessions"> | string
    ip_addr?: StringNullableFilter<"sessions"> | string | null
    user_agent?: StringNullableFilter<"sessions"> | string | null
    session_user_id?: UuidNullableFilter<"sessions"> | string | null
  }

  export type nofiticationsUpsertWithWhereUniqueWithoutUsersInput = {
    where: nofiticationsWhereUniqueInput
    update: XOR<nofiticationsUpdateWithoutUsersInput, nofiticationsUncheckedUpdateWithoutUsersInput>
    create: XOR<nofiticationsCreateWithoutUsersInput, nofiticationsUncheckedCreateWithoutUsersInput>
  }

  export type nofiticationsUpdateWithWhereUniqueWithoutUsersInput = {
    where: nofiticationsWhereUniqueInput
    data: XOR<nofiticationsUpdateWithoutUsersInput, nofiticationsUncheckedUpdateWithoutUsersInput>
  }

  export type nofiticationsUpdateManyWithWhereWithoutUsersInput = {
    where: nofiticationsScalarWhereInput
    data: XOR<nofiticationsUpdateManyMutationInput, nofiticationsUncheckedUpdateManyWithoutUsersInput>
  }

  export type nofiticationsScalarWhereInput = {
    AND?: nofiticationsScalarWhereInput | nofiticationsScalarWhereInput[]
    OR?: nofiticationsScalarWhereInput[]
    NOT?: nofiticationsScalarWhereInput | nofiticationsScalarWhereInput[]
    notification_id?: UuidFilter<"nofitications"> | string
    sender_name?: StringFilter<"nofitications"> | string
    receiver_name?: StringFilter<"nofitications"> | string
    content?: StringFilter<"nofitications"> | string
    date?: DateTimeFilter<"nofitications"> | Date | string
  }

  export type users_saved_postsUpsertWithWhereUniqueWithoutUser_savingInput = {
    where: users_saved_postsWhereUniqueInput
    update: XOR<users_saved_postsUpdateWithoutUser_savingInput, users_saved_postsUncheckedUpdateWithoutUser_savingInput>
    create: XOR<users_saved_postsCreateWithoutUser_savingInput, users_saved_postsUncheckedCreateWithoutUser_savingInput>
  }

  export type users_saved_postsUpdateWithWhereUniqueWithoutUser_savingInput = {
    where: users_saved_postsWhereUniqueInput
    data: XOR<users_saved_postsUpdateWithoutUser_savingInput, users_saved_postsUncheckedUpdateWithoutUser_savingInput>
  }

  export type users_saved_postsUpdateManyWithWhereWithoutUser_savingInput = {
    where: users_saved_postsScalarWhereInput
    data: XOR<users_saved_postsUpdateManyMutationInput, users_saved_postsUncheckedUpdateManyWithoutUser_savingInput>
  }

  export type users_saved_postsScalarWhereInput = {
    AND?: users_saved_postsScalarWhereInput | users_saved_postsScalarWhereInput[]
    OR?: users_saved_postsScalarWhereInput[]
    NOT?: users_saved_postsScalarWhereInput | users_saved_postsScalarWhereInput[]
    post_saving_id?: UuidFilter<"users_saved_posts"> | string
    saved_at?: DateTimeFilter<"users_saved_posts"> | Date | string
    user_saving_id?: UuidNullableFilter<"users_saved_posts"> | string | null
    saved_post_id?: UuidNullableFilter<"users_saved_posts"> | string | null
  }

  export type commentsUpsertWithWhereUniqueWithoutCommentatorInput = {
    where: commentsWhereUniqueInput
    update: XOR<commentsUpdateWithoutCommentatorInput, commentsUncheckedUpdateWithoutCommentatorInput>
    create: XOR<commentsCreateWithoutCommentatorInput, commentsUncheckedCreateWithoutCommentatorInput>
  }

  export type commentsUpdateWithWhereUniqueWithoutCommentatorInput = {
    where: commentsWhereUniqueInput
    data: XOR<commentsUpdateWithoutCommentatorInput, commentsUncheckedUpdateWithoutCommentatorInput>
  }

  export type commentsUpdateManyWithWhereWithoutCommentatorInput = {
    where: commentsScalarWhereInput
    data: XOR<commentsUpdateManyMutationInput, commentsUncheckedUpdateManyWithoutCommentatorInput>
  }

  export type usersCreateWithoutUser_sessionsInput = {
    user_id?: string
    bio?: string | null
    email: string
    name: string
    password: string
    gender?: $Enums.gender_enum | null
    created_at?: Date | string | null
    stars?: number
    profile_photo_url?: string | null
    cover_photo_url?: string | null
    user_account_type?: $Enums.account_type
    preferences?: post_categoriesCreateNestedManyWithoutInterested_usersInput
    followers?: usersCreateNestedManyWithoutFollowingsInput
    followings?: usersCreateNestedManyWithoutFollowersInput
    user_posts?: postsCreateNestedManyWithoutAuthorInput
    posts_liked?: postsCreateNestedManyWithoutPost_likersInput
    comments_liked?: commentsCreateNestedManyWithoutComment_likersInput
    messages?: messagesCreateNestedManyWithoutUsersInput
    conversations?: conversationsCreateNestedManyWithoutUsersInput
    nofitications?: nofiticationsCreateNestedManyWithoutUsersInput
    users_saved_posts?: users_saved_postsCreateNestedManyWithoutUser_savingInput
    comments?: commentsCreateNestedManyWithoutCommentatorInput
  }

  export type usersUncheckedCreateWithoutUser_sessionsInput = {
    user_id?: string
    bio?: string | null
    email: string
    name: string
    password: string
    gender?: $Enums.gender_enum | null
    created_at?: Date | string | null
    stars?: number
    profile_photo_url?: string | null
    cover_photo_url?: string | null
    user_account_type?: $Enums.account_type
    preferences?: post_categoriesUncheckedCreateNestedManyWithoutInterested_usersInput
    followers?: usersUncheckedCreateNestedManyWithoutFollowingsInput
    followings?: usersUncheckedCreateNestedManyWithoutFollowersInput
    user_posts?: postsUncheckedCreateNestedManyWithoutAuthorInput
    posts_liked?: postsUncheckedCreateNestedManyWithoutPost_likersInput
    comments_liked?: commentsUncheckedCreateNestedManyWithoutComment_likersInput
    messages?: messagesUncheckedCreateNestedManyWithoutUsersInput
    conversations?: conversationsUncheckedCreateNestedManyWithoutUsersInput
    nofitications?: nofiticationsUncheckedCreateNestedManyWithoutUsersInput
    users_saved_posts?: users_saved_postsUncheckedCreateNestedManyWithoutUser_savingInput
    comments?: commentsUncheckedCreateNestedManyWithoutCommentatorInput
  }

  export type usersCreateOrConnectWithoutUser_sessionsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutUser_sessionsInput, usersUncheckedCreateWithoutUser_sessionsInput>
  }

  export type usersUpsertWithoutUser_sessionsInput = {
    update: XOR<usersUpdateWithoutUser_sessionsInput, usersUncheckedUpdateWithoutUser_sessionsInput>
    create: XOR<usersCreateWithoutUser_sessionsInput, usersUncheckedCreateWithoutUser_sessionsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutUser_sessionsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutUser_sessionsInput, usersUncheckedUpdateWithoutUser_sessionsInput>
  }

  export type usersUpdateWithoutUser_sessionsInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    gender?: NullableEnumgender_enumFieldUpdateOperationsInput | $Enums.gender_enum | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stars?: IntFieldUpdateOperationsInput | number
    profile_photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    cover_photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    user_account_type?: Enumaccount_typeFieldUpdateOperationsInput | $Enums.account_type
    preferences?: post_categoriesUpdateManyWithoutInterested_usersNestedInput
    followers?: usersUpdateManyWithoutFollowingsNestedInput
    followings?: usersUpdateManyWithoutFollowersNestedInput
    user_posts?: postsUpdateManyWithoutAuthorNestedInput
    posts_liked?: postsUpdateManyWithoutPost_likersNestedInput
    comments_liked?: commentsUpdateManyWithoutComment_likersNestedInput
    messages?: messagesUpdateManyWithoutUsersNestedInput
    conversations?: conversationsUpdateManyWithoutUsersNestedInput
    nofitications?: nofiticationsUpdateManyWithoutUsersNestedInput
    users_saved_posts?: users_saved_postsUpdateManyWithoutUser_savingNestedInput
    comments?: commentsUpdateManyWithoutCommentatorNestedInput
  }

  export type usersUncheckedUpdateWithoutUser_sessionsInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    gender?: NullableEnumgender_enumFieldUpdateOperationsInput | $Enums.gender_enum | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stars?: IntFieldUpdateOperationsInput | number
    profile_photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    cover_photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    user_account_type?: Enumaccount_typeFieldUpdateOperationsInput | $Enums.account_type
    preferences?: post_categoriesUncheckedUpdateManyWithoutInterested_usersNestedInput
    followers?: usersUncheckedUpdateManyWithoutFollowingsNestedInput
    followings?: usersUncheckedUpdateManyWithoutFollowersNestedInput
    user_posts?: postsUncheckedUpdateManyWithoutAuthorNestedInput
    posts_liked?: postsUncheckedUpdateManyWithoutPost_likersNestedInput
    comments_liked?: commentsUncheckedUpdateManyWithoutComment_likersNestedInput
    messages?: messagesUncheckedUpdateManyWithoutUsersNestedInput
    conversations?: conversationsUncheckedUpdateManyWithoutUsersNestedInput
    nofitications?: nofiticationsUncheckedUpdateManyWithoutUsersNestedInput
    users_saved_posts?: users_saved_postsUncheckedUpdateManyWithoutUser_savingNestedInput
    comments?: commentsUncheckedUpdateManyWithoutCommentatorNestedInput
  }

  export type post_categoriesCreateWithoutSub_categoriesInput = {
    category_id?: string
    category_value: string
    parent_category?: post_categoriesCreateNestedOneWithoutSub_categoriesInput
    posts?: postsCreateNestedManyWithoutPost_categoryInput
    interested_users?: usersCreateNestedManyWithoutPreferencesInput
  }

  export type post_categoriesUncheckedCreateWithoutSub_categoriesInput = {
    category_id?: string
    category_value: string
    parent_category_id?: string | null
    posts?: postsUncheckedCreateNestedManyWithoutPost_categoryInput
    interested_users?: usersUncheckedCreateNestedManyWithoutPreferencesInput
  }

  export type post_categoriesCreateOrConnectWithoutSub_categoriesInput = {
    where: post_categoriesWhereUniqueInput
    create: XOR<post_categoriesCreateWithoutSub_categoriesInput, post_categoriesUncheckedCreateWithoutSub_categoriesInput>
  }

  export type post_categoriesCreateWithoutParent_categoryInput = {
    category_id?: string
    category_value: string
    sub_categories?: post_categoriesCreateNestedManyWithoutParent_categoryInput
    posts?: postsCreateNestedManyWithoutPost_categoryInput
    interested_users?: usersCreateNestedManyWithoutPreferencesInput
  }

  export type post_categoriesUncheckedCreateWithoutParent_categoryInput = {
    category_id?: string
    category_value: string
    sub_categories?: post_categoriesUncheckedCreateNestedManyWithoutParent_categoryInput
    posts?: postsUncheckedCreateNestedManyWithoutPost_categoryInput
    interested_users?: usersUncheckedCreateNestedManyWithoutPreferencesInput
  }

  export type post_categoriesCreateOrConnectWithoutParent_categoryInput = {
    where: post_categoriesWhereUniqueInput
    create: XOR<post_categoriesCreateWithoutParent_categoryInput, post_categoriesUncheckedCreateWithoutParent_categoryInput>
  }

  export type post_categoriesCreateManyParent_categoryInputEnvelope = {
    data: post_categoriesCreateManyParent_categoryInput | post_categoriesCreateManyParent_categoryInput[]
    skipDuplicates?: boolean
  }

  export type postsCreateWithoutPost_categoryInput = {
    post_id?: string
    title: string
    description?: string | null
    price?: bigint | number | null
    created_at?: Date | string
    post_likers?: usersCreateNestedManyWithoutPosts_likedInput
    author: usersCreateNestedOneWithoutUser_postsInput
    comments?: commentsCreateNestedManyWithoutCommented_postInput
    medias?: mediasCreateNestedManyWithoutMedia_postInput
    users_saved_posts?: users_saved_postsCreateNestedManyWithoutSaved_postInput
  }

  export type postsUncheckedCreateWithoutPost_categoryInput = {
    post_id?: string
    title: string
    description?: string | null
    price?: bigint | number | null
    created_at?: Date | string
    author_id: string
    post_likers?: usersUncheckedCreateNestedManyWithoutPosts_likedInput
    comments?: commentsUncheckedCreateNestedManyWithoutCommented_postInput
    medias?: mediasUncheckedCreateNestedManyWithoutMedia_postInput
    users_saved_posts?: users_saved_postsUncheckedCreateNestedManyWithoutSaved_postInput
  }

  export type postsCreateOrConnectWithoutPost_categoryInput = {
    where: postsWhereUniqueInput
    create: XOR<postsCreateWithoutPost_categoryInput, postsUncheckedCreateWithoutPost_categoryInput>
  }

  export type postsCreateManyPost_categoryInputEnvelope = {
    data: postsCreateManyPost_categoryInput | postsCreateManyPost_categoryInput[]
    skipDuplicates?: boolean
  }

  export type usersCreateWithoutPreferencesInput = {
    user_id?: string
    bio?: string | null
    email: string
    name: string
    password: string
    gender?: $Enums.gender_enum | null
    created_at?: Date | string | null
    stars?: number
    profile_photo_url?: string | null
    cover_photo_url?: string | null
    user_account_type?: $Enums.account_type
    followers?: usersCreateNestedManyWithoutFollowingsInput
    followings?: usersCreateNestedManyWithoutFollowersInput
    user_posts?: postsCreateNestedManyWithoutAuthorInput
    posts_liked?: postsCreateNestedManyWithoutPost_likersInput
    comments_liked?: commentsCreateNestedManyWithoutComment_likersInput
    messages?: messagesCreateNestedManyWithoutUsersInput
    conversations?: conversationsCreateNestedManyWithoutUsersInput
    user_sessions?: sessionsCreateNestedManyWithoutSession_userInput
    nofitications?: nofiticationsCreateNestedManyWithoutUsersInput
    users_saved_posts?: users_saved_postsCreateNestedManyWithoutUser_savingInput
    comments?: commentsCreateNestedManyWithoutCommentatorInput
  }

  export type usersUncheckedCreateWithoutPreferencesInput = {
    user_id?: string
    bio?: string | null
    email: string
    name: string
    password: string
    gender?: $Enums.gender_enum | null
    created_at?: Date | string | null
    stars?: number
    profile_photo_url?: string | null
    cover_photo_url?: string | null
    user_account_type?: $Enums.account_type
    followers?: usersUncheckedCreateNestedManyWithoutFollowingsInput
    followings?: usersUncheckedCreateNestedManyWithoutFollowersInput
    user_posts?: postsUncheckedCreateNestedManyWithoutAuthorInput
    posts_liked?: postsUncheckedCreateNestedManyWithoutPost_likersInput
    comments_liked?: commentsUncheckedCreateNestedManyWithoutComment_likersInput
    messages?: messagesUncheckedCreateNestedManyWithoutUsersInput
    conversations?: conversationsUncheckedCreateNestedManyWithoutUsersInput
    user_sessions?: sessionsUncheckedCreateNestedManyWithoutSession_userInput
    nofitications?: nofiticationsUncheckedCreateNestedManyWithoutUsersInput
    users_saved_posts?: users_saved_postsUncheckedCreateNestedManyWithoutUser_savingInput
    comments?: commentsUncheckedCreateNestedManyWithoutCommentatorInput
  }

  export type usersCreateOrConnectWithoutPreferencesInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutPreferencesInput, usersUncheckedCreateWithoutPreferencesInput>
  }

  export type post_categoriesUpsertWithoutSub_categoriesInput = {
    update: XOR<post_categoriesUpdateWithoutSub_categoriesInput, post_categoriesUncheckedUpdateWithoutSub_categoriesInput>
    create: XOR<post_categoriesCreateWithoutSub_categoriesInput, post_categoriesUncheckedCreateWithoutSub_categoriesInput>
    where?: post_categoriesWhereInput
  }

  export type post_categoriesUpdateToOneWithWhereWithoutSub_categoriesInput = {
    where?: post_categoriesWhereInput
    data: XOR<post_categoriesUpdateWithoutSub_categoriesInput, post_categoriesUncheckedUpdateWithoutSub_categoriesInput>
  }

  export type post_categoriesUpdateWithoutSub_categoriesInput = {
    category_id?: StringFieldUpdateOperationsInput | string
    category_value?: StringFieldUpdateOperationsInput | string
    parent_category?: post_categoriesUpdateOneWithoutSub_categoriesNestedInput
    posts?: postsUpdateManyWithoutPost_categoryNestedInput
    interested_users?: usersUpdateManyWithoutPreferencesNestedInput
  }

  export type post_categoriesUncheckedUpdateWithoutSub_categoriesInput = {
    category_id?: StringFieldUpdateOperationsInput | string
    category_value?: StringFieldUpdateOperationsInput | string
    parent_category_id?: NullableStringFieldUpdateOperationsInput | string | null
    posts?: postsUncheckedUpdateManyWithoutPost_categoryNestedInput
    interested_users?: usersUncheckedUpdateManyWithoutPreferencesNestedInput
  }

  export type post_categoriesUpsertWithWhereUniqueWithoutParent_categoryInput = {
    where: post_categoriesWhereUniqueInput
    update: XOR<post_categoriesUpdateWithoutParent_categoryInput, post_categoriesUncheckedUpdateWithoutParent_categoryInput>
    create: XOR<post_categoriesCreateWithoutParent_categoryInput, post_categoriesUncheckedCreateWithoutParent_categoryInput>
  }

  export type post_categoriesUpdateWithWhereUniqueWithoutParent_categoryInput = {
    where: post_categoriesWhereUniqueInput
    data: XOR<post_categoriesUpdateWithoutParent_categoryInput, post_categoriesUncheckedUpdateWithoutParent_categoryInput>
  }

  export type post_categoriesUpdateManyWithWhereWithoutParent_categoryInput = {
    where: post_categoriesScalarWhereInput
    data: XOR<post_categoriesUpdateManyMutationInput, post_categoriesUncheckedUpdateManyWithoutParent_categoryInput>
  }

  export type postsUpsertWithWhereUniqueWithoutPost_categoryInput = {
    where: postsWhereUniqueInput
    update: XOR<postsUpdateWithoutPost_categoryInput, postsUncheckedUpdateWithoutPost_categoryInput>
    create: XOR<postsCreateWithoutPost_categoryInput, postsUncheckedCreateWithoutPost_categoryInput>
  }

  export type postsUpdateWithWhereUniqueWithoutPost_categoryInput = {
    where: postsWhereUniqueInput
    data: XOR<postsUpdateWithoutPost_categoryInput, postsUncheckedUpdateWithoutPost_categoryInput>
  }

  export type postsUpdateManyWithWhereWithoutPost_categoryInput = {
    where: postsScalarWhereInput
    data: XOR<postsUpdateManyMutationInput, postsUncheckedUpdateManyWithoutPost_categoryInput>
  }

  export type usersUpsertWithWhereUniqueWithoutPreferencesInput = {
    where: usersWhereUniqueInput
    update: XOR<usersUpdateWithoutPreferencesInput, usersUncheckedUpdateWithoutPreferencesInput>
    create: XOR<usersCreateWithoutPreferencesInput, usersUncheckedCreateWithoutPreferencesInput>
  }

  export type usersUpdateWithWhereUniqueWithoutPreferencesInput = {
    where: usersWhereUniqueInput
    data: XOR<usersUpdateWithoutPreferencesInput, usersUncheckedUpdateWithoutPreferencesInput>
  }

  export type usersUpdateManyWithWhereWithoutPreferencesInput = {
    where: usersScalarWhereInput
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyWithoutPreferencesInput>
  }

  export type post_categoriesCreateWithoutPostsInput = {
    category_id?: string
    category_value: string
    parent_category?: post_categoriesCreateNestedOneWithoutSub_categoriesInput
    sub_categories?: post_categoriesCreateNestedManyWithoutParent_categoryInput
    interested_users?: usersCreateNestedManyWithoutPreferencesInput
  }

  export type post_categoriesUncheckedCreateWithoutPostsInput = {
    category_id?: string
    category_value: string
    parent_category_id?: string | null
    sub_categories?: post_categoriesUncheckedCreateNestedManyWithoutParent_categoryInput
    interested_users?: usersUncheckedCreateNestedManyWithoutPreferencesInput
  }

  export type post_categoriesCreateOrConnectWithoutPostsInput = {
    where: post_categoriesWhereUniqueInput
    create: XOR<post_categoriesCreateWithoutPostsInput, post_categoriesUncheckedCreateWithoutPostsInput>
  }

  export type usersCreateWithoutPosts_likedInput = {
    user_id?: string
    bio?: string | null
    email: string
    name: string
    password: string
    gender?: $Enums.gender_enum | null
    created_at?: Date | string | null
    stars?: number
    profile_photo_url?: string | null
    cover_photo_url?: string | null
    user_account_type?: $Enums.account_type
    preferences?: post_categoriesCreateNestedManyWithoutInterested_usersInput
    followers?: usersCreateNestedManyWithoutFollowingsInput
    followings?: usersCreateNestedManyWithoutFollowersInput
    user_posts?: postsCreateNestedManyWithoutAuthorInput
    comments_liked?: commentsCreateNestedManyWithoutComment_likersInput
    messages?: messagesCreateNestedManyWithoutUsersInput
    conversations?: conversationsCreateNestedManyWithoutUsersInput
    user_sessions?: sessionsCreateNestedManyWithoutSession_userInput
    nofitications?: nofiticationsCreateNestedManyWithoutUsersInput
    users_saved_posts?: users_saved_postsCreateNestedManyWithoutUser_savingInput
    comments?: commentsCreateNestedManyWithoutCommentatorInput
  }

  export type usersUncheckedCreateWithoutPosts_likedInput = {
    user_id?: string
    bio?: string | null
    email: string
    name: string
    password: string
    gender?: $Enums.gender_enum | null
    created_at?: Date | string | null
    stars?: number
    profile_photo_url?: string | null
    cover_photo_url?: string | null
    user_account_type?: $Enums.account_type
    preferences?: post_categoriesUncheckedCreateNestedManyWithoutInterested_usersInput
    followers?: usersUncheckedCreateNestedManyWithoutFollowingsInput
    followings?: usersUncheckedCreateNestedManyWithoutFollowersInput
    user_posts?: postsUncheckedCreateNestedManyWithoutAuthorInput
    comments_liked?: commentsUncheckedCreateNestedManyWithoutComment_likersInput
    messages?: messagesUncheckedCreateNestedManyWithoutUsersInput
    conversations?: conversationsUncheckedCreateNestedManyWithoutUsersInput
    user_sessions?: sessionsUncheckedCreateNestedManyWithoutSession_userInput
    nofitications?: nofiticationsUncheckedCreateNestedManyWithoutUsersInput
    users_saved_posts?: users_saved_postsUncheckedCreateNestedManyWithoutUser_savingInput
    comments?: commentsUncheckedCreateNestedManyWithoutCommentatorInput
  }

  export type usersCreateOrConnectWithoutPosts_likedInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutPosts_likedInput, usersUncheckedCreateWithoutPosts_likedInput>
  }

  export type usersCreateWithoutUser_postsInput = {
    user_id?: string
    bio?: string | null
    email: string
    name: string
    password: string
    gender?: $Enums.gender_enum | null
    created_at?: Date | string | null
    stars?: number
    profile_photo_url?: string | null
    cover_photo_url?: string | null
    user_account_type?: $Enums.account_type
    preferences?: post_categoriesCreateNestedManyWithoutInterested_usersInput
    followers?: usersCreateNestedManyWithoutFollowingsInput
    followings?: usersCreateNestedManyWithoutFollowersInput
    posts_liked?: postsCreateNestedManyWithoutPost_likersInput
    comments_liked?: commentsCreateNestedManyWithoutComment_likersInput
    messages?: messagesCreateNestedManyWithoutUsersInput
    conversations?: conversationsCreateNestedManyWithoutUsersInput
    user_sessions?: sessionsCreateNestedManyWithoutSession_userInput
    nofitications?: nofiticationsCreateNestedManyWithoutUsersInput
    users_saved_posts?: users_saved_postsCreateNestedManyWithoutUser_savingInput
    comments?: commentsCreateNestedManyWithoutCommentatorInput
  }

  export type usersUncheckedCreateWithoutUser_postsInput = {
    user_id?: string
    bio?: string | null
    email: string
    name: string
    password: string
    gender?: $Enums.gender_enum | null
    created_at?: Date | string | null
    stars?: number
    profile_photo_url?: string | null
    cover_photo_url?: string | null
    user_account_type?: $Enums.account_type
    preferences?: post_categoriesUncheckedCreateNestedManyWithoutInterested_usersInput
    followers?: usersUncheckedCreateNestedManyWithoutFollowingsInput
    followings?: usersUncheckedCreateNestedManyWithoutFollowersInput
    posts_liked?: postsUncheckedCreateNestedManyWithoutPost_likersInput
    comments_liked?: commentsUncheckedCreateNestedManyWithoutComment_likersInput
    messages?: messagesUncheckedCreateNestedManyWithoutUsersInput
    conversations?: conversationsUncheckedCreateNestedManyWithoutUsersInput
    user_sessions?: sessionsUncheckedCreateNestedManyWithoutSession_userInput
    nofitications?: nofiticationsUncheckedCreateNestedManyWithoutUsersInput
    users_saved_posts?: users_saved_postsUncheckedCreateNestedManyWithoutUser_savingInput
    comments?: commentsUncheckedCreateNestedManyWithoutCommentatorInput
  }

  export type usersCreateOrConnectWithoutUser_postsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutUser_postsInput, usersUncheckedCreateWithoutUser_postsInput>
  }

  export type commentsCreateWithoutCommented_postInput = {
    comment_id?: string
    body: string
    created_at?: Date | string | null
    comment_likers?: usersCreateNestedManyWithoutComments_likedInput
    commentator?: usersCreateNestedOneWithoutCommentsInput
    parent_coment?: commentsCreateNestedOneWithoutSub_commentsInput
    sub_comments?: commentsCreateNestedManyWithoutParent_comentInput
  }

  export type commentsUncheckedCreateWithoutCommented_postInput = {
    comment_id?: string
    body: string
    created_at?: Date | string | null
    commentator_id?: string | null
    parent_comment_id?: string | null
    comment_likers?: usersUncheckedCreateNestedManyWithoutComments_likedInput
    sub_comments?: commentsUncheckedCreateNestedManyWithoutParent_comentInput
  }

  export type commentsCreateOrConnectWithoutCommented_postInput = {
    where: commentsWhereUniqueInput
    create: XOR<commentsCreateWithoutCommented_postInput, commentsUncheckedCreateWithoutCommented_postInput>
  }

  export type commentsCreateManyCommented_postInputEnvelope = {
    data: commentsCreateManyCommented_postInput | commentsCreateManyCommented_postInput[]
    skipDuplicates?: boolean
  }

  export type mediasCreateWithoutMedia_postInput = {
    media_id?: string
    fileType: $Enums.file_type_enum
    encoding: string
    mimetype: string
    filename: string
    fileUrl: string
    path: string
    size: bigint | number
  }

  export type mediasUncheckedCreateWithoutMedia_postInput = {
    media_id?: string
    fileType: $Enums.file_type_enum
    encoding: string
    mimetype: string
    filename: string
    fileUrl: string
    path: string
    size: bigint | number
  }

  export type mediasCreateOrConnectWithoutMedia_postInput = {
    where: mediasWhereUniqueInput
    create: XOR<mediasCreateWithoutMedia_postInput, mediasUncheckedCreateWithoutMedia_postInput>
  }

  export type mediasCreateManyMedia_postInputEnvelope = {
    data: mediasCreateManyMedia_postInput | mediasCreateManyMedia_postInput[]
    skipDuplicates?: boolean
  }

  export type users_saved_postsCreateWithoutSaved_postInput = {
    post_saving_id?: string
    saved_at?: Date | string
    user_saving?: usersCreateNestedOneWithoutUsers_saved_postsInput
  }

  export type users_saved_postsUncheckedCreateWithoutSaved_postInput = {
    post_saving_id?: string
    saved_at?: Date | string
    user_saving_id?: string | null
  }

  export type users_saved_postsCreateOrConnectWithoutSaved_postInput = {
    where: users_saved_postsWhereUniqueInput
    create: XOR<users_saved_postsCreateWithoutSaved_postInput, users_saved_postsUncheckedCreateWithoutSaved_postInput>
  }

  export type users_saved_postsCreateManySaved_postInputEnvelope = {
    data: users_saved_postsCreateManySaved_postInput | users_saved_postsCreateManySaved_postInput[]
    skipDuplicates?: boolean
  }

  export type post_categoriesUpsertWithoutPostsInput = {
    update: XOR<post_categoriesUpdateWithoutPostsInput, post_categoriesUncheckedUpdateWithoutPostsInput>
    create: XOR<post_categoriesCreateWithoutPostsInput, post_categoriesUncheckedCreateWithoutPostsInput>
    where?: post_categoriesWhereInput
  }

  export type post_categoriesUpdateToOneWithWhereWithoutPostsInput = {
    where?: post_categoriesWhereInput
    data: XOR<post_categoriesUpdateWithoutPostsInput, post_categoriesUncheckedUpdateWithoutPostsInput>
  }

  export type post_categoriesUpdateWithoutPostsInput = {
    category_id?: StringFieldUpdateOperationsInput | string
    category_value?: StringFieldUpdateOperationsInput | string
    parent_category?: post_categoriesUpdateOneWithoutSub_categoriesNestedInput
    sub_categories?: post_categoriesUpdateManyWithoutParent_categoryNestedInput
    interested_users?: usersUpdateManyWithoutPreferencesNestedInput
  }

  export type post_categoriesUncheckedUpdateWithoutPostsInput = {
    category_id?: StringFieldUpdateOperationsInput | string
    category_value?: StringFieldUpdateOperationsInput | string
    parent_category_id?: NullableStringFieldUpdateOperationsInput | string | null
    sub_categories?: post_categoriesUncheckedUpdateManyWithoutParent_categoryNestedInput
    interested_users?: usersUncheckedUpdateManyWithoutPreferencesNestedInput
  }

  export type usersUpsertWithWhereUniqueWithoutPosts_likedInput = {
    where: usersWhereUniqueInput
    update: XOR<usersUpdateWithoutPosts_likedInput, usersUncheckedUpdateWithoutPosts_likedInput>
    create: XOR<usersCreateWithoutPosts_likedInput, usersUncheckedCreateWithoutPosts_likedInput>
  }

  export type usersUpdateWithWhereUniqueWithoutPosts_likedInput = {
    where: usersWhereUniqueInput
    data: XOR<usersUpdateWithoutPosts_likedInput, usersUncheckedUpdateWithoutPosts_likedInput>
  }

  export type usersUpdateManyWithWhereWithoutPosts_likedInput = {
    where: usersScalarWhereInput
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyWithoutPosts_likedInput>
  }

  export type usersUpsertWithoutUser_postsInput = {
    update: XOR<usersUpdateWithoutUser_postsInput, usersUncheckedUpdateWithoutUser_postsInput>
    create: XOR<usersCreateWithoutUser_postsInput, usersUncheckedCreateWithoutUser_postsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutUser_postsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutUser_postsInput, usersUncheckedUpdateWithoutUser_postsInput>
  }

  export type usersUpdateWithoutUser_postsInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    gender?: NullableEnumgender_enumFieldUpdateOperationsInput | $Enums.gender_enum | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stars?: IntFieldUpdateOperationsInput | number
    profile_photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    cover_photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    user_account_type?: Enumaccount_typeFieldUpdateOperationsInput | $Enums.account_type
    preferences?: post_categoriesUpdateManyWithoutInterested_usersNestedInput
    followers?: usersUpdateManyWithoutFollowingsNestedInput
    followings?: usersUpdateManyWithoutFollowersNestedInput
    posts_liked?: postsUpdateManyWithoutPost_likersNestedInput
    comments_liked?: commentsUpdateManyWithoutComment_likersNestedInput
    messages?: messagesUpdateManyWithoutUsersNestedInput
    conversations?: conversationsUpdateManyWithoutUsersNestedInput
    user_sessions?: sessionsUpdateManyWithoutSession_userNestedInput
    nofitications?: nofiticationsUpdateManyWithoutUsersNestedInput
    users_saved_posts?: users_saved_postsUpdateManyWithoutUser_savingNestedInput
    comments?: commentsUpdateManyWithoutCommentatorNestedInput
  }

  export type usersUncheckedUpdateWithoutUser_postsInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    gender?: NullableEnumgender_enumFieldUpdateOperationsInput | $Enums.gender_enum | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stars?: IntFieldUpdateOperationsInput | number
    profile_photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    cover_photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    user_account_type?: Enumaccount_typeFieldUpdateOperationsInput | $Enums.account_type
    preferences?: post_categoriesUncheckedUpdateManyWithoutInterested_usersNestedInput
    followers?: usersUncheckedUpdateManyWithoutFollowingsNestedInput
    followings?: usersUncheckedUpdateManyWithoutFollowersNestedInput
    posts_liked?: postsUncheckedUpdateManyWithoutPost_likersNestedInput
    comments_liked?: commentsUncheckedUpdateManyWithoutComment_likersNestedInput
    messages?: messagesUncheckedUpdateManyWithoutUsersNestedInput
    conversations?: conversationsUncheckedUpdateManyWithoutUsersNestedInput
    user_sessions?: sessionsUncheckedUpdateManyWithoutSession_userNestedInput
    nofitications?: nofiticationsUncheckedUpdateManyWithoutUsersNestedInput
    users_saved_posts?: users_saved_postsUncheckedUpdateManyWithoutUser_savingNestedInput
    comments?: commentsUncheckedUpdateManyWithoutCommentatorNestedInput
  }

  export type commentsUpsertWithWhereUniqueWithoutCommented_postInput = {
    where: commentsWhereUniqueInput
    update: XOR<commentsUpdateWithoutCommented_postInput, commentsUncheckedUpdateWithoutCommented_postInput>
    create: XOR<commentsCreateWithoutCommented_postInput, commentsUncheckedCreateWithoutCommented_postInput>
  }

  export type commentsUpdateWithWhereUniqueWithoutCommented_postInput = {
    where: commentsWhereUniqueInput
    data: XOR<commentsUpdateWithoutCommented_postInput, commentsUncheckedUpdateWithoutCommented_postInput>
  }

  export type commentsUpdateManyWithWhereWithoutCommented_postInput = {
    where: commentsScalarWhereInput
    data: XOR<commentsUpdateManyMutationInput, commentsUncheckedUpdateManyWithoutCommented_postInput>
  }

  export type mediasUpsertWithWhereUniqueWithoutMedia_postInput = {
    where: mediasWhereUniqueInput
    update: XOR<mediasUpdateWithoutMedia_postInput, mediasUncheckedUpdateWithoutMedia_postInput>
    create: XOR<mediasCreateWithoutMedia_postInput, mediasUncheckedCreateWithoutMedia_postInput>
  }

  export type mediasUpdateWithWhereUniqueWithoutMedia_postInput = {
    where: mediasWhereUniqueInput
    data: XOR<mediasUpdateWithoutMedia_postInput, mediasUncheckedUpdateWithoutMedia_postInput>
  }

  export type mediasUpdateManyWithWhereWithoutMedia_postInput = {
    where: mediasScalarWhereInput
    data: XOR<mediasUpdateManyMutationInput, mediasUncheckedUpdateManyWithoutMedia_postInput>
  }

  export type mediasScalarWhereInput = {
    AND?: mediasScalarWhereInput | mediasScalarWhereInput[]
    OR?: mediasScalarWhereInput[]
    NOT?: mediasScalarWhereInput | mediasScalarWhereInput[]
    media_id?: UuidFilter<"medias"> | string
    fileType?: Enumfile_type_enumFilter<"medias"> | $Enums.file_type_enum
    encoding?: StringFilter<"medias"> | string
    mimetype?: StringFilter<"medias"> | string
    filename?: StringFilter<"medias"> | string
    fileUrl?: StringFilter<"medias"> | string
    path?: StringFilter<"medias"> | string
    size?: BigIntFilter<"medias"> | bigint | number
    media_post_id?: UuidNullableFilter<"medias"> | string | null
  }

  export type users_saved_postsUpsertWithWhereUniqueWithoutSaved_postInput = {
    where: users_saved_postsWhereUniqueInput
    update: XOR<users_saved_postsUpdateWithoutSaved_postInput, users_saved_postsUncheckedUpdateWithoutSaved_postInput>
    create: XOR<users_saved_postsCreateWithoutSaved_postInput, users_saved_postsUncheckedCreateWithoutSaved_postInput>
  }

  export type users_saved_postsUpdateWithWhereUniqueWithoutSaved_postInput = {
    where: users_saved_postsWhereUniqueInput
    data: XOR<users_saved_postsUpdateWithoutSaved_postInput, users_saved_postsUncheckedUpdateWithoutSaved_postInput>
  }

  export type users_saved_postsUpdateManyWithWhereWithoutSaved_postInput = {
    where: users_saved_postsScalarWhereInput
    data: XOR<users_saved_postsUpdateManyMutationInput, users_saved_postsUncheckedUpdateManyWithoutSaved_postInput>
  }

  export type usersCreateWithoutUsers_saved_postsInput = {
    user_id?: string
    bio?: string | null
    email: string
    name: string
    password: string
    gender?: $Enums.gender_enum | null
    created_at?: Date | string | null
    stars?: number
    profile_photo_url?: string | null
    cover_photo_url?: string | null
    user_account_type?: $Enums.account_type
    preferences?: post_categoriesCreateNestedManyWithoutInterested_usersInput
    followers?: usersCreateNestedManyWithoutFollowingsInput
    followings?: usersCreateNestedManyWithoutFollowersInput
    user_posts?: postsCreateNestedManyWithoutAuthorInput
    posts_liked?: postsCreateNestedManyWithoutPost_likersInput
    comments_liked?: commentsCreateNestedManyWithoutComment_likersInput
    messages?: messagesCreateNestedManyWithoutUsersInput
    conversations?: conversationsCreateNestedManyWithoutUsersInput
    user_sessions?: sessionsCreateNestedManyWithoutSession_userInput
    nofitications?: nofiticationsCreateNestedManyWithoutUsersInput
    comments?: commentsCreateNestedManyWithoutCommentatorInput
  }

  export type usersUncheckedCreateWithoutUsers_saved_postsInput = {
    user_id?: string
    bio?: string | null
    email: string
    name: string
    password: string
    gender?: $Enums.gender_enum | null
    created_at?: Date | string | null
    stars?: number
    profile_photo_url?: string | null
    cover_photo_url?: string | null
    user_account_type?: $Enums.account_type
    preferences?: post_categoriesUncheckedCreateNestedManyWithoutInterested_usersInput
    followers?: usersUncheckedCreateNestedManyWithoutFollowingsInput
    followings?: usersUncheckedCreateNestedManyWithoutFollowersInput
    user_posts?: postsUncheckedCreateNestedManyWithoutAuthorInput
    posts_liked?: postsUncheckedCreateNestedManyWithoutPost_likersInput
    comments_liked?: commentsUncheckedCreateNestedManyWithoutComment_likersInput
    messages?: messagesUncheckedCreateNestedManyWithoutUsersInput
    conversations?: conversationsUncheckedCreateNestedManyWithoutUsersInput
    user_sessions?: sessionsUncheckedCreateNestedManyWithoutSession_userInput
    nofitications?: nofiticationsUncheckedCreateNestedManyWithoutUsersInput
    comments?: commentsUncheckedCreateNestedManyWithoutCommentatorInput
  }

  export type usersCreateOrConnectWithoutUsers_saved_postsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutUsers_saved_postsInput, usersUncheckedCreateWithoutUsers_saved_postsInput>
  }

  export type postsCreateWithoutUsers_saved_postsInput = {
    post_id?: string
    title: string
    description?: string | null
    price?: bigint | number | null
    created_at?: Date | string
    post_category?: post_categoriesCreateNestedOneWithoutPostsInput
    post_likers?: usersCreateNestedManyWithoutPosts_likedInput
    author: usersCreateNestedOneWithoutUser_postsInput
    comments?: commentsCreateNestedManyWithoutCommented_postInput
    medias?: mediasCreateNestedManyWithoutMedia_postInput
  }

  export type postsUncheckedCreateWithoutUsers_saved_postsInput = {
    post_id?: string
    title: string
    description?: string | null
    price?: bigint | number | null
    created_at?: Date | string
    post_category_id?: string | null
    author_id: string
    post_likers?: usersUncheckedCreateNestedManyWithoutPosts_likedInput
    comments?: commentsUncheckedCreateNestedManyWithoutCommented_postInput
    medias?: mediasUncheckedCreateNestedManyWithoutMedia_postInput
  }

  export type postsCreateOrConnectWithoutUsers_saved_postsInput = {
    where: postsWhereUniqueInput
    create: XOR<postsCreateWithoutUsers_saved_postsInput, postsUncheckedCreateWithoutUsers_saved_postsInput>
  }

  export type usersUpsertWithoutUsers_saved_postsInput = {
    update: XOR<usersUpdateWithoutUsers_saved_postsInput, usersUncheckedUpdateWithoutUsers_saved_postsInput>
    create: XOR<usersCreateWithoutUsers_saved_postsInput, usersUncheckedCreateWithoutUsers_saved_postsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutUsers_saved_postsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutUsers_saved_postsInput, usersUncheckedUpdateWithoutUsers_saved_postsInput>
  }

  export type usersUpdateWithoutUsers_saved_postsInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    gender?: NullableEnumgender_enumFieldUpdateOperationsInput | $Enums.gender_enum | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stars?: IntFieldUpdateOperationsInput | number
    profile_photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    cover_photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    user_account_type?: Enumaccount_typeFieldUpdateOperationsInput | $Enums.account_type
    preferences?: post_categoriesUpdateManyWithoutInterested_usersNestedInput
    followers?: usersUpdateManyWithoutFollowingsNestedInput
    followings?: usersUpdateManyWithoutFollowersNestedInput
    user_posts?: postsUpdateManyWithoutAuthorNestedInput
    posts_liked?: postsUpdateManyWithoutPost_likersNestedInput
    comments_liked?: commentsUpdateManyWithoutComment_likersNestedInput
    messages?: messagesUpdateManyWithoutUsersNestedInput
    conversations?: conversationsUpdateManyWithoutUsersNestedInput
    user_sessions?: sessionsUpdateManyWithoutSession_userNestedInput
    nofitications?: nofiticationsUpdateManyWithoutUsersNestedInput
    comments?: commentsUpdateManyWithoutCommentatorNestedInput
  }

  export type usersUncheckedUpdateWithoutUsers_saved_postsInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    gender?: NullableEnumgender_enumFieldUpdateOperationsInput | $Enums.gender_enum | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stars?: IntFieldUpdateOperationsInput | number
    profile_photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    cover_photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    user_account_type?: Enumaccount_typeFieldUpdateOperationsInput | $Enums.account_type
    preferences?: post_categoriesUncheckedUpdateManyWithoutInterested_usersNestedInput
    followers?: usersUncheckedUpdateManyWithoutFollowingsNestedInput
    followings?: usersUncheckedUpdateManyWithoutFollowersNestedInput
    user_posts?: postsUncheckedUpdateManyWithoutAuthorNestedInput
    posts_liked?: postsUncheckedUpdateManyWithoutPost_likersNestedInput
    comments_liked?: commentsUncheckedUpdateManyWithoutComment_likersNestedInput
    messages?: messagesUncheckedUpdateManyWithoutUsersNestedInput
    conversations?: conversationsUncheckedUpdateManyWithoutUsersNestedInput
    user_sessions?: sessionsUncheckedUpdateManyWithoutSession_userNestedInput
    nofitications?: nofiticationsUncheckedUpdateManyWithoutUsersNestedInput
    comments?: commentsUncheckedUpdateManyWithoutCommentatorNestedInput
  }

  export type postsUpsertWithoutUsers_saved_postsInput = {
    update: XOR<postsUpdateWithoutUsers_saved_postsInput, postsUncheckedUpdateWithoutUsers_saved_postsInput>
    create: XOR<postsCreateWithoutUsers_saved_postsInput, postsUncheckedCreateWithoutUsers_saved_postsInput>
    where?: postsWhereInput
  }

  export type postsUpdateToOneWithWhereWithoutUsers_saved_postsInput = {
    where?: postsWhereInput
    data: XOR<postsUpdateWithoutUsers_saved_postsInput, postsUncheckedUpdateWithoutUsers_saved_postsInput>
  }

  export type postsUpdateWithoutUsers_saved_postsInput = {
    post_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    post_category?: post_categoriesUpdateOneWithoutPostsNestedInput
    post_likers?: usersUpdateManyWithoutPosts_likedNestedInput
    author?: usersUpdateOneRequiredWithoutUser_postsNestedInput
    comments?: commentsUpdateManyWithoutCommented_postNestedInput
    medias?: mediasUpdateManyWithoutMedia_postNestedInput
  }

  export type postsUncheckedUpdateWithoutUsers_saved_postsInput = {
    post_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    post_category_id?: NullableStringFieldUpdateOperationsInput | string | null
    author_id?: StringFieldUpdateOperationsInput | string
    post_likers?: usersUncheckedUpdateManyWithoutPosts_likedNestedInput
    comments?: commentsUncheckedUpdateManyWithoutCommented_postNestedInput
    medias?: mediasUncheckedUpdateManyWithoutMedia_postNestedInput
  }

  export type usersCreateWithoutComments_likedInput = {
    user_id?: string
    bio?: string | null
    email: string
    name: string
    password: string
    gender?: $Enums.gender_enum | null
    created_at?: Date | string | null
    stars?: number
    profile_photo_url?: string | null
    cover_photo_url?: string | null
    user_account_type?: $Enums.account_type
    preferences?: post_categoriesCreateNestedManyWithoutInterested_usersInput
    followers?: usersCreateNestedManyWithoutFollowingsInput
    followings?: usersCreateNestedManyWithoutFollowersInput
    user_posts?: postsCreateNestedManyWithoutAuthorInput
    posts_liked?: postsCreateNestedManyWithoutPost_likersInput
    messages?: messagesCreateNestedManyWithoutUsersInput
    conversations?: conversationsCreateNestedManyWithoutUsersInput
    user_sessions?: sessionsCreateNestedManyWithoutSession_userInput
    nofitications?: nofiticationsCreateNestedManyWithoutUsersInput
    users_saved_posts?: users_saved_postsCreateNestedManyWithoutUser_savingInput
    comments?: commentsCreateNestedManyWithoutCommentatorInput
  }

  export type usersUncheckedCreateWithoutComments_likedInput = {
    user_id?: string
    bio?: string | null
    email: string
    name: string
    password: string
    gender?: $Enums.gender_enum | null
    created_at?: Date | string | null
    stars?: number
    profile_photo_url?: string | null
    cover_photo_url?: string | null
    user_account_type?: $Enums.account_type
    preferences?: post_categoriesUncheckedCreateNestedManyWithoutInterested_usersInput
    followers?: usersUncheckedCreateNestedManyWithoutFollowingsInput
    followings?: usersUncheckedCreateNestedManyWithoutFollowersInput
    user_posts?: postsUncheckedCreateNestedManyWithoutAuthorInput
    posts_liked?: postsUncheckedCreateNestedManyWithoutPost_likersInput
    messages?: messagesUncheckedCreateNestedManyWithoutUsersInput
    conversations?: conversationsUncheckedCreateNestedManyWithoutUsersInput
    user_sessions?: sessionsUncheckedCreateNestedManyWithoutSession_userInput
    nofitications?: nofiticationsUncheckedCreateNestedManyWithoutUsersInput
    users_saved_posts?: users_saved_postsUncheckedCreateNestedManyWithoutUser_savingInput
    comments?: commentsUncheckedCreateNestedManyWithoutCommentatorInput
  }

  export type usersCreateOrConnectWithoutComments_likedInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutComments_likedInput, usersUncheckedCreateWithoutComments_likedInput>
  }

  export type usersCreateWithoutCommentsInput = {
    user_id?: string
    bio?: string | null
    email: string
    name: string
    password: string
    gender?: $Enums.gender_enum | null
    created_at?: Date | string | null
    stars?: number
    profile_photo_url?: string | null
    cover_photo_url?: string | null
    user_account_type?: $Enums.account_type
    preferences?: post_categoriesCreateNestedManyWithoutInterested_usersInput
    followers?: usersCreateNestedManyWithoutFollowingsInput
    followings?: usersCreateNestedManyWithoutFollowersInput
    user_posts?: postsCreateNestedManyWithoutAuthorInput
    posts_liked?: postsCreateNestedManyWithoutPost_likersInput
    comments_liked?: commentsCreateNestedManyWithoutComment_likersInput
    messages?: messagesCreateNestedManyWithoutUsersInput
    conversations?: conversationsCreateNestedManyWithoutUsersInput
    user_sessions?: sessionsCreateNestedManyWithoutSession_userInput
    nofitications?: nofiticationsCreateNestedManyWithoutUsersInput
    users_saved_posts?: users_saved_postsCreateNestedManyWithoutUser_savingInput
  }

  export type usersUncheckedCreateWithoutCommentsInput = {
    user_id?: string
    bio?: string | null
    email: string
    name: string
    password: string
    gender?: $Enums.gender_enum | null
    created_at?: Date | string | null
    stars?: number
    profile_photo_url?: string | null
    cover_photo_url?: string | null
    user_account_type?: $Enums.account_type
    preferences?: post_categoriesUncheckedCreateNestedManyWithoutInterested_usersInput
    followers?: usersUncheckedCreateNestedManyWithoutFollowingsInput
    followings?: usersUncheckedCreateNestedManyWithoutFollowersInput
    user_posts?: postsUncheckedCreateNestedManyWithoutAuthorInput
    posts_liked?: postsUncheckedCreateNestedManyWithoutPost_likersInput
    comments_liked?: commentsUncheckedCreateNestedManyWithoutComment_likersInput
    messages?: messagesUncheckedCreateNestedManyWithoutUsersInput
    conversations?: conversationsUncheckedCreateNestedManyWithoutUsersInput
    user_sessions?: sessionsUncheckedCreateNestedManyWithoutSession_userInput
    nofitications?: nofiticationsUncheckedCreateNestedManyWithoutUsersInput
    users_saved_posts?: users_saved_postsUncheckedCreateNestedManyWithoutUser_savingInput
  }

  export type usersCreateOrConnectWithoutCommentsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutCommentsInput, usersUncheckedCreateWithoutCommentsInput>
  }

  export type postsCreateWithoutCommentsInput = {
    post_id?: string
    title: string
    description?: string | null
    price?: bigint | number | null
    created_at?: Date | string
    post_category?: post_categoriesCreateNestedOneWithoutPostsInput
    post_likers?: usersCreateNestedManyWithoutPosts_likedInput
    author: usersCreateNestedOneWithoutUser_postsInput
    medias?: mediasCreateNestedManyWithoutMedia_postInput
    users_saved_posts?: users_saved_postsCreateNestedManyWithoutSaved_postInput
  }

  export type postsUncheckedCreateWithoutCommentsInput = {
    post_id?: string
    title: string
    description?: string | null
    price?: bigint | number | null
    created_at?: Date | string
    post_category_id?: string | null
    author_id: string
    post_likers?: usersUncheckedCreateNestedManyWithoutPosts_likedInput
    medias?: mediasUncheckedCreateNestedManyWithoutMedia_postInput
    users_saved_posts?: users_saved_postsUncheckedCreateNestedManyWithoutSaved_postInput
  }

  export type postsCreateOrConnectWithoutCommentsInput = {
    where: postsWhereUniqueInput
    create: XOR<postsCreateWithoutCommentsInput, postsUncheckedCreateWithoutCommentsInput>
  }

  export type commentsCreateWithoutSub_commentsInput = {
    comment_id?: string
    body: string
    created_at?: Date | string | null
    comment_likers?: usersCreateNestedManyWithoutComments_likedInput
    commentator?: usersCreateNestedOneWithoutCommentsInput
    commented_post?: postsCreateNestedOneWithoutCommentsInput
    parent_coment?: commentsCreateNestedOneWithoutSub_commentsInput
  }

  export type commentsUncheckedCreateWithoutSub_commentsInput = {
    comment_id?: string
    body: string
    created_at?: Date | string | null
    commentator_id?: string | null
    commented_post_id?: string | null
    parent_comment_id?: string | null
    comment_likers?: usersUncheckedCreateNestedManyWithoutComments_likedInput
  }

  export type commentsCreateOrConnectWithoutSub_commentsInput = {
    where: commentsWhereUniqueInput
    create: XOR<commentsCreateWithoutSub_commentsInput, commentsUncheckedCreateWithoutSub_commentsInput>
  }

  export type commentsCreateWithoutParent_comentInput = {
    comment_id?: string
    body: string
    created_at?: Date | string | null
    comment_likers?: usersCreateNestedManyWithoutComments_likedInput
    commentator?: usersCreateNestedOneWithoutCommentsInput
    commented_post?: postsCreateNestedOneWithoutCommentsInput
    sub_comments?: commentsCreateNestedManyWithoutParent_comentInput
  }

  export type commentsUncheckedCreateWithoutParent_comentInput = {
    comment_id?: string
    body: string
    created_at?: Date | string | null
    commentator_id?: string | null
    commented_post_id?: string | null
    comment_likers?: usersUncheckedCreateNestedManyWithoutComments_likedInput
    sub_comments?: commentsUncheckedCreateNestedManyWithoutParent_comentInput
  }

  export type commentsCreateOrConnectWithoutParent_comentInput = {
    where: commentsWhereUniqueInput
    create: XOR<commentsCreateWithoutParent_comentInput, commentsUncheckedCreateWithoutParent_comentInput>
  }

  export type commentsCreateManyParent_comentInputEnvelope = {
    data: commentsCreateManyParent_comentInput | commentsCreateManyParent_comentInput[]
    skipDuplicates?: boolean
  }

  export type usersUpsertWithWhereUniqueWithoutComments_likedInput = {
    where: usersWhereUniqueInput
    update: XOR<usersUpdateWithoutComments_likedInput, usersUncheckedUpdateWithoutComments_likedInput>
    create: XOR<usersCreateWithoutComments_likedInput, usersUncheckedCreateWithoutComments_likedInput>
  }

  export type usersUpdateWithWhereUniqueWithoutComments_likedInput = {
    where: usersWhereUniqueInput
    data: XOR<usersUpdateWithoutComments_likedInput, usersUncheckedUpdateWithoutComments_likedInput>
  }

  export type usersUpdateManyWithWhereWithoutComments_likedInput = {
    where: usersScalarWhereInput
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyWithoutComments_likedInput>
  }

  export type usersUpsertWithoutCommentsInput = {
    update: XOR<usersUpdateWithoutCommentsInput, usersUncheckedUpdateWithoutCommentsInput>
    create: XOR<usersCreateWithoutCommentsInput, usersUncheckedCreateWithoutCommentsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutCommentsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutCommentsInput, usersUncheckedUpdateWithoutCommentsInput>
  }

  export type usersUpdateWithoutCommentsInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    gender?: NullableEnumgender_enumFieldUpdateOperationsInput | $Enums.gender_enum | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stars?: IntFieldUpdateOperationsInput | number
    profile_photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    cover_photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    user_account_type?: Enumaccount_typeFieldUpdateOperationsInput | $Enums.account_type
    preferences?: post_categoriesUpdateManyWithoutInterested_usersNestedInput
    followers?: usersUpdateManyWithoutFollowingsNestedInput
    followings?: usersUpdateManyWithoutFollowersNestedInput
    user_posts?: postsUpdateManyWithoutAuthorNestedInput
    posts_liked?: postsUpdateManyWithoutPost_likersNestedInput
    comments_liked?: commentsUpdateManyWithoutComment_likersNestedInput
    messages?: messagesUpdateManyWithoutUsersNestedInput
    conversations?: conversationsUpdateManyWithoutUsersNestedInput
    user_sessions?: sessionsUpdateManyWithoutSession_userNestedInput
    nofitications?: nofiticationsUpdateManyWithoutUsersNestedInput
    users_saved_posts?: users_saved_postsUpdateManyWithoutUser_savingNestedInput
  }

  export type usersUncheckedUpdateWithoutCommentsInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    gender?: NullableEnumgender_enumFieldUpdateOperationsInput | $Enums.gender_enum | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stars?: IntFieldUpdateOperationsInput | number
    profile_photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    cover_photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    user_account_type?: Enumaccount_typeFieldUpdateOperationsInput | $Enums.account_type
    preferences?: post_categoriesUncheckedUpdateManyWithoutInterested_usersNestedInput
    followers?: usersUncheckedUpdateManyWithoutFollowingsNestedInput
    followings?: usersUncheckedUpdateManyWithoutFollowersNestedInput
    user_posts?: postsUncheckedUpdateManyWithoutAuthorNestedInput
    posts_liked?: postsUncheckedUpdateManyWithoutPost_likersNestedInput
    comments_liked?: commentsUncheckedUpdateManyWithoutComment_likersNestedInput
    messages?: messagesUncheckedUpdateManyWithoutUsersNestedInput
    conversations?: conversationsUncheckedUpdateManyWithoutUsersNestedInput
    user_sessions?: sessionsUncheckedUpdateManyWithoutSession_userNestedInput
    nofitications?: nofiticationsUncheckedUpdateManyWithoutUsersNestedInput
    users_saved_posts?: users_saved_postsUncheckedUpdateManyWithoutUser_savingNestedInput
  }

  export type postsUpsertWithoutCommentsInput = {
    update: XOR<postsUpdateWithoutCommentsInput, postsUncheckedUpdateWithoutCommentsInput>
    create: XOR<postsCreateWithoutCommentsInput, postsUncheckedCreateWithoutCommentsInput>
    where?: postsWhereInput
  }

  export type postsUpdateToOneWithWhereWithoutCommentsInput = {
    where?: postsWhereInput
    data: XOR<postsUpdateWithoutCommentsInput, postsUncheckedUpdateWithoutCommentsInput>
  }

  export type postsUpdateWithoutCommentsInput = {
    post_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    post_category?: post_categoriesUpdateOneWithoutPostsNestedInput
    post_likers?: usersUpdateManyWithoutPosts_likedNestedInput
    author?: usersUpdateOneRequiredWithoutUser_postsNestedInput
    medias?: mediasUpdateManyWithoutMedia_postNestedInput
    users_saved_posts?: users_saved_postsUpdateManyWithoutSaved_postNestedInput
  }

  export type postsUncheckedUpdateWithoutCommentsInput = {
    post_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    post_category_id?: NullableStringFieldUpdateOperationsInput | string | null
    author_id?: StringFieldUpdateOperationsInput | string
    post_likers?: usersUncheckedUpdateManyWithoutPosts_likedNestedInput
    medias?: mediasUncheckedUpdateManyWithoutMedia_postNestedInput
    users_saved_posts?: users_saved_postsUncheckedUpdateManyWithoutSaved_postNestedInput
  }

  export type commentsUpsertWithoutSub_commentsInput = {
    update: XOR<commentsUpdateWithoutSub_commentsInput, commentsUncheckedUpdateWithoutSub_commentsInput>
    create: XOR<commentsCreateWithoutSub_commentsInput, commentsUncheckedCreateWithoutSub_commentsInput>
    where?: commentsWhereInput
  }

  export type commentsUpdateToOneWithWhereWithoutSub_commentsInput = {
    where?: commentsWhereInput
    data: XOR<commentsUpdateWithoutSub_commentsInput, commentsUncheckedUpdateWithoutSub_commentsInput>
  }

  export type commentsUpdateWithoutSub_commentsInput = {
    comment_id?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comment_likers?: usersUpdateManyWithoutComments_likedNestedInput
    commentator?: usersUpdateOneWithoutCommentsNestedInput
    commented_post?: postsUpdateOneWithoutCommentsNestedInput
    parent_coment?: commentsUpdateOneWithoutSub_commentsNestedInput
  }

  export type commentsUncheckedUpdateWithoutSub_commentsInput = {
    comment_id?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    commentator_id?: NullableStringFieldUpdateOperationsInput | string | null
    commented_post_id?: NullableStringFieldUpdateOperationsInput | string | null
    parent_comment_id?: NullableStringFieldUpdateOperationsInput | string | null
    comment_likers?: usersUncheckedUpdateManyWithoutComments_likedNestedInput
  }

  export type commentsUpsertWithWhereUniqueWithoutParent_comentInput = {
    where: commentsWhereUniqueInput
    update: XOR<commentsUpdateWithoutParent_comentInput, commentsUncheckedUpdateWithoutParent_comentInput>
    create: XOR<commentsCreateWithoutParent_comentInput, commentsUncheckedCreateWithoutParent_comentInput>
  }

  export type commentsUpdateWithWhereUniqueWithoutParent_comentInput = {
    where: commentsWhereUniqueInput
    data: XOR<commentsUpdateWithoutParent_comentInput, commentsUncheckedUpdateWithoutParent_comentInput>
  }

  export type commentsUpdateManyWithWhereWithoutParent_comentInput = {
    where: commentsScalarWhereInput
    data: XOR<commentsUpdateManyMutationInput, commentsUncheckedUpdateManyWithoutParent_comentInput>
  }

  export type postsCreateWithoutMediasInput = {
    post_id?: string
    title: string
    description?: string | null
    price?: bigint | number | null
    created_at?: Date | string
    post_category?: post_categoriesCreateNestedOneWithoutPostsInput
    post_likers?: usersCreateNestedManyWithoutPosts_likedInput
    author: usersCreateNestedOneWithoutUser_postsInput
    comments?: commentsCreateNestedManyWithoutCommented_postInput
    users_saved_posts?: users_saved_postsCreateNestedManyWithoutSaved_postInput
  }

  export type postsUncheckedCreateWithoutMediasInput = {
    post_id?: string
    title: string
    description?: string | null
    price?: bigint | number | null
    created_at?: Date | string
    post_category_id?: string | null
    author_id: string
    post_likers?: usersUncheckedCreateNestedManyWithoutPosts_likedInput
    comments?: commentsUncheckedCreateNestedManyWithoutCommented_postInput
    users_saved_posts?: users_saved_postsUncheckedCreateNestedManyWithoutSaved_postInput
  }

  export type postsCreateOrConnectWithoutMediasInput = {
    where: postsWhereUniqueInput
    create: XOR<postsCreateWithoutMediasInput, postsUncheckedCreateWithoutMediasInput>
  }

  export type postsUpsertWithoutMediasInput = {
    update: XOR<postsUpdateWithoutMediasInput, postsUncheckedUpdateWithoutMediasInput>
    create: XOR<postsCreateWithoutMediasInput, postsUncheckedCreateWithoutMediasInput>
    where?: postsWhereInput
  }

  export type postsUpdateToOneWithWhereWithoutMediasInput = {
    where?: postsWhereInput
    data: XOR<postsUpdateWithoutMediasInput, postsUncheckedUpdateWithoutMediasInput>
  }

  export type postsUpdateWithoutMediasInput = {
    post_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    post_category?: post_categoriesUpdateOneWithoutPostsNestedInput
    post_likers?: usersUpdateManyWithoutPosts_likedNestedInput
    author?: usersUpdateOneRequiredWithoutUser_postsNestedInput
    comments?: commentsUpdateManyWithoutCommented_postNestedInput
    users_saved_posts?: users_saved_postsUpdateManyWithoutSaved_postNestedInput
  }

  export type postsUncheckedUpdateWithoutMediasInput = {
    post_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    post_category_id?: NullableStringFieldUpdateOperationsInput | string | null
    author_id?: StringFieldUpdateOperationsInput | string
    post_likers?: usersUncheckedUpdateManyWithoutPosts_likedNestedInput
    comments?: commentsUncheckedUpdateManyWithoutCommented_postNestedInput
    users_saved_posts?: users_saved_postsUncheckedUpdateManyWithoutSaved_postNestedInput
  }

  export type messagesCreateWithoutAttachmentsInput = {
    message_id?: string
    response_id?: string | null
    sender_id: string
    recipient_id: string
    message_status?: $Enums.message_status_enum | null
    content: string
    created_at?: Date | string | null
    conversations: conversationsCreateNestedOneWithoutMessagesInput
    users?: usersCreateNestedManyWithoutMessagesInput
  }

  export type messagesUncheckedCreateWithoutAttachmentsInput = {
    message_id?: string
    conversation_id: string
    response_id?: string | null
    sender_id: string
    recipient_id: string
    message_status?: $Enums.message_status_enum | null
    content: string
    created_at?: Date | string | null
    users?: usersUncheckedCreateNestedManyWithoutMessagesInput
  }

  export type messagesCreateOrConnectWithoutAttachmentsInput = {
    where: messagesWhereUniqueInput
    create: XOR<messagesCreateWithoutAttachmentsInput, messagesUncheckedCreateWithoutAttachmentsInput>
  }

  export type messagesUpsertWithoutAttachmentsInput = {
    update: XOR<messagesUpdateWithoutAttachmentsInput, messagesUncheckedUpdateWithoutAttachmentsInput>
    create: XOR<messagesCreateWithoutAttachmentsInput, messagesUncheckedCreateWithoutAttachmentsInput>
    where?: messagesWhereInput
  }

  export type messagesUpdateToOneWithWhereWithoutAttachmentsInput = {
    where?: messagesWhereInput
    data: XOR<messagesUpdateWithoutAttachmentsInput, messagesUncheckedUpdateWithoutAttachmentsInput>
  }

  export type messagesUpdateWithoutAttachmentsInput = {
    message_id?: StringFieldUpdateOperationsInput | string
    response_id?: NullableStringFieldUpdateOperationsInput | string | null
    sender_id?: StringFieldUpdateOperationsInput | string
    recipient_id?: StringFieldUpdateOperationsInput | string
    message_status?: NullableEnummessage_status_enumFieldUpdateOperationsInput | $Enums.message_status_enum | null
    content?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    conversations?: conversationsUpdateOneRequiredWithoutMessagesNestedInput
    users?: usersUpdateManyWithoutMessagesNestedInput
  }

  export type messagesUncheckedUpdateWithoutAttachmentsInput = {
    message_id?: StringFieldUpdateOperationsInput | string
    conversation_id?: StringFieldUpdateOperationsInput | string
    response_id?: NullableStringFieldUpdateOperationsInput | string | null
    sender_id?: StringFieldUpdateOperationsInput | string
    recipient_id?: StringFieldUpdateOperationsInput | string
    message_status?: NullableEnummessage_status_enumFieldUpdateOperationsInput | $Enums.message_status_enum | null
    content?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: usersUncheckedUpdateManyWithoutMessagesNestedInput
  }

  export type messagesCreateWithoutConversationsInput = {
    message_id?: string
    response_id?: string | null
    sender_id: string
    recipient_id: string
    message_status?: $Enums.message_status_enum | null
    content: string
    created_at?: Date | string | null
    attachments?: attachmentsCreateNestedManyWithoutMessagesInput
    users?: usersCreateNestedManyWithoutMessagesInput
  }

  export type messagesUncheckedCreateWithoutConversationsInput = {
    message_id?: string
    response_id?: string | null
    sender_id: string
    recipient_id: string
    message_status?: $Enums.message_status_enum | null
    content: string
    created_at?: Date | string | null
    attachments?: attachmentsUncheckedCreateNestedManyWithoutMessagesInput
    users?: usersUncheckedCreateNestedManyWithoutMessagesInput
  }

  export type messagesCreateOrConnectWithoutConversationsInput = {
    where: messagesWhereUniqueInput
    create: XOR<messagesCreateWithoutConversationsInput, messagesUncheckedCreateWithoutConversationsInput>
  }

  export type messagesCreateManyConversationsInputEnvelope = {
    data: messagesCreateManyConversationsInput | messagesCreateManyConversationsInput[]
    skipDuplicates?: boolean
  }

  export type usersCreateWithoutConversationsInput = {
    user_id?: string
    bio?: string | null
    email: string
    name: string
    password: string
    gender?: $Enums.gender_enum | null
    created_at?: Date | string | null
    stars?: number
    profile_photo_url?: string | null
    cover_photo_url?: string | null
    user_account_type?: $Enums.account_type
    preferences?: post_categoriesCreateNestedManyWithoutInterested_usersInput
    followers?: usersCreateNestedManyWithoutFollowingsInput
    followings?: usersCreateNestedManyWithoutFollowersInput
    user_posts?: postsCreateNestedManyWithoutAuthorInput
    posts_liked?: postsCreateNestedManyWithoutPost_likersInput
    comments_liked?: commentsCreateNestedManyWithoutComment_likersInput
    messages?: messagesCreateNestedManyWithoutUsersInput
    user_sessions?: sessionsCreateNestedManyWithoutSession_userInput
    nofitications?: nofiticationsCreateNestedManyWithoutUsersInput
    users_saved_posts?: users_saved_postsCreateNestedManyWithoutUser_savingInput
    comments?: commentsCreateNestedManyWithoutCommentatorInput
  }

  export type usersUncheckedCreateWithoutConversationsInput = {
    user_id?: string
    bio?: string | null
    email: string
    name: string
    password: string
    gender?: $Enums.gender_enum | null
    created_at?: Date | string | null
    stars?: number
    profile_photo_url?: string | null
    cover_photo_url?: string | null
    user_account_type?: $Enums.account_type
    preferences?: post_categoriesUncheckedCreateNestedManyWithoutInterested_usersInput
    followers?: usersUncheckedCreateNestedManyWithoutFollowingsInput
    followings?: usersUncheckedCreateNestedManyWithoutFollowersInput
    user_posts?: postsUncheckedCreateNestedManyWithoutAuthorInput
    posts_liked?: postsUncheckedCreateNestedManyWithoutPost_likersInput
    comments_liked?: commentsUncheckedCreateNestedManyWithoutComment_likersInput
    messages?: messagesUncheckedCreateNestedManyWithoutUsersInput
    user_sessions?: sessionsUncheckedCreateNestedManyWithoutSession_userInput
    nofitications?: nofiticationsUncheckedCreateNestedManyWithoutUsersInput
    users_saved_posts?: users_saved_postsUncheckedCreateNestedManyWithoutUser_savingInput
    comments?: commentsUncheckedCreateNestedManyWithoutCommentatorInput
  }

  export type usersCreateOrConnectWithoutConversationsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutConversationsInput, usersUncheckedCreateWithoutConversationsInput>
  }

  export type messagesUpsertWithWhereUniqueWithoutConversationsInput = {
    where: messagesWhereUniqueInput
    update: XOR<messagesUpdateWithoutConversationsInput, messagesUncheckedUpdateWithoutConversationsInput>
    create: XOR<messagesCreateWithoutConversationsInput, messagesUncheckedCreateWithoutConversationsInput>
  }

  export type messagesUpdateWithWhereUniqueWithoutConversationsInput = {
    where: messagesWhereUniqueInput
    data: XOR<messagesUpdateWithoutConversationsInput, messagesUncheckedUpdateWithoutConversationsInput>
  }

  export type messagesUpdateManyWithWhereWithoutConversationsInput = {
    where: messagesScalarWhereInput
    data: XOR<messagesUpdateManyMutationInput, messagesUncheckedUpdateManyWithoutConversationsInput>
  }

  export type usersUpsertWithWhereUniqueWithoutConversationsInput = {
    where: usersWhereUniqueInput
    update: XOR<usersUpdateWithoutConversationsInput, usersUncheckedUpdateWithoutConversationsInput>
    create: XOR<usersCreateWithoutConversationsInput, usersUncheckedCreateWithoutConversationsInput>
  }

  export type usersUpdateWithWhereUniqueWithoutConversationsInput = {
    where: usersWhereUniqueInput
    data: XOR<usersUpdateWithoutConversationsInput, usersUncheckedUpdateWithoutConversationsInput>
  }

  export type usersUpdateManyWithWhereWithoutConversationsInput = {
    where: usersScalarWhereInput
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyWithoutConversationsInput>
  }

  export type attachmentsCreateWithoutMessagesInput = {
    attachment_id?: string
    file_url: string
    file_type?: $Enums.file_type_enum | null
    created_at?: Date | string | null
  }

  export type attachmentsUncheckedCreateWithoutMessagesInput = {
    attachment_id?: string
    file_url: string
    file_type?: $Enums.file_type_enum | null
    created_at?: Date | string | null
  }

  export type attachmentsCreateOrConnectWithoutMessagesInput = {
    where: attachmentsWhereUniqueInput
    create: XOR<attachmentsCreateWithoutMessagesInput, attachmentsUncheckedCreateWithoutMessagesInput>
  }

  export type attachmentsCreateManyMessagesInputEnvelope = {
    data: attachmentsCreateManyMessagesInput | attachmentsCreateManyMessagesInput[]
    skipDuplicates?: boolean
  }

  export type conversationsCreateWithoutMessagesInput = {
    conversation_id?: string
    conversation_type?: $Enums.conversation_type_enum | null
    conversation_name?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    product_id: string
    users?: usersCreateNestedManyWithoutConversationsInput
  }

  export type conversationsUncheckedCreateWithoutMessagesInput = {
    conversation_id?: string
    conversation_type?: $Enums.conversation_type_enum | null
    conversation_name?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    product_id: string
    users?: usersUncheckedCreateNestedManyWithoutConversationsInput
  }

  export type conversationsCreateOrConnectWithoutMessagesInput = {
    where: conversationsWhereUniqueInput
    create: XOR<conversationsCreateWithoutMessagesInput, conversationsUncheckedCreateWithoutMessagesInput>
  }

  export type usersCreateWithoutMessagesInput = {
    user_id?: string
    bio?: string | null
    email: string
    name: string
    password: string
    gender?: $Enums.gender_enum | null
    created_at?: Date | string | null
    stars?: number
    profile_photo_url?: string | null
    cover_photo_url?: string | null
    user_account_type?: $Enums.account_type
    preferences?: post_categoriesCreateNestedManyWithoutInterested_usersInput
    followers?: usersCreateNestedManyWithoutFollowingsInput
    followings?: usersCreateNestedManyWithoutFollowersInput
    user_posts?: postsCreateNestedManyWithoutAuthorInput
    posts_liked?: postsCreateNestedManyWithoutPost_likersInput
    comments_liked?: commentsCreateNestedManyWithoutComment_likersInput
    conversations?: conversationsCreateNestedManyWithoutUsersInput
    user_sessions?: sessionsCreateNestedManyWithoutSession_userInput
    nofitications?: nofiticationsCreateNestedManyWithoutUsersInput
    users_saved_posts?: users_saved_postsCreateNestedManyWithoutUser_savingInput
    comments?: commentsCreateNestedManyWithoutCommentatorInput
  }

  export type usersUncheckedCreateWithoutMessagesInput = {
    user_id?: string
    bio?: string | null
    email: string
    name: string
    password: string
    gender?: $Enums.gender_enum | null
    created_at?: Date | string | null
    stars?: number
    profile_photo_url?: string | null
    cover_photo_url?: string | null
    user_account_type?: $Enums.account_type
    preferences?: post_categoriesUncheckedCreateNestedManyWithoutInterested_usersInput
    followers?: usersUncheckedCreateNestedManyWithoutFollowingsInput
    followings?: usersUncheckedCreateNestedManyWithoutFollowersInput
    user_posts?: postsUncheckedCreateNestedManyWithoutAuthorInput
    posts_liked?: postsUncheckedCreateNestedManyWithoutPost_likersInput
    comments_liked?: commentsUncheckedCreateNestedManyWithoutComment_likersInput
    conversations?: conversationsUncheckedCreateNestedManyWithoutUsersInput
    user_sessions?: sessionsUncheckedCreateNestedManyWithoutSession_userInput
    nofitications?: nofiticationsUncheckedCreateNestedManyWithoutUsersInput
    users_saved_posts?: users_saved_postsUncheckedCreateNestedManyWithoutUser_savingInput
    comments?: commentsUncheckedCreateNestedManyWithoutCommentatorInput
  }

  export type usersCreateOrConnectWithoutMessagesInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutMessagesInput, usersUncheckedCreateWithoutMessagesInput>
  }

  export type attachmentsUpsertWithWhereUniqueWithoutMessagesInput = {
    where: attachmentsWhereUniqueInput
    update: XOR<attachmentsUpdateWithoutMessagesInput, attachmentsUncheckedUpdateWithoutMessagesInput>
    create: XOR<attachmentsCreateWithoutMessagesInput, attachmentsUncheckedCreateWithoutMessagesInput>
  }

  export type attachmentsUpdateWithWhereUniqueWithoutMessagesInput = {
    where: attachmentsWhereUniqueInput
    data: XOR<attachmentsUpdateWithoutMessagesInput, attachmentsUncheckedUpdateWithoutMessagesInput>
  }

  export type attachmentsUpdateManyWithWhereWithoutMessagesInput = {
    where: attachmentsScalarWhereInput
    data: XOR<attachmentsUpdateManyMutationInput, attachmentsUncheckedUpdateManyWithoutMessagesInput>
  }

  export type attachmentsScalarWhereInput = {
    AND?: attachmentsScalarWhereInput | attachmentsScalarWhereInput[]
    OR?: attachmentsScalarWhereInput[]
    NOT?: attachmentsScalarWhereInput | attachmentsScalarWhereInput[]
    attachment_id?: UuidFilter<"attachments"> | string
    message_id?: UuidFilter<"attachments"> | string
    file_url?: StringFilter<"attachments"> | string
    file_type?: Enumfile_type_enumNullableFilter<"attachments"> | $Enums.file_type_enum | null
    created_at?: DateTimeNullableFilter<"attachments"> | Date | string | null
  }

  export type conversationsUpsertWithoutMessagesInput = {
    update: XOR<conversationsUpdateWithoutMessagesInput, conversationsUncheckedUpdateWithoutMessagesInput>
    create: XOR<conversationsCreateWithoutMessagesInput, conversationsUncheckedCreateWithoutMessagesInput>
    where?: conversationsWhereInput
  }

  export type conversationsUpdateToOneWithWhereWithoutMessagesInput = {
    where?: conversationsWhereInput
    data: XOR<conversationsUpdateWithoutMessagesInput, conversationsUncheckedUpdateWithoutMessagesInput>
  }

  export type conversationsUpdateWithoutMessagesInput = {
    conversation_id?: StringFieldUpdateOperationsInput | string
    conversation_type?: NullableEnumconversation_type_enumFieldUpdateOperationsInput | $Enums.conversation_type_enum | null
    conversation_name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    product_id?: StringFieldUpdateOperationsInput | string
    users?: usersUpdateManyWithoutConversationsNestedInput
  }

  export type conversationsUncheckedUpdateWithoutMessagesInput = {
    conversation_id?: StringFieldUpdateOperationsInput | string
    conversation_type?: NullableEnumconversation_type_enumFieldUpdateOperationsInput | $Enums.conversation_type_enum | null
    conversation_name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    product_id?: StringFieldUpdateOperationsInput | string
    users?: usersUncheckedUpdateManyWithoutConversationsNestedInput
  }

  export type usersUpsertWithWhereUniqueWithoutMessagesInput = {
    where: usersWhereUniqueInput
    update: XOR<usersUpdateWithoutMessagesInput, usersUncheckedUpdateWithoutMessagesInput>
    create: XOR<usersCreateWithoutMessagesInput, usersUncheckedCreateWithoutMessagesInput>
  }

  export type usersUpdateWithWhereUniqueWithoutMessagesInput = {
    where: usersWhereUniqueInput
    data: XOR<usersUpdateWithoutMessagesInput, usersUncheckedUpdateWithoutMessagesInput>
  }

  export type usersUpdateManyWithWhereWithoutMessagesInput = {
    where: usersScalarWhereInput
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyWithoutMessagesInput>
  }

  export type usersUpdateWithoutNofiticationsInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    gender?: NullableEnumgender_enumFieldUpdateOperationsInput | $Enums.gender_enum | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stars?: IntFieldUpdateOperationsInput | number
    profile_photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    cover_photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    user_account_type?: Enumaccount_typeFieldUpdateOperationsInput | $Enums.account_type
    preferences?: post_categoriesUpdateManyWithoutInterested_usersNestedInput
    followers?: usersUpdateManyWithoutFollowingsNestedInput
    followings?: usersUpdateManyWithoutFollowersNestedInput
    user_posts?: postsUpdateManyWithoutAuthorNestedInput
    posts_liked?: postsUpdateManyWithoutPost_likersNestedInput
    comments_liked?: commentsUpdateManyWithoutComment_likersNestedInput
    messages?: messagesUpdateManyWithoutUsersNestedInput
    conversations?: conversationsUpdateManyWithoutUsersNestedInput
    user_sessions?: sessionsUpdateManyWithoutSession_userNestedInput
    users_saved_posts?: users_saved_postsUpdateManyWithoutUser_savingNestedInput
    comments?: commentsUpdateManyWithoutCommentatorNestedInput
  }

  export type usersUncheckedUpdateWithoutNofiticationsInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    gender?: NullableEnumgender_enumFieldUpdateOperationsInput | $Enums.gender_enum | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stars?: IntFieldUpdateOperationsInput | number
    profile_photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    cover_photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    user_account_type?: Enumaccount_typeFieldUpdateOperationsInput | $Enums.account_type
    preferences?: post_categoriesUncheckedUpdateManyWithoutInterested_usersNestedInput
    followers?: usersUncheckedUpdateManyWithoutFollowingsNestedInput
    followings?: usersUncheckedUpdateManyWithoutFollowersNestedInput
    user_posts?: postsUncheckedUpdateManyWithoutAuthorNestedInput
    posts_liked?: postsUncheckedUpdateManyWithoutPost_likersNestedInput
    comments_liked?: commentsUncheckedUpdateManyWithoutComment_likersNestedInput
    messages?: messagesUncheckedUpdateManyWithoutUsersNestedInput
    conversations?: conversationsUncheckedUpdateManyWithoutUsersNestedInput
    user_sessions?: sessionsUncheckedUpdateManyWithoutSession_userNestedInput
    users_saved_posts?: users_saved_postsUncheckedUpdateManyWithoutUser_savingNestedInput
    comments?: commentsUncheckedUpdateManyWithoutCommentatorNestedInput
  }

  export type usersUncheckedUpdateManyWithoutNofiticationsInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    gender?: NullableEnumgender_enumFieldUpdateOperationsInput | $Enums.gender_enum | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stars?: IntFieldUpdateOperationsInput | number
    profile_photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    cover_photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    user_account_type?: Enumaccount_typeFieldUpdateOperationsInput | $Enums.account_type
  }

  export type postsCreateManyAuthorInput = {
    post_id?: string
    title: string
    description?: string | null
    price?: bigint | number | null
    created_at?: Date | string
    post_category_id?: string | null
  }

  export type sessionsCreateManySession_userInput = {
    session_id?: string
    session_token: string
    ip_addr?: string | null
    user_agent?: string | null
  }

  export type users_saved_postsCreateManyUser_savingInput = {
    post_saving_id?: string
    saved_at?: Date | string
    saved_post_id?: string | null
  }

  export type commentsCreateManyCommentatorInput = {
    comment_id?: string
    body: string
    created_at?: Date | string | null
    commented_post_id?: string | null
    parent_comment_id?: string | null
  }

  export type post_categoriesUpdateWithoutInterested_usersInput = {
    category_id?: StringFieldUpdateOperationsInput | string
    category_value?: StringFieldUpdateOperationsInput | string
    parent_category?: post_categoriesUpdateOneWithoutSub_categoriesNestedInput
    sub_categories?: post_categoriesUpdateManyWithoutParent_categoryNestedInput
    posts?: postsUpdateManyWithoutPost_categoryNestedInput
  }

  export type post_categoriesUncheckedUpdateWithoutInterested_usersInput = {
    category_id?: StringFieldUpdateOperationsInput | string
    category_value?: StringFieldUpdateOperationsInput | string
    parent_category_id?: NullableStringFieldUpdateOperationsInput | string | null
    sub_categories?: post_categoriesUncheckedUpdateManyWithoutParent_categoryNestedInput
    posts?: postsUncheckedUpdateManyWithoutPost_categoryNestedInput
  }

  export type post_categoriesUncheckedUpdateManyWithoutInterested_usersInput = {
    category_id?: StringFieldUpdateOperationsInput | string
    category_value?: StringFieldUpdateOperationsInput | string
    parent_category_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type usersUpdateWithoutFollowingsInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    gender?: NullableEnumgender_enumFieldUpdateOperationsInput | $Enums.gender_enum | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stars?: IntFieldUpdateOperationsInput | number
    profile_photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    cover_photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    user_account_type?: Enumaccount_typeFieldUpdateOperationsInput | $Enums.account_type
    preferences?: post_categoriesUpdateManyWithoutInterested_usersNestedInput
    followers?: usersUpdateManyWithoutFollowingsNestedInput
    user_posts?: postsUpdateManyWithoutAuthorNestedInput
    posts_liked?: postsUpdateManyWithoutPost_likersNestedInput
    comments_liked?: commentsUpdateManyWithoutComment_likersNestedInput
    messages?: messagesUpdateManyWithoutUsersNestedInput
    conversations?: conversationsUpdateManyWithoutUsersNestedInput
    user_sessions?: sessionsUpdateManyWithoutSession_userNestedInput
    nofitications?: nofiticationsUpdateManyWithoutUsersNestedInput
    users_saved_posts?: users_saved_postsUpdateManyWithoutUser_savingNestedInput
    comments?: commentsUpdateManyWithoutCommentatorNestedInput
  }

  export type usersUncheckedUpdateWithoutFollowingsInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    gender?: NullableEnumgender_enumFieldUpdateOperationsInput | $Enums.gender_enum | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stars?: IntFieldUpdateOperationsInput | number
    profile_photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    cover_photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    user_account_type?: Enumaccount_typeFieldUpdateOperationsInput | $Enums.account_type
    preferences?: post_categoriesUncheckedUpdateManyWithoutInterested_usersNestedInput
    followers?: usersUncheckedUpdateManyWithoutFollowingsNestedInput
    user_posts?: postsUncheckedUpdateManyWithoutAuthorNestedInput
    posts_liked?: postsUncheckedUpdateManyWithoutPost_likersNestedInput
    comments_liked?: commentsUncheckedUpdateManyWithoutComment_likersNestedInput
    messages?: messagesUncheckedUpdateManyWithoutUsersNestedInput
    conversations?: conversationsUncheckedUpdateManyWithoutUsersNestedInput
    user_sessions?: sessionsUncheckedUpdateManyWithoutSession_userNestedInput
    nofitications?: nofiticationsUncheckedUpdateManyWithoutUsersNestedInput
    users_saved_posts?: users_saved_postsUncheckedUpdateManyWithoutUser_savingNestedInput
    comments?: commentsUncheckedUpdateManyWithoutCommentatorNestedInput
  }

  export type usersUncheckedUpdateManyWithoutFollowingsInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    gender?: NullableEnumgender_enumFieldUpdateOperationsInput | $Enums.gender_enum | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stars?: IntFieldUpdateOperationsInput | number
    profile_photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    cover_photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    user_account_type?: Enumaccount_typeFieldUpdateOperationsInput | $Enums.account_type
  }

  export type usersUpdateWithoutFollowersInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    gender?: NullableEnumgender_enumFieldUpdateOperationsInput | $Enums.gender_enum | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stars?: IntFieldUpdateOperationsInput | number
    profile_photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    cover_photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    user_account_type?: Enumaccount_typeFieldUpdateOperationsInput | $Enums.account_type
    preferences?: post_categoriesUpdateManyWithoutInterested_usersNestedInput
    followings?: usersUpdateManyWithoutFollowersNestedInput
    user_posts?: postsUpdateManyWithoutAuthorNestedInput
    posts_liked?: postsUpdateManyWithoutPost_likersNestedInput
    comments_liked?: commentsUpdateManyWithoutComment_likersNestedInput
    messages?: messagesUpdateManyWithoutUsersNestedInput
    conversations?: conversationsUpdateManyWithoutUsersNestedInput
    user_sessions?: sessionsUpdateManyWithoutSession_userNestedInput
    nofitications?: nofiticationsUpdateManyWithoutUsersNestedInput
    users_saved_posts?: users_saved_postsUpdateManyWithoutUser_savingNestedInput
    comments?: commentsUpdateManyWithoutCommentatorNestedInput
  }

  export type usersUncheckedUpdateWithoutFollowersInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    gender?: NullableEnumgender_enumFieldUpdateOperationsInput | $Enums.gender_enum | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stars?: IntFieldUpdateOperationsInput | number
    profile_photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    cover_photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    user_account_type?: Enumaccount_typeFieldUpdateOperationsInput | $Enums.account_type
    preferences?: post_categoriesUncheckedUpdateManyWithoutInterested_usersNestedInput
    followings?: usersUncheckedUpdateManyWithoutFollowersNestedInput
    user_posts?: postsUncheckedUpdateManyWithoutAuthorNestedInput
    posts_liked?: postsUncheckedUpdateManyWithoutPost_likersNestedInput
    comments_liked?: commentsUncheckedUpdateManyWithoutComment_likersNestedInput
    messages?: messagesUncheckedUpdateManyWithoutUsersNestedInput
    conversations?: conversationsUncheckedUpdateManyWithoutUsersNestedInput
    user_sessions?: sessionsUncheckedUpdateManyWithoutSession_userNestedInput
    nofitications?: nofiticationsUncheckedUpdateManyWithoutUsersNestedInput
    users_saved_posts?: users_saved_postsUncheckedUpdateManyWithoutUser_savingNestedInput
    comments?: commentsUncheckedUpdateManyWithoutCommentatorNestedInput
  }

  export type usersUncheckedUpdateManyWithoutFollowersInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    gender?: NullableEnumgender_enumFieldUpdateOperationsInput | $Enums.gender_enum | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stars?: IntFieldUpdateOperationsInput | number
    profile_photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    cover_photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    user_account_type?: Enumaccount_typeFieldUpdateOperationsInput | $Enums.account_type
  }

  export type postsUpdateWithoutAuthorInput = {
    post_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    post_category?: post_categoriesUpdateOneWithoutPostsNestedInput
    post_likers?: usersUpdateManyWithoutPosts_likedNestedInput
    comments?: commentsUpdateManyWithoutCommented_postNestedInput
    medias?: mediasUpdateManyWithoutMedia_postNestedInput
    users_saved_posts?: users_saved_postsUpdateManyWithoutSaved_postNestedInput
  }

  export type postsUncheckedUpdateWithoutAuthorInput = {
    post_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    post_category_id?: NullableStringFieldUpdateOperationsInput | string | null
    post_likers?: usersUncheckedUpdateManyWithoutPosts_likedNestedInput
    comments?: commentsUncheckedUpdateManyWithoutCommented_postNestedInput
    medias?: mediasUncheckedUpdateManyWithoutMedia_postNestedInput
    users_saved_posts?: users_saved_postsUncheckedUpdateManyWithoutSaved_postNestedInput
  }

  export type postsUncheckedUpdateManyWithoutAuthorInput = {
    post_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    post_category_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type postsUpdateWithoutPost_likersInput = {
    post_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    post_category?: post_categoriesUpdateOneWithoutPostsNestedInput
    author?: usersUpdateOneRequiredWithoutUser_postsNestedInput
    comments?: commentsUpdateManyWithoutCommented_postNestedInput
    medias?: mediasUpdateManyWithoutMedia_postNestedInput
    users_saved_posts?: users_saved_postsUpdateManyWithoutSaved_postNestedInput
  }

  export type postsUncheckedUpdateWithoutPost_likersInput = {
    post_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    post_category_id?: NullableStringFieldUpdateOperationsInput | string | null
    author_id?: StringFieldUpdateOperationsInput | string
    comments?: commentsUncheckedUpdateManyWithoutCommented_postNestedInput
    medias?: mediasUncheckedUpdateManyWithoutMedia_postNestedInput
    users_saved_posts?: users_saved_postsUncheckedUpdateManyWithoutSaved_postNestedInput
  }

  export type postsUncheckedUpdateManyWithoutPost_likersInput = {
    post_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    post_category_id?: NullableStringFieldUpdateOperationsInput | string | null
    author_id?: StringFieldUpdateOperationsInput | string
  }

  export type commentsUpdateWithoutComment_likersInput = {
    comment_id?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    commentator?: usersUpdateOneWithoutCommentsNestedInput
    commented_post?: postsUpdateOneWithoutCommentsNestedInput
    parent_coment?: commentsUpdateOneWithoutSub_commentsNestedInput
    sub_comments?: commentsUpdateManyWithoutParent_comentNestedInput
  }

  export type commentsUncheckedUpdateWithoutComment_likersInput = {
    comment_id?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    commentator_id?: NullableStringFieldUpdateOperationsInput | string | null
    commented_post_id?: NullableStringFieldUpdateOperationsInput | string | null
    parent_comment_id?: NullableStringFieldUpdateOperationsInput | string | null
    sub_comments?: commentsUncheckedUpdateManyWithoutParent_comentNestedInput
  }

  export type commentsUncheckedUpdateManyWithoutComment_likersInput = {
    comment_id?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    commentator_id?: NullableStringFieldUpdateOperationsInput | string | null
    commented_post_id?: NullableStringFieldUpdateOperationsInput | string | null
    parent_comment_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type messagesUpdateWithoutUsersInput = {
    message_id?: StringFieldUpdateOperationsInput | string
    response_id?: NullableStringFieldUpdateOperationsInput | string | null
    sender_id?: StringFieldUpdateOperationsInput | string
    recipient_id?: StringFieldUpdateOperationsInput | string
    message_status?: NullableEnummessage_status_enumFieldUpdateOperationsInput | $Enums.message_status_enum | null
    content?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attachments?: attachmentsUpdateManyWithoutMessagesNestedInput
    conversations?: conversationsUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type messagesUncheckedUpdateWithoutUsersInput = {
    message_id?: StringFieldUpdateOperationsInput | string
    conversation_id?: StringFieldUpdateOperationsInput | string
    response_id?: NullableStringFieldUpdateOperationsInput | string | null
    sender_id?: StringFieldUpdateOperationsInput | string
    recipient_id?: StringFieldUpdateOperationsInput | string
    message_status?: NullableEnummessage_status_enumFieldUpdateOperationsInput | $Enums.message_status_enum | null
    content?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attachments?: attachmentsUncheckedUpdateManyWithoutMessagesNestedInput
  }

  export type messagesUncheckedUpdateManyWithoutUsersInput = {
    message_id?: StringFieldUpdateOperationsInput | string
    conversation_id?: StringFieldUpdateOperationsInput | string
    response_id?: NullableStringFieldUpdateOperationsInput | string | null
    sender_id?: StringFieldUpdateOperationsInput | string
    recipient_id?: StringFieldUpdateOperationsInput | string
    message_status?: NullableEnummessage_status_enumFieldUpdateOperationsInput | $Enums.message_status_enum | null
    content?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type conversationsUpdateWithoutUsersInput = {
    conversation_id?: StringFieldUpdateOperationsInput | string
    conversation_type?: NullableEnumconversation_type_enumFieldUpdateOperationsInput | $Enums.conversation_type_enum | null
    conversation_name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    product_id?: StringFieldUpdateOperationsInput | string
    messages?: messagesUpdateManyWithoutConversationsNestedInput
  }

  export type conversationsUncheckedUpdateWithoutUsersInput = {
    conversation_id?: StringFieldUpdateOperationsInput | string
    conversation_type?: NullableEnumconversation_type_enumFieldUpdateOperationsInput | $Enums.conversation_type_enum | null
    conversation_name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    product_id?: StringFieldUpdateOperationsInput | string
    messages?: messagesUncheckedUpdateManyWithoutConversationsNestedInput
  }

  export type conversationsUncheckedUpdateManyWithoutUsersInput = {
    conversation_id?: StringFieldUpdateOperationsInput | string
    conversation_type?: NullableEnumconversation_type_enumFieldUpdateOperationsInput | $Enums.conversation_type_enum | null
    conversation_name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    product_id?: StringFieldUpdateOperationsInput | string
  }

  export type sessionsUpdateWithoutSession_userInput = {
    session_id?: StringFieldUpdateOperationsInput | string
    session_token?: StringFieldUpdateOperationsInput | string
    ip_addr?: NullableStringFieldUpdateOperationsInput | string | null
    user_agent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type sessionsUncheckedUpdateWithoutSession_userInput = {
    session_id?: StringFieldUpdateOperationsInput | string
    session_token?: StringFieldUpdateOperationsInput | string
    ip_addr?: NullableStringFieldUpdateOperationsInput | string | null
    user_agent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type sessionsUncheckedUpdateManyWithoutSession_userInput = {
    session_id?: StringFieldUpdateOperationsInput | string
    session_token?: StringFieldUpdateOperationsInput | string
    ip_addr?: NullableStringFieldUpdateOperationsInput | string | null
    user_agent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type nofiticationsUpdateWithoutUsersInput = {
    notification_id?: StringFieldUpdateOperationsInput | string
    sender_name?: StringFieldUpdateOperationsInput | string
    receiver_name?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type nofiticationsUncheckedUpdateWithoutUsersInput = {
    notification_id?: StringFieldUpdateOperationsInput | string
    sender_name?: StringFieldUpdateOperationsInput | string
    receiver_name?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type nofiticationsUncheckedUpdateManyWithoutUsersInput = {
    notification_id?: StringFieldUpdateOperationsInput | string
    sender_name?: StringFieldUpdateOperationsInput | string
    receiver_name?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type users_saved_postsUpdateWithoutUser_savingInput = {
    post_saving_id?: StringFieldUpdateOperationsInput | string
    saved_at?: DateTimeFieldUpdateOperationsInput | Date | string
    saved_post?: postsUpdateOneWithoutUsers_saved_postsNestedInput
  }

  export type users_saved_postsUncheckedUpdateWithoutUser_savingInput = {
    post_saving_id?: StringFieldUpdateOperationsInput | string
    saved_at?: DateTimeFieldUpdateOperationsInput | Date | string
    saved_post_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type users_saved_postsUncheckedUpdateManyWithoutUser_savingInput = {
    post_saving_id?: StringFieldUpdateOperationsInput | string
    saved_at?: DateTimeFieldUpdateOperationsInput | Date | string
    saved_post_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type commentsUpdateWithoutCommentatorInput = {
    comment_id?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comment_likers?: usersUpdateManyWithoutComments_likedNestedInput
    commented_post?: postsUpdateOneWithoutCommentsNestedInput
    parent_coment?: commentsUpdateOneWithoutSub_commentsNestedInput
    sub_comments?: commentsUpdateManyWithoutParent_comentNestedInput
  }

  export type commentsUncheckedUpdateWithoutCommentatorInput = {
    comment_id?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    commented_post_id?: NullableStringFieldUpdateOperationsInput | string | null
    parent_comment_id?: NullableStringFieldUpdateOperationsInput | string | null
    comment_likers?: usersUncheckedUpdateManyWithoutComments_likedNestedInput
    sub_comments?: commentsUncheckedUpdateManyWithoutParent_comentNestedInput
  }

  export type commentsUncheckedUpdateManyWithoutCommentatorInput = {
    comment_id?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    commented_post_id?: NullableStringFieldUpdateOperationsInput | string | null
    parent_comment_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type post_categoriesCreateManyParent_categoryInput = {
    category_id?: string
    category_value: string
  }

  export type postsCreateManyPost_categoryInput = {
    post_id?: string
    title: string
    description?: string | null
    price?: bigint | number | null
    created_at?: Date | string
    author_id: string
  }

  export type post_categoriesUpdateWithoutParent_categoryInput = {
    category_id?: StringFieldUpdateOperationsInput | string
    category_value?: StringFieldUpdateOperationsInput | string
    sub_categories?: post_categoriesUpdateManyWithoutParent_categoryNestedInput
    posts?: postsUpdateManyWithoutPost_categoryNestedInput
    interested_users?: usersUpdateManyWithoutPreferencesNestedInput
  }

  export type post_categoriesUncheckedUpdateWithoutParent_categoryInput = {
    category_id?: StringFieldUpdateOperationsInput | string
    category_value?: StringFieldUpdateOperationsInput | string
    sub_categories?: post_categoriesUncheckedUpdateManyWithoutParent_categoryNestedInput
    posts?: postsUncheckedUpdateManyWithoutPost_categoryNestedInput
    interested_users?: usersUncheckedUpdateManyWithoutPreferencesNestedInput
  }

  export type post_categoriesUncheckedUpdateManyWithoutParent_categoryInput = {
    category_id?: StringFieldUpdateOperationsInput | string
    category_value?: StringFieldUpdateOperationsInput | string
  }

  export type postsUpdateWithoutPost_categoryInput = {
    post_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    post_likers?: usersUpdateManyWithoutPosts_likedNestedInput
    author?: usersUpdateOneRequiredWithoutUser_postsNestedInput
    comments?: commentsUpdateManyWithoutCommented_postNestedInput
    medias?: mediasUpdateManyWithoutMedia_postNestedInput
    users_saved_posts?: users_saved_postsUpdateManyWithoutSaved_postNestedInput
  }

  export type postsUncheckedUpdateWithoutPost_categoryInput = {
    post_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    author_id?: StringFieldUpdateOperationsInput | string
    post_likers?: usersUncheckedUpdateManyWithoutPosts_likedNestedInput
    comments?: commentsUncheckedUpdateManyWithoutCommented_postNestedInput
    medias?: mediasUncheckedUpdateManyWithoutMedia_postNestedInput
    users_saved_posts?: users_saved_postsUncheckedUpdateManyWithoutSaved_postNestedInput
  }

  export type postsUncheckedUpdateManyWithoutPost_categoryInput = {
    post_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    author_id?: StringFieldUpdateOperationsInput | string
  }

  export type usersUpdateWithoutPreferencesInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    gender?: NullableEnumgender_enumFieldUpdateOperationsInput | $Enums.gender_enum | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stars?: IntFieldUpdateOperationsInput | number
    profile_photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    cover_photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    user_account_type?: Enumaccount_typeFieldUpdateOperationsInput | $Enums.account_type
    followers?: usersUpdateManyWithoutFollowingsNestedInput
    followings?: usersUpdateManyWithoutFollowersNestedInput
    user_posts?: postsUpdateManyWithoutAuthorNestedInput
    posts_liked?: postsUpdateManyWithoutPost_likersNestedInput
    comments_liked?: commentsUpdateManyWithoutComment_likersNestedInput
    messages?: messagesUpdateManyWithoutUsersNestedInput
    conversations?: conversationsUpdateManyWithoutUsersNestedInput
    user_sessions?: sessionsUpdateManyWithoutSession_userNestedInput
    nofitications?: nofiticationsUpdateManyWithoutUsersNestedInput
    users_saved_posts?: users_saved_postsUpdateManyWithoutUser_savingNestedInput
    comments?: commentsUpdateManyWithoutCommentatorNestedInput
  }

  export type usersUncheckedUpdateWithoutPreferencesInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    gender?: NullableEnumgender_enumFieldUpdateOperationsInput | $Enums.gender_enum | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stars?: IntFieldUpdateOperationsInput | number
    profile_photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    cover_photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    user_account_type?: Enumaccount_typeFieldUpdateOperationsInput | $Enums.account_type
    followers?: usersUncheckedUpdateManyWithoutFollowingsNestedInput
    followings?: usersUncheckedUpdateManyWithoutFollowersNestedInput
    user_posts?: postsUncheckedUpdateManyWithoutAuthorNestedInput
    posts_liked?: postsUncheckedUpdateManyWithoutPost_likersNestedInput
    comments_liked?: commentsUncheckedUpdateManyWithoutComment_likersNestedInput
    messages?: messagesUncheckedUpdateManyWithoutUsersNestedInput
    conversations?: conversationsUncheckedUpdateManyWithoutUsersNestedInput
    user_sessions?: sessionsUncheckedUpdateManyWithoutSession_userNestedInput
    nofitications?: nofiticationsUncheckedUpdateManyWithoutUsersNestedInput
    users_saved_posts?: users_saved_postsUncheckedUpdateManyWithoutUser_savingNestedInput
    comments?: commentsUncheckedUpdateManyWithoutCommentatorNestedInput
  }

  export type usersUncheckedUpdateManyWithoutPreferencesInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    gender?: NullableEnumgender_enumFieldUpdateOperationsInput | $Enums.gender_enum | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stars?: IntFieldUpdateOperationsInput | number
    profile_photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    cover_photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    user_account_type?: Enumaccount_typeFieldUpdateOperationsInput | $Enums.account_type
  }

  export type commentsCreateManyCommented_postInput = {
    comment_id?: string
    body: string
    created_at?: Date | string | null
    commentator_id?: string | null
    parent_comment_id?: string | null
  }

  export type mediasCreateManyMedia_postInput = {
    media_id?: string
    fileType: $Enums.file_type_enum
    encoding: string
    mimetype: string
    filename: string
    fileUrl: string
    path: string
    size: bigint | number
  }

  export type users_saved_postsCreateManySaved_postInput = {
    post_saving_id?: string
    saved_at?: Date | string
    user_saving_id?: string | null
  }

  export type usersUpdateWithoutPosts_likedInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    gender?: NullableEnumgender_enumFieldUpdateOperationsInput | $Enums.gender_enum | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stars?: IntFieldUpdateOperationsInput | number
    profile_photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    cover_photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    user_account_type?: Enumaccount_typeFieldUpdateOperationsInput | $Enums.account_type
    preferences?: post_categoriesUpdateManyWithoutInterested_usersNestedInput
    followers?: usersUpdateManyWithoutFollowingsNestedInput
    followings?: usersUpdateManyWithoutFollowersNestedInput
    user_posts?: postsUpdateManyWithoutAuthorNestedInput
    comments_liked?: commentsUpdateManyWithoutComment_likersNestedInput
    messages?: messagesUpdateManyWithoutUsersNestedInput
    conversations?: conversationsUpdateManyWithoutUsersNestedInput
    user_sessions?: sessionsUpdateManyWithoutSession_userNestedInput
    nofitications?: nofiticationsUpdateManyWithoutUsersNestedInput
    users_saved_posts?: users_saved_postsUpdateManyWithoutUser_savingNestedInput
    comments?: commentsUpdateManyWithoutCommentatorNestedInput
  }

  export type usersUncheckedUpdateWithoutPosts_likedInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    gender?: NullableEnumgender_enumFieldUpdateOperationsInput | $Enums.gender_enum | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stars?: IntFieldUpdateOperationsInput | number
    profile_photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    cover_photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    user_account_type?: Enumaccount_typeFieldUpdateOperationsInput | $Enums.account_type
    preferences?: post_categoriesUncheckedUpdateManyWithoutInterested_usersNestedInput
    followers?: usersUncheckedUpdateManyWithoutFollowingsNestedInput
    followings?: usersUncheckedUpdateManyWithoutFollowersNestedInput
    user_posts?: postsUncheckedUpdateManyWithoutAuthorNestedInput
    comments_liked?: commentsUncheckedUpdateManyWithoutComment_likersNestedInput
    messages?: messagesUncheckedUpdateManyWithoutUsersNestedInput
    conversations?: conversationsUncheckedUpdateManyWithoutUsersNestedInput
    user_sessions?: sessionsUncheckedUpdateManyWithoutSession_userNestedInput
    nofitications?: nofiticationsUncheckedUpdateManyWithoutUsersNestedInput
    users_saved_posts?: users_saved_postsUncheckedUpdateManyWithoutUser_savingNestedInput
    comments?: commentsUncheckedUpdateManyWithoutCommentatorNestedInput
  }

  export type usersUncheckedUpdateManyWithoutPosts_likedInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    gender?: NullableEnumgender_enumFieldUpdateOperationsInput | $Enums.gender_enum | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stars?: IntFieldUpdateOperationsInput | number
    profile_photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    cover_photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    user_account_type?: Enumaccount_typeFieldUpdateOperationsInput | $Enums.account_type
  }

  export type commentsUpdateWithoutCommented_postInput = {
    comment_id?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comment_likers?: usersUpdateManyWithoutComments_likedNestedInput
    commentator?: usersUpdateOneWithoutCommentsNestedInput
    parent_coment?: commentsUpdateOneWithoutSub_commentsNestedInput
    sub_comments?: commentsUpdateManyWithoutParent_comentNestedInput
  }

  export type commentsUncheckedUpdateWithoutCommented_postInput = {
    comment_id?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    commentator_id?: NullableStringFieldUpdateOperationsInput | string | null
    parent_comment_id?: NullableStringFieldUpdateOperationsInput | string | null
    comment_likers?: usersUncheckedUpdateManyWithoutComments_likedNestedInput
    sub_comments?: commentsUncheckedUpdateManyWithoutParent_comentNestedInput
  }

  export type commentsUncheckedUpdateManyWithoutCommented_postInput = {
    comment_id?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    commentator_id?: NullableStringFieldUpdateOperationsInput | string | null
    parent_comment_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type mediasUpdateWithoutMedia_postInput = {
    media_id?: StringFieldUpdateOperationsInput | string
    fileType?: Enumfile_type_enumFieldUpdateOperationsInput | $Enums.file_type_enum
    encoding?: StringFieldUpdateOperationsInput | string
    mimetype?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    size?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type mediasUncheckedUpdateWithoutMedia_postInput = {
    media_id?: StringFieldUpdateOperationsInput | string
    fileType?: Enumfile_type_enumFieldUpdateOperationsInput | $Enums.file_type_enum
    encoding?: StringFieldUpdateOperationsInput | string
    mimetype?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    size?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type mediasUncheckedUpdateManyWithoutMedia_postInput = {
    media_id?: StringFieldUpdateOperationsInput | string
    fileType?: Enumfile_type_enumFieldUpdateOperationsInput | $Enums.file_type_enum
    encoding?: StringFieldUpdateOperationsInput | string
    mimetype?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    size?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type users_saved_postsUpdateWithoutSaved_postInput = {
    post_saving_id?: StringFieldUpdateOperationsInput | string
    saved_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_saving?: usersUpdateOneWithoutUsers_saved_postsNestedInput
  }

  export type users_saved_postsUncheckedUpdateWithoutSaved_postInput = {
    post_saving_id?: StringFieldUpdateOperationsInput | string
    saved_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_saving_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type users_saved_postsUncheckedUpdateManyWithoutSaved_postInput = {
    post_saving_id?: StringFieldUpdateOperationsInput | string
    saved_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_saving_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type commentsCreateManyParent_comentInput = {
    comment_id?: string
    body: string
    created_at?: Date | string | null
    commentator_id?: string | null
    commented_post_id?: string | null
  }

  export type usersUpdateWithoutComments_likedInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    gender?: NullableEnumgender_enumFieldUpdateOperationsInput | $Enums.gender_enum | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stars?: IntFieldUpdateOperationsInput | number
    profile_photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    cover_photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    user_account_type?: Enumaccount_typeFieldUpdateOperationsInput | $Enums.account_type
    preferences?: post_categoriesUpdateManyWithoutInterested_usersNestedInput
    followers?: usersUpdateManyWithoutFollowingsNestedInput
    followings?: usersUpdateManyWithoutFollowersNestedInput
    user_posts?: postsUpdateManyWithoutAuthorNestedInput
    posts_liked?: postsUpdateManyWithoutPost_likersNestedInput
    messages?: messagesUpdateManyWithoutUsersNestedInput
    conversations?: conversationsUpdateManyWithoutUsersNestedInput
    user_sessions?: sessionsUpdateManyWithoutSession_userNestedInput
    nofitications?: nofiticationsUpdateManyWithoutUsersNestedInput
    users_saved_posts?: users_saved_postsUpdateManyWithoutUser_savingNestedInput
    comments?: commentsUpdateManyWithoutCommentatorNestedInput
  }

  export type usersUncheckedUpdateWithoutComments_likedInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    gender?: NullableEnumgender_enumFieldUpdateOperationsInput | $Enums.gender_enum | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stars?: IntFieldUpdateOperationsInput | number
    profile_photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    cover_photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    user_account_type?: Enumaccount_typeFieldUpdateOperationsInput | $Enums.account_type
    preferences?: post_categoriesUncheckedUpdateManyWithoutInterested_usersNestedInput
    followers?: usersUncheckedUpdateManyWithoutFollowingsNestedInput
    followings?: usersUncheckedUpdateManyWithoutFollowersNestedInput
    user_posts?: postsUncheckedUpdateManyWithoutAuthorNestedInput
    posts_liked?: postsUncheckedUpdateManyWithoutPost_likersNestedInput
    messages?: messagesUncheckedUpdateManyWithoutUsersNestedInput
    conversations?: conversationsUncheckedUpdateManyWithoutUsersNestedInput
    user_sessions?: sessionsUncheckedUpdateManyWithoutSession_userNestedInput
    nofitications?: nofiticationsUncheckedUpdateManyWithoutUsersNestedInput
    users_saved_posts?: users_saved_postsUncheckedUpdateManyWithoutUser_savingNestedInput
    comments?: commentsUncheckedUpdateManyWithoutCommentatorNestedInput
  }

  export type usersUncheckedUpdateManyWithoutComments_likedInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    gender?: NullableEnumgender_enumFieldUpdateOperationsInput | $Enums.gender_enum | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stars?: IntFieldUpdateOperationsInput | number
    profile_photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    cover_photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    user_account_type?: Enumaccount_typeFieldUpdateOperationsInput | $Enums.account_type
  }

  export type commentsUpdateWithoutParent_comentInput = {
    comment_id?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comment_likers?: usersUpdateManyWithoutComments_likedNestedInput
    commentator?: usersUpdateOneWithoutCommentsNestedInput
    commented_post?: postsUpdateOneWithoutCommentsNestedInput
    sub_comments?: commentsUpdateManyWithoutParent_comentNestedInput
  }

  export type commentsUncheckedUpdateWithoutParent_comentInput = {
    comment_id?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    commentator_id?: NullableStringFieldUpdateOperationsInput | string | null
    commented_post_id?: NullableStringFieldUpdateOperationsInput | string | null
    comment_likers?: usersUncheckedUpdateManyWithoutComments_likedNestedInput
    sub_comments?: commentsUncheckedUpdateManyWithoutParent_comentNestedInput
  }

  export type commentsUncheckedUpdateManyWithoutParent_comentInput = {
    comment_id?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    commentator_id?: NullableStringFieldUpdateOperationsInput | string | null
    commented_post_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type messagesCreateManyConversationsInput = {
    message_id?: string
    response_id?: string | null
    sender_id: string
    recipient_id: string
    message_status?: $Enums.message_status_enum | null
    content: string
    created_at?: Date | string | null
  }

  export type messagesUpdateWithoutConversationsInput = {
    message_id?: StringFieldUpdateOperationsInput | string
    response_id?: NullableStringFieldUpdateOperationsInput | string | null
    sender_id?: StringFieldUpdateOperationsInput | string
    recipient_id?: StringFieldUpdateOperationsInput | string
    message_status?: NullableEnummessage_status_enumFieldUpdateOperationsInput | $Enums.message_status_enum | null
    content?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attachments?: attachmentsUpdateManyWithoutMessagesNestedInput
    users?: usersUpdateManyWithoutMessagesNestedInput
  }

  export type messagesUncheckedUpdateWithoutConversationsInput = {
    message_id?: StringFieldUpdateOperationsInput | string
    response_id?: NullableStringFieldUpdateOperationsInput | string | null
    sender_id?: StringFieldUpdateOperationsInput | string
    recipient_id?: StringFieldUpdateOperationsInput | string
    message_status?: NullableEnummessage_status_enumFieldUpdateOperationsInput | $Enums.message_status_enum | null
    content?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attachments?: attachmentsUncheckedUpdateManyWithoutMessagesNestedInput
    users?: usersUncheckedUpdateManyWithoutMessagesNestedInput
  }

  export type messagesUncheckedUpdateManyWithoutConversationsInput = {
    message_id?: StringFieldUpdateOperationsInput | string
    response_id?: NullableStringFieldUpdateOperationsInput | string | null
    sender_id?: StringFieldUpdateOperationsInput | string
    recipient_id?: StringFieldUpdateOperationsInput | string
    message_status?: NullableEnummessage_status_enumFieldUpdateOperationsInput | $Enums.message_status_enum | null
    content?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersUpdateWithoutConversationsInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    gender?: NullableEnumgender_enumFieldUpdateOperationsInput | $Enums.gender_enum | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stars?: IntFieldUpdateOperationsInput | number
    profile_photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    cover_photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    user_account_type?: Enumaccount_typeFieldUpdateOperationsInput | $Enums.account_type
    preferences?: post_categoriesUpdateManyWithoutInterested_usersNestedInput
    followers?: usersUpdateManyWithoutFollowingsNestedInput
    followings?: usersUpdateManyWithoutFollowersNestedInput
    user_posts?: postsUpdateManyWithoutAuthorNestedInput
    posts_liked?: postsUpdateManyWithoutPost_likersNestedInput
    comments_liked?: commentsUpdateManyWithoutComment_likersNestedInput
    messages?: messagesUpdateManyWithoutUsersNestedInput
    user_sessions?: sessionsUpdateManyWithoutSession_userNestedInput
    nofitications?: nofiticationsUpdateManyWithoutUsersNestedInput
    users_saved_posts?: users_saved_postsUpdateManyWithoutUser_savingNestedInput
    comments?: commentsUpdateManyWithoutCommentatorNestedInput
  }

  export type usersUncheckedUpdateWithoutConversationsInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    gender?: NullableEnumgender_enumFieldUpdateOperationsInput | $Enums.gender_enum | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stars?: IntFieldUpdateOperationsInput | number
    profile_photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    cover_photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    user_account_type?: Enumaccount_typeFieldUpdateOperationsInput | $Enums.account_type
    preferences?: post_categoriesUncheckedUpdateManyWithoutInterested_usersNestedInput
    followers?: usersUncheckedUpdateManyWithoutFollowingsNestedInput
    followings?: usersUncheckedUpdateManyWithoutFollowersNestedInput
    user_posts?: postsUncheckedUpdateManyWithoutAuthorNestedInput
    posts_liked?: postsUncheckedUpdateManyWithoutPost_likersNestedInput
    comments_liked?: commentsUncheckedUpdateManyWithoutComment_likersNestedInput
    messages?: messagesUncheckedUpdateManyWithoutUsersNestedInput
    user_sessions?: sessionsUncheckedUpdateManyWithoutSession_userNestedInput
    nofitications?: nofiticationsUncheckedUpdateManyWithoutUsersNestedInput
    users_saved_posts?: users_saved_postsUncheckedUpdateManyWithoutUser_savingNestedInput
    comments?: commentsUncheckedUpdateManyWithoutCommentatorNestedInput
  }

  export type usersUncheckedUpdateManyWithoutConversationsInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    gender?: NullableEnumgender_enumFieldUpdateOperationsInput | $Enums.gender_enum | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stars?: IntFieldUpdateOperationsInput | number
    profile_photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    cover_photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    user_account_type?: Enumaccount_typeFieldUpdateOperationsInput | $Enums.account_type
  }

  export type attachmentsCreateManyMessagesInput = {
    attachment_id?: string
    file_url: string
    file_type?: $Enums.file_type_enum | null
    created_at?: Date | string | null
  }

  export type attachmentsUpdateWithoutMessagesInput = {
    attachment_id?: StringFieldUpdateOperationsInput | string
    file_url?: StringFieldUpdateOperationsInput | string
    file_type?: NullableEnumfile_type_enumFieldUpdateOperationsInput | $Enums.file_type_enum | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type attachmentsUncheckedUpdateWithoutMessagesInput = {
    attachment_id?: StringFieldUpdateOperationsInput | string
    file_url?: StringFieldUpdateOperationsInput | string
    file_type?: NullableEnumfile_type_enumFieldUpdateOperationsInput | $Enums.file_type_enum | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type attachmentsUncheckedUpdateManyWithoutMessagesInput = {
    attachment_id?: StringFieldUpdateOperationsInput | string
    file_url?: StringFieldUpdateOperationsInput | string
    file_type?: NullableEnumfile_type_enumFieldUpdateOperationsInput | $Enums.file_type_enum | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersUpdateWithoutMessagesInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    gender?: NullableEnumgender_enumFieldUpdateOperationsInput | $Enums.gender_enum | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stars?: IntFieldUpdateOperationsInput | number
    profile_photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    cover_photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    user_account_type?: Enumaccount_typeFieldUpdateOperationsInput | $Enums.account_type
    preferences?: post_categoriesUpdateManyWithoutInterested_usersNestedInput
    followers?: usersUpdateManyWithoutFollowingsNestedInput
    followings?: usersUpdateManyWithoutFollowersNestedInput
    user_posts?: postsUpdateManyWithoutAuthorNestedInput
    posts_liked?: postsUpdateManyWithoutPost_likersNestedInput
    comments_liked?: commentsUpdateManyWithoutComment_likersNestedInput
    conversations?: conversationsUpdateManyWithoutUsersNestedInput
    user_sessions?: sessionsUpdateManyWithoutSession_userNestedInput
    nofitications?: nofiticationsUpdateManyWithoutUsersNestedInput
    users_saved_posts?: users_saved_postsUpdateManyWithoutUser_savingNestedInput
    comments?: commentsUpdateManyWithoutCommentatorNestedInput
  }

  export type usersUncheckedUpdateWithoutMessagesInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    gender?: NullableEnumgender_enumFieldUpdateOperationsInput | $Enums.gender_enum | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stars?: IntFieldUpdateOperationsInput | number
    profile_photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    cover_photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    user_account_type?: Enumaccount_typeFieldUpdateOperationsInput | $Enums.account_type
    preferences?: post_categoriesUncheckedUpdateManyWithoutInterested_usersNestedInput
    followers?: usersUncheckedUpdateManyWithoutFollowingsNestedInput
    followings?: usersUncheckedUpdateManyWithoutFollowersNestedInput
    user_posts?: postsUncheckedUpdateManyWithoutAuthorNestedInput
    posts_liked?: postsUncheckedUpdateManyWithoutPost_likersNestedInput
    comments_liked?: commentsUncheckedUpdateManyWithoutComment_likersNestedInput
    conversations?: conversationsUncheckedUpdateManyWithoutUsersNestedInput
    user_sessions?: sessionsUncheckedUpdateManyWithoutSession_userNestedInput
    nofitications?: nofiticationsUncheckedUpdateManyWithoutUsersNestedInput
    users_saved_posts?: users_saved_postsUncheckedUpdateManyWithoutUser_savingNestedInput
    comments?: commentsUncheckedUpdateManyWithoutCommentatorNestedInput
  }

  export type usersUncheckedUpdateManyWithoutMessagesInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    gender?: NullableEnumgender_enumFieldUpdateOperationsInput | $Enums.gender_enum | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stars?: IntFieldUpdateOperationsInput | number
    profile_photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    cover_photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    user_account_type?: Enumaccount_typeFieldUpdateOperationsInput | $Enums.account_type
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}
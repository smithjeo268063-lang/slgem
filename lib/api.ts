export const API_BASE_URL = "https://logistics.fadawebs.com/api";

type ApiEnvelope<T> = {
  status?: boolean;
  message?: string;
  data?: T;
  errors?: Record<string, string[]>;
};

export type ApiRecord = {
  id?: number;
  slug?: string;
  title?: string;
  name?: string;
  description?: string;
  banner_image?: string;
  image?: string;
  created_at?: string;
  updated_at?: string;
};

export type ApiEvent = ApiRecord & {
  start_date?: string;
  end_date?: string;
  location?: string;
  capacity?: number;
  status?: string;
  registrations_count?: number;
  speakers?: Array<{ id?: number; name?: string; role?: string; bio?: string }>;
  schedule_items?: Array<{
    id?: number;
    time?: string;
    duration?: string;
    category?: string;
    title?: string;
    location?: string;
    speaker?: string;
  }>;
  event_galleries?: Array<{ id?: number; image?: string; image_url?: string }>;
};

export type ApiTeaching = ApiRecord & {
  embed_url?: string;
};

export type ApiTestimony = {
  id?: number;
  full_name?: string;
  testimony?: string;
  is_approved?: boolean;
};

export type ApiMission = ApiRecord & {
  goal_amount?: number;
  amount_raised?: number;
  target_amount?: number;
  raised_amount?: number;
  amounts?: {
    goal?: number;
    raised?: number;
    left?: number;
    progress?: number;
  };
  formatted?: {
    goal?: string;
    raised?: string;
    left?: string;
    progress?: string;
  };
};

export type ApiMissionUpdate = {
  id?: number;
  slug?: string;
  title?: string;
  date?: string;
  hero_image?: string;
  mission_update?: string;
  impact_image?: string;
  impact_content?: string;
  testimony_image?: string;
  testimony_content?: string;
  looking_ahead?: string;
};

export type ApiMissionWithUpdates = ApiRecord & {
  updates?: ApiMissionUpdate[];
};

export class ApiError extends Error {
  constructor(
    message: string,
    public readonly statusCode?: number,
  ) {
    super(message);
    this.name = "ApiError";
  }
}

export async function apiRequest<T>(
  path: string,
  init?: RequestInit,
  allowEmptyData = false,
): Promise<T> {
  const method = init?.method ?? "GET";
  const isPost = method.toUpperCase() === "POST";
  const logPath = path.split("?")[0];
  let response: Response;
  try {
    response = await fetch(`${API_BASE_URL}${path}`, {
      ...init,
      cache: "no-store",
      headers: {
        Accept: "application/json",
        ...(init?.body ? { "Content-Type": "application/json" } : {}),
        ...init?.headers,
      },
    });
  } catch (error) {
    if (isPost) {
      const errorMessage =
        error instanceof Error ? error.message : String(error);
      console.error(
        `[API POST] ${logPath} failed before receiving a response: ${errorMessage}`,
      );
    }
    throw error;
  }

  const responseBody = await response.text();
  let envelope: ApiEnvelope<T>;
  try {
    envelope = JSON.parse(responseBody) as ApiEnvelope<T>;
  } catch {
    const error = new ApiError(
      `The API returned an invalid response (${response.status}).`,
      response.status,
    );
    if (isPost) {
      console.error(
        `[API POST] ${logPath} failed: status=${response.status} ${response.statusText}; url=${API_BASE_URL}${logPath}; response=${responseBody || "(empty response body)"}`,
      );
    }
    throw error;
  }

  if (
    !response.ok ||
    envelope.status !== true ||
    (!allowEmptyData && envelope.data === undefined)
  ) {
    const error = new ApiError(
      envelope.message ?? `The API request failed (${response.status}).`,
      response.status,
    );
    if (isPost) {
      console.error(
        `[API POST] ${logPath} failed: status=${response.status} ${response.statusText}; url=${API_BASE_URL}${logPath}; response=${responseBody}`,
      );
    }
    throw error;
  }

  if (isPost) {
    console.info(`[API POST] ${logPath} succeeded`, {
      status: response.status,
    });
  }

  return (envelope.data ?? (allowEmptyData ? envelope : undefined)) as T;
}

export function apiGet<T>(path: string): Promise<T> {
  return apiRequest<T>(path);
}

export function apiPost<T>(
  path: string,
  body: Record<string, unknown>,
): Promise<T> {
  return apiRequest<T>(path, {
    method: "POST",
    body: JSON.stringify(body),
  }, true);
}

export function apiPostWithQuery<T>(
  path: string,
  query: Record<string, string>,
): Promise<T> {
  const searchParams = new URLSearchParams(query);
  return apiRequest(
    `${path}?${searchParams.toString()}`,
    { method: "POST" },
    true,
  );
}

export function getRecordImage(record: ApiRecord | null | undefined) {
  return record?.banner_image ?? record?.image ?? "";
}

export function getRecordTitle(record: ApiRecord | null | undefined) {
  return record?.title ?? record?.name ?? "";
}

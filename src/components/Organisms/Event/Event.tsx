import { type ReactElement } from "react";
import type { EventModel } from "@/models/EventModel";
import escudo from '@/assets/escudo.jpeg';

export const Event = ({ date, description, title }: EventModel): ReactElement => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-200 border border-gray-100">
      <div className="h-40 overflow-hidden">
        <img
          src={escudo}
          alt={title}
          className="flex flex-row justify-center items-center h-full w-full object-cover"
          loading="lazy"
        />
      </div>

      <div className="p-4 space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-xs font-medium text-gray-500">
            {new Date(date).toLocaleDateString()}
          </span>
          <span className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded-full">
            {title}
          </span>
        </div>

        <h3 className="text-lg font-semibold text-gray-800 line-clamp-2">
          {title}
        </h3>

        <p className="text-sm text-gray-600 line-clamp-3">
          {description}
        </p>
      </div>
    </div>
  );
};